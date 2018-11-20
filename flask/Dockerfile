FROM python:3.6-alpine

RUN adduser -D api

WORKDIR /home/api

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

CMD ["flask", "run", "--host=0.0.0.0"]