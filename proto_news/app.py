from flask import Flask
app = Flask(__name__)

@app.route('/api/news')
def demo_news():
    return "BRÅDSKANDE NYHETER: StyrIT har declarerat IT som en soveriegn nation och har taggit över hubben. Negotiationer har misslyckats, våld är den enda lösningen säger försvarsmakten"
