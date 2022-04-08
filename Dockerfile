FROM python:3.8.10
ENV PYTHONBUFFERED=1
WORKDIR /app
COPY requirements.txt requirements.txt

RUN pip3 install --upgrade pip
RUN pip install -r requirements.txt

COPY . /app
EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "15400"]
