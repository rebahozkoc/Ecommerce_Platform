import random
import pandas as pd
import time
import os
import secrets


def startup_check(filename: str) -> bool:
    """
    :param filename: file name included extension
    :return True if the file exists in the current directory.
    """
    return os.path.isfile(filename) and os.access(filename, os.R_OK)


class TweetStats:
    """Calculates the Twitter statistics of a Twitter user.

    Initiate the object with Twitter username and website url of the user (optional).
    Initiating the objects calculates the statistics.
    Call the get_stats() method to print the results.
    """
    def __init__(self, username: str, data_folder_directory: str, website_url: str = None):
        """
        :param username: Twitter username
        :param website_url: Website url of the user (optional)
        """
        start = time.time()
        # Create wanted stats.
        filename = os.path.join(data_folder_directory, username + ".json")
        self.df = pd.read_json(filename, lines=True, encoding="UTF-8", dtype=False)
        self.total_tweet_number = len(self.df)
        self.total_tweet_number_contain_link = 0
        self.total_tweet_number_contain_multiple_link = 0
        self.daily_average_tweet_number = 0
        self.last_100_days_average = 0
        self.total_tweet_number_user_web_site = 0

        self.__get_link_stats__(website_url)
        self.__get_average__()

        end = time.time()
        print("Tweet statistics are calculated. Elapsed time: " + str(end-start) + "s")

    def __get_link_stats__(self, website_url):
        def check_link(urls):
            if len(urls) == 1:
                self.total_tweet_number_contain_link += 1
            elif len(urls) > 1:
                self.total_tweet_number_contain_link += 1
                self.total_tweet_number_contain_multiple_link += 1
            if website_url is not None and len(website_url) > 4:
                for url in urls:
                    if website_url in url:
                        self.total_tweet_number_user_web_site += 1
                        break
        r = [check_link(x) for x in self.df["urls"]]

    def __get_average__(self):
        daily_tweets = 0
        day_number = 0
        day = self.df["date"][0]

        def get_day(new_day):
            nonlocal daily_tweets, day_number, day
            if new_day == day:
                daily_tweets += 1
            else:
                daily_tweets += 1
                day_difference = (day - new_day).days
                day = new_day
                self.daily_average_tweet_number = (self.daily_average_tweet_number * day_number + daily_tweets) / (day_number + day_difference)
                if day_number <= 100:
                    self.last_100_days_average = self.daily_average_tweet_number
                day_number += day_difference
                daily_tweets = 0
        r = [get_day(x) for x in self.df["date"]]

    def get_stats(self):
        """
        :return: prints all the statistics of the user.
        """
        print("Total tweet number:", self.total_tweet_number)
        print("Total tweets number that contain link(s):", self.total_tweet_number_contain_link)
        print("Total tweets number that contain multiple links:", self.total_tweet_number_contain_multiple_link)
        print("Total tweets number that contain link(s) of the user's website:", self.total_tweet_number_user_web_site)
        print("Daily average tweet number:", self.daily_average_tweet_number)
        print("Daily average tweet number (last 100 days):", self.last_100_days_average)


def tr_codec_corrector(text: str) -> str:
    """
    A helper function for scraping the Hurriyet website.
    """
    import sys
    sys.setrecursionlimit(5000)
    tr_chars = ["ç", "ğ", "ı", "ö", "ü", "ş", "Ç", "Ğ", "İ", "Ö", "Ş", "Ü"]
    c1252 = 0
    c1254 = 0
    try:
        return text.encode("cp1252").decode("utf_8")
    except (UnicodeDecodeError, UnicodeEncodeError) as e:
        c1252 = e.start
        try:
            return text.encode("cp1254").decode("utf_8")
        except (UnicodeDecodeError, UnicodeEncodeError) as d:
            c1254 = d.start
            i = max(c1252, c1254)
            if text[i] in tr_chars:
                return tr_codec_corrector(text[:i]) + text[i] + tr_codec_corrector(text[i+1:])
            else:
                return tr_codec_corrector(text[:i] + text[i+1:])


def get_join_date(username: str) -> str:
    """
    :param username: Twitter username
    :return: YYYY-mm-dd 00:00:01
    """
    import twint
    temp_config = twint.Config()
    temp_config.Hide_output = True
    temp_config.Username = username.lower()
    temp_config.Store_object = True
    twint.run.Lookup(temp_config)
    user = twint.output.users_list[0]
    return user.join_date + " 00:00:01"


def wait_random() -> None:
    """Waits up to 5 seconds. Uses real randomness, not pseudo."""
    time.sleep(secrets.randbelow(4) + random.random())


class EmptyException(BaseException):
    def __init__(self):
        BaseException()
