# Using base image provided by nginx unit
FROM nginx/unit:1.26.1-python3.9

ENV PYTHONBUFFERED=1
WORKDIR /app

COPY requirements.txt requirements.txt

RUN pip install --upgrade pip
RUN pip3 install --upgrade pip
RUN pip install -r requirements.txt

COPY config.json /docker-entrypoint.d/config.json

COPY . /app