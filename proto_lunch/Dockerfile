FROM python:3.8-buster

RUN pip install --no-cache-dir flask gunicorn
COPY . .
CMD ["gunicorn","-b 0.0.0.0:80","app:app"]

