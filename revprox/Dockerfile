FROM python:3.8-buster

RUN pip install --no-cache-dir flask gunicorn requests graphene flask-graphql flask-cors
COPY . .
CMD ["gunicorn","-b 0.0.0.0:8000","app:app"]

