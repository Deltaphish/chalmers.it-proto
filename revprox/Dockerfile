FROM python:3.8-buster

RUN pip install --no-cache-dir flask gunicorn requests
COPY . .
CMD ["gunicorn","-b 0.0.0.0:8000","app:app"]

