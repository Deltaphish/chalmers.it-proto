import requests
import json

from flask import Flask
from flask_cors import CORS

from flask_graphql import GraphQLView
from graphene import ObjectType, String, List, Schema, Field

class Course(ObjectType):
    name = String()
    dish = String()

class Resturant(ObjectType):
    name = String()
    courses = List(Course)

class Article(ObjectType):
    title = String()
    details = String()

    def resolve_title(root,info):
        return root["title"]

    def resolve_details(root,info):
        return root["details"]


class ArticleRecords(ObjectType):
    articles = List(Article)
    foo = String()

    def resolve_articles(root, info):
        articles = [requests.get("http://proto_news/api/news").json()]
        return articles

    def resolve_foo(root, info):
        return "bar"




class Query(ObjectType):
    
    articleRecords = Field(ArticleRecords)
    lunch = List(Resturant)

    def resolve_articleRecords(root, info):
        return ArticleRecords()

    def resolve_lunch(root,info):
        data = requests.get("http://proto_lunch/api/meny").json()
        ret = []
        courses_list = []
        for resturant in data:
            name = resturant['name']
            for courses in resturant['courses']:
                courses_list.append(Course(courses['course'],courses['dish']))
            ret.append(Resturant(name,courses_list))
            courses_list = []

        return ret

schema = Schema(query=Query)

app = Flask(__name__)
CORS(app,resources={r"/graphql/*": {"origins": "*"}})

app.add_url_rule('/graphql', view_func=GraphQLView.as_view(
    'graphql',
    schema=schema,
    types=[Article],
    graphiql=True
))
