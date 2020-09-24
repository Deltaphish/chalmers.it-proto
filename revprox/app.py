import requests
import json
from flask import Flask
app = Flask(__name__)

@app.route('/api/start')
def startpage():
    news_r = requests.get("http://proto_news/api/news")
    lunch_r = requests.get("http://proto_lunch/api/meny")
    return(json.dumps( [news_r.text, lunch_r.json()]))

