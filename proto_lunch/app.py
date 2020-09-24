import json
from flask import Flask
app = Flask(__name__)

@app.route('/api/meny')
def demo_news():
    menu = {"Express":"köttbullar", "Wiki": "finnare köttbulla", "Alfas": "köttbulls macka"}
    return json.dumps(menu)
