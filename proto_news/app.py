from flask import Flask
import json

app = Flask(__name__)

@app.route('/api/news')
def demo_news():
    return json.dumps({"title":"BRÅDSKANDE NYHETER: StyrIT har declarerat IT som en soveriegn nation och har taggit över hubben","details": "Negotiationer har misslyckats, våld är den enda lösningen säger försvarsmakten"})
