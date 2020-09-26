import json
from flask import Flask
app = Flask(__name__)

@app.route('/api/meny')
def demo_news():
    menu = [{"name":"Express", "courses": [{"course" : "Express", "dish" : "köttbullar"},{"course" : "Express - Vegan","dish":"Tofu-balls"}]},{"name":"Wiki","courses":[{"course":"Main","dish":"finnare köttbullar"}]}]
    return json.dumps(menu)
