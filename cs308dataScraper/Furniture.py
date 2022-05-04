import os
import time

import pandas as pd
import helper
import json
import requests
from bs4 import BeautifulSoup
from datetime import datetime
import secrets


class NewsPaper:
    def __init__(self, username: str, config: dict, website: str = ""):
        self.username = username.lower().strip()
        self.website = website

        self.density = config["density"]
        if (500 % self.density) != 0:
            raise ValueError("Density of \"" + self.username + "\" must divide 500. " + str(self.density) + " does not divide 500")

        # PATHS
        self.io_path = config["path"]
        self.cl_tw_path = ""  # clean tweet path
        self.rw_tw_path = ""  # raw tweet path
        self.cl_pg_path = ""  # clean web page path
        self.rw_pg_path = ""  # raw web page path

        # INDICES
        self.clean_tweet_index = 0

        # corresponding clean tweet file number => raw_wp_index // 500
        # corresponding raw web page file number => raw_wp_index // self.density
        self.raw_wp_index = 0

        self.clean_wp_index = 0

        # Create data directory folders
        folder_names = ["01_raw_tweets", "02_clean_tweets", "03_raw_pages", "04_clean_pages"]
        for folder_name in folder_names:
            if not os.path.exists(os.path.join(self.io_path, folder_name)):
                os.makedirs(os.path.join(self.io_path, folder_name))

        # Statistics
        self.tweet_success = 0
        self.tweet_fail = 0
        self.raw_success = 0
        self.clean_success = 0
        self.raw_fail = 0
        self.clean_fail = 0
        self.stats_path = os.path.join(self.io_path, "stats.txt")

    def set_path(self, folder_name, number):
        """
        Sets given path attribute to PATH/../number.json
        :type folder_name: str
        :param folder_name: raw_tweets, clean_tweets, raw_pages, clean_pages
        :type number: int
        :param number: from 0 to infinite integer
        :return: None
        """
        if folder_name == "raw_tweets":
            self.rw_tw_path = os.path.join(self.io_path, os.path.join("01_raw_tweets", str(number) + ".json"))
        if folder_name == "clean_tweets":
            self.cl_tw_path = os.path.join(self.io_path, os.path.join("02_clean_tweets", str(number) + ".json"))
        if folder_name == "raw_pages":
            self.rw_pg_path = os.path.join(self.io_path, os.path.join("03_raw_pages", str(number) + ".json"))
        if folder_name == "clean_pages":
            self.cl_pg_path = os.path.join(self.io_path, os.path.join("04_clean_pages", str(number) + ".json"))

    def add_log(self, folder_name, index, old_json, message):
        """
        Stores the problem creator json lines with some info.

        Information are index, indextype, time, json obj, exception msg.

        :param folder_name: "clean_tweets", "raw_pages", "clean_pages"
        :param index: int index value when the exception occurred
        :param old_json: the all json line object that source of the problem
        :param message: exception message when problem occured
        :return: "folder_name_log.json" file
        """
        log_file = ""
        index_type = ""
        if folder_name not in ["clean_tweets", "raw_pages", "clean_pages"]:
            raise ValueError("folder name must be either clean_tweets, raw_pages, or clean_pages")
        now = datetime.now()  # current date and time
        date_time = now.strftime("%d/%m/%Y, %H:%M:%S")
        if folder_name == "clean_tweets":
            log_file = os.path.join(self.io_path, os.path.join("02_clean_tweets", "cl_tw_log.json"))
            index_type = "clean_tweet_index"
        if folder_name == "raw_pages":
            log_file = os.path.join(self.io_path, os.path.join("03_raw_pages", "rw_pg_log.json"))
            index_type = "set_raw_wp_index"
        if folder_name == "clean_pages":
            log_file = os.path.join(self.io_path, os.path.join("04_clean_pages", "cl_pg_log.json"))
            index_type = "clean_wp_index"
        p_data = {'index': index, 'index_type': index_type, 'date': date_time, 'json': old_json, 'exception': message}
        data_file = open(log_file, "a", encoding="UTF-8")
        json.dump(p_data, data_file, ensure_ascii=False)
        data_file.write("\n")
        data_file.close()

    def set_raw_wp_index(self):
        """
        Sets self.raw_wp_index to the total parsed raw webpage (raw HTML files) number.
        Also sets the current raw_pages file name to the raw_wp_index // 5 and sets the clean_tweets path to the
        corresponding clean tweet file name. (raw_wp_index // 500)
        :return: None
        """
        self.raw_wp_index = (self.raw_wp_index // self.density) * self.density
        self.set_path("raw_pages", self.raw_wp_index // self.density)
        self.set_path("clean_tweets", self.raw_wp_index // 500)
        if not helper.startup_check(self.rw_pg_path):
            return

        while helper.startup_check(self.rw_pg_path):
            self.raw_wp_index += self.density
            self.set_path("raw_pages", self.raw_wp_index // self.density)

        self.raw_wp_index -= self.density
        self.set_path("raw_pages", self.raw_wp_index // self.density)
        self.raw_wp_index += pd.read_json(self.rw_pg_path, lines=True, encoding="UTF-8", dtype=False).shape[0]
        self.set_path("raw_pages", self.raw_wp_index // self.density)
        self.set_path("clean_tweets", self.raw_wp_index // 500)

    def parse_tweet(self):
        """
        Parses ONLY ONE tweet file and creates a raw_pages file (raw HTML) with the requested link from the link.

        If the tweet does not contain any link, the url part of the parsed raw_page file becomes "". If the link does not
        contain the domain of the news paper it is also stored as empty string.

        If the corresponding tweet could not be parsed (e.g. empty tweet line) empty json ({}) added to the file for
        the index consistency.

        It also sets the self.raw_wp_index for the next parse_tweet call.
        :return: If the parsing continues returns True else False
        """

        self.set_raw_wp_index()
        try:
            tweet_file = pd.read_json(self.cl_tw_path, lines=True, encoding="UTF-8", dtype=False)
        except ValueError as e:
            print("There is no file to parse such as", self.cl_tw_path)
            self.add_log("raw_pages", self.raw_wp_index, "There is no file to parse such as " + self.cl_tw_path, str(e))
            return False
        data_file = open(self.rw_pg_path, "a", encoding="UTF-8")
        tweet = ""
        try:
            tweet = tweet_file.iloc[self.raw_wp_index % 500]
            url = result = ""
            if len(tweet["urls"]) > 0:
                # TODO : Only getting the first url. parse the urls list.
                url = tweet["urls"][0]
                r = self.request_wrapper(url)

                url = r.url
                result = r.text
            print("username:", self.username, url, "raw html is downloading...")
            data = {'id': tweet["id"], 'date': tweet["date"].__str__(), 'url': url, 'html': result}
            json.dump(data, data_file, ensure_ascii=False)
            self.raw_success += 1
        except Exception as e:
            print("error:", e)
            print("Index", self.raw_wp_index, "is empty. Adding {} to the file.")
            self.add_log("raw_pages", self.raw_wp_index, tweet, str(e))
            json.dump({}, data_file, ensure_ascii=False)
            self.raw_fail += 1
            return False
        finally:
            data_file.write("\n")
            data_file.close()
            self.raw_wp_index += 1
            return True

    def request_wrapper(self, url):
        return requests.get(url)

    def get_content(self, raw_html: str, url: str) -> tuple:
        """
        Parses the given html file (as string) and gets header1, header2, content, parsed web page category

        Returned data_type is the type of the content. e.g. news, opinion column.
        It stores the exception message if any occurs.
        :param url: url of the parsed web page as str
        :param raw_html: all webpage HTML of the url

        :return: ("h1", "h2", "content", "data_type")
        """
        # Override this method in subclasses.
        return "h1", "h2", "content", "data_type"

    def set_clean_wp_index(self):
        """
        Sets self.clean_wp_index to the total parsed clean webpages (clean pages files) number.
        Also sets the current raw_pages file name to the clean_wp_index // 5 and sets the clean page path to the
        corresponding raw page file name. (clean_wp_index // 5)
        :return: None
        """
        self.clean_wp_index = (self.clean_wp_index // self.density) * self.density
        self.set_path("clean_pages", self.clean_wp_index // self.density)
        self.set_path("raw_pages", self.clean_wp_index // self.density)
        if not helper.startup_check(self.cl_pg_path):
            return

        while helper.startup_check(self.cl_pg_path):
            self.clean_wp_index += self.density
            self.set_path("clean_pages", self.clean_wp_index // self.density)

        self.clean_wp_index -= self.density
        self.set_path("clean_pages", self.clean_wp_index // self.density)
        self.clean_wp_index += pd.read_json(self.cl_pg_path, lines=True, encoding="UTF-8", dtype=False).shape[0]
        self.set_path("clean_pages", self.clean_wp_index // self.density)
        self.set_path("raw_pages", self.clean_wp_index // self.density)

    def parse_html(self):
        """
        Parses ONLY ONE raw html file and creates a clean_pages file with the "h1", "h2", "content", "data_type" schema.

        IMPORTANT: For every NewsPaper subclass this method calls different get_content methods. For a correct working
        the subclass must override the get_content method.

        If the raw page contains domain name of the news paper, it parses the raw html and extracts the  "h1", "h2",
        "content", "data_type" sections.

        If the corresponding tweet could not be parsed (e.g. url does not contain the domain name of the news paper)
        empty json ({}) added to the file for the index consistency.

        :return: If the parsing continues returns True else False
        """
        self.set_clean_wp_index()
        try:
            wp_file = pd.read_json(self.rw_pg_path, lines=True, encoding="UTF-8", dtype=False)
        except ValueError as e:
            print("There is no file to parse such as", self.rw_pg_path)
            self.add_log("clean_pages", self.clean_wp_index, "There is no file to parse such as " + self.rw_pg_path, str(e))
            return False
        data_file = open(self.cl_pg_path, "a", encoding="UTF-8")
        wp = ""
        try:
            # Get the targeted raw html line from raw tweets page
            wp = wp_file.iloc[self.clean_wp_index % self.density]
            result = "", "", "", ""

            if self.website in wp["url"]:
                result = self.get_content(wp["html"], wp["url"])
            print("username:", self.username, wp["url"], "raw html is parsing...")

            h1, h2, content, data_type = result
            data = {'id': wp["id"], 'date': wp["date"].__str__(), 'url': wp["url"], 'header1': h1, 'header2': h2, 'content': content, 'data_type': data_type}
            json.dump(data, data_file, ensure_ascii=False)
            data_file.write("\n")
            self.clean_success += 1
            data_file.close()
            return True
        except IndexError as d:
            print("Can not parse anymore for", self.username)
            data_file.close()
            return False
        except Exception as e:
            print(e)
            print("An error occured at index", self.clean_wp_index, "while processing from 03_raw_pages files to 04_clean_pages files.")
            self.add_log("clean_pages", self.clean_wp_index, wp, str(e))
            #json.dump({}, data_file, ensure_ascii=False) ???
            self.clean_fail += 1
            data_file.close()
            return False

    @staticmethod
    def round_robin_parse_tweet(newspaper_object_list, lap_number, time_period, randbits=11, stats=True):
        """
        Parses tweets in a round robin fashion. Parses tweets of the given newspaper_object_list elements in order one
        by one with a circular manner. Waits between parsing inversely proportional time to the length of the list

        :param stats: Creates stats.txt file if true every 50 laps.
        :param time_period: how many seconds will pass before parsing the same NewsPaper
        :param newspaper_object_list: List of different NewsPaper type objects
        :param lap_number: how many rounds the tweets will be parsed
        :param randbits: (11 is a good choice) Adds a random waiting time between (2^randbits)/1000 seconds for security
        purposes.
        :return:
        """
        period = time_period/len(newspaper_object_list)
        for i in range(1, lap_number+1):
            for j in newspaper_object_list:
                if not j.parse_tweet():
                    print("Parsing raw tweets for", j.username, "ended.")
                    newspaper_object_list.remove(j)
                time.sleep(period + secrets.randbits(randbits)/1000)
                if i % 50 == 0:
                    j.get_stats()

    def parse_html_all(self):
        """
        Parses all web pages for one NewsPaper object
        :return:
        """
        while True:
            if not self.parse_html():
                print("Parsing html for", self.username, "ended.")
                return


class Halktv(NewsPaper):
    def __init__(self, config: dict):
        super().__init__("halktvcomtr", config, "halktv.com")
        self.parsed_tweets_file_index = 0

    def get_content(self, raw_html, url):
        soup = BeautifulSoup(raw_html, "lxml")
        h1, h2, content = "", "", []
        try:
            if "/foto-galeri/" in url:
                article = soup.find(class_="gallery-detail")
                content_type = "photo_gallery"
            else:
                article = soup.find(class_="article-detail news-detail")
                content_type = "news"
                h2 = soup.find("h2").text
            h1 = soup.find("h1").text

            # Find the images and main text
            raw_content = article.find_all(name=["p", "img"])
            for i in raw_content:
                if i.name == "p":
                    content.append(i.text)
                else:
                    if "data-src" in i.attrs:
                        description = i.attrs["alt"]
                        src = i.attrs["data-src"]
                        content.append([src, description])
            return h1, h2, content, content_type
        except AttributeError as e:
            return h1, h2, content, e.__str__()


class Sabah(NewsPaper):
    def __init__(self, config: dict):
        super().__init__("sabah", config, "sabah.com.tr")

    def check_text(self, element) -> bool:
        """
        A helper method to get_content() method.
        """
        blacklist = []
        is_text = True
        for i in blacklist:
            if element.find(i) is not None:
                is_text = False
                break
        return is_text

    def get_content(self, raw_html, url):
        soup = BeautifulSoup(raw_html, "lxml")
        h1, h2, content = "", "", []
        if "/galeri/" in url:
            h1 = soup.find("h1").get_text().strip()
            h2 = soup.find("h2").get_text().strip()
            gallery_items = soup.find_all(class_="galleryItem")
            for item in gallery_items:
                figure = item.find("figure")
                raw_content = figure.find_all(name=["p", "img"])
                for i in raw_content:
                    if "src" in i.attrs:
                        description = i.attrs["alt"]
                        src = i.attrs["src"]
                        content.append([src, description])
                    else:
                        if self.check_text(i):
                            content.append(i.get_text().replace(u'\xa0', " "))
                #text = text + " " + "\n".join([k.get_text().replace(u'\xa0', " ") for k in item.find_all("p") if self.check_text(k)])
            return h1, h2, content, "photo_gallery"
        else:
            try:
                h1 = soup.find("h1").get_text().strip()
                h2 = soup.find("h2").get_text().strip()
                top_img = soup.find(class_="newsImage")
                # Add top image if exists
                if top_img is not None:
                    top_img = top_img.find("img")
                    description = top_img.attrs["alt"]
                    src = top_img.attrs["src"]
                    content.append([src, description])
                # Add rest of the body
                article = soup.find_all(class_="newsDetailText")
                raw_content = article.find_all(name=["p", "img"])
                for i in raw_content:
                    if "src" in i.attrs:
                        description = i.attrs["alt"]
                        src = i.attrs["src"]
                        content.append([src, description])
                    else:
                        if self.check_text(i):
                            content.append(i.get_text().replace(u'\xa0', " "))
                #text = "\n".join([k.get_text().replace(u'\xa0', " ") for k in soup.find_all(class_="newsDetailText") if self.check_text(k)])
                return h1, h2, content, "news"
            except AttributeError as e:
                return h1, h2, content, e.__str__()


class Donanimhaber(NewsPaper):
    def __init__(self,  config: dict):
        super().__init__("donanimhaber", config, "donanimhaber.com")

    def check_text(self, element) -> bool:
        """
        A helper method to get_content() method.
        """
        blacklist = ["span", "figure", "aside"]
        is_text = True
        for i in blacklist:
            if element.find(i) is not None:
                is_text = False
                break
        return is_text

    def get_content(self, raw_html, url):
        soup = BeautifulSoup(raw_html, "lxml")
        h1, h2, text = "", "", ""
        r = soup.find(class_="kolon yazi")
        try:
            h1 = soup.find(class_="post-baslik").get_text().replace("\r\n", " ").strip()
            h2 = soup.find(class_="surmanset").get_text().replace("\r\n", " ").strip()
            text = "\n".join([k.get_text().replace(u'\xa0', " ") for k in r.find_all("p", recursive=False) if self.check_text(k)])
            return h1, h2, text, "news"
        except AttributeError as e:
            return h1, h2, text, e.__str__()


class Milliyet(NewsPaper):
    def __init__(self, config: dict):
        super().__init__("milliyet", config, "milliyet.com.tr")

    def get_content(self, raw_html, url):
        soup = BeautifulSoup(raw_html, "lxml")
        h1, h2, content = "", "", []
        try:

            if "/galeri/" in url:
                h1 = soup.find(class_="rhd-article-title").text
                h2 = soup.find(class_="rhd-article-spot").text
                article = soup.find(class_="gallery-main-container")
                raw_content = article.find_all(class_=["description", "_picture"])

                for i in raw_content:
                    if i.find(name="img") is None:
                        content.append(i.text)
                    else:
                        img = i.find(name="img")
                        description = img.attrs["alt"]
                        src = img.attrs["data-src"]
                        content.append([src, description])
                return h1, h2, content, "gallery"
            else:
                # Add title and header
                h1 = soup.find(class_="nd-article__title").text
                h2 = soup.find(class_="nd-article__spot").text
                # Add the first image
                head_img = soup.find(class_="row nd-article__img-wrapper")
                if head_img is not None:
                    img = head_img.find("img")
                    description = img.attrs["alt"]
                    src = img.attrs["data-src"]
                    content.append([src, description])
                # Add rest of the body
                article = soup.find(class_="nd-article__content")
                raw_content = article.find_all(name=["p", "img"])
                for i in raw_content:
                    if i.name == "p":
                        content.append(i.text)
                    else:
                        if "data-src" in i.attrs:
                            description = i.attrs["alt"]
                            src = i.attrs["data-src"]
                            content.append([src, description])
                return h1, h2, content, "news"
        except AttributeError as e:
            return h1, h2, content, e.__str__()



