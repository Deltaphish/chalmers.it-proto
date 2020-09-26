import requests
import json
from flask import Flask
from flask_graphql import GraphQLView
from graphene import ObjectType, String, List, Schema


class Course(ObjectType):
    name = String()
    dish = String()

class Resturant(ObjectType):
    name = String()
    courses = List(Course)

class Query(ObjectType):
    
    news = String()
    lunch = List(Resturant)

    def resolve_news(root, info):
        return requests.get("http://proto_news/api/news").text

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

app.add_url_rule('/graphql', view_func=GraphQLView.as_view(
    'graphql',
    schema=schema,
    graphiql=True
))
