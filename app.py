from flask import Flask
from flask import jsonify
from flask_cors import CORS, cross_origin
from flask import Flask, render_template
from flask import request
import random,json,time
from os import environ 
import requests

API_KEY = environ.get('API_KEY')
SANDBOX_URL = environ.get('SANDBOX_URL')
RECIPIENT = environ.get('RECIPIENT')

app = Flask(__name__)
CORS(app, support_credentials=True)


@app.route("/", methods=["GET"])
@cross_origin(supports_credentials=True)
def sendQuestions():
    print("called")
    database = json.load(open("static/data.json"))
    return database

@app.route("/get_comments", methods=["GET"])
def get_comments():
    database = json.load(open("static/data.json"))
    comments = {}
    comments["data"] = []
    for comment_category in database["data"]:
        sz = len(comment_category["data"])
        number = 1
        if comment_category["category"] == "Random":
            number = 3
        random.seed(time.time())
        rand_numbers = random.sample(range(0, sz-1), number)
        for rand_number in rand_numbers:
            comment = {}
            comment.update(comment_category["data"][rand_number])
            comment["category"] = comment_category["category"]
            comments["data"].append(comment)
    return comments

@app.route("/post_answer", methods=["GET", "POST"])
def post_answer():
    # response = {}
    # response["question_type"] = request.args.get('question_type')
    # response["question_id"] = request.args.get('question_id')
    # response["question"] = request.args.get('question')
    # response["answer"] = request.args.get('answer')
    response  = request.data
    request_url = 'https://api.mailgun.net/v2/{0}/messages'.format(SANDBOX_URL)
    email_response = requests.post(request_url, auth=('api', API_KEY), data={
        'from': 'hello@example.com',
        'to': RECIPIENT,
        'subject': 'Hello',
        'text': str(response)
    })
    return str(email_response.status_code)

@app.route("/get_image", methods=["GET"])
def get_image():
    file_image_path = request.args["file_path"]
    return render_template("index.html", user_image = file_image_path)

@app.route("/<type>/<id>/<ans>", methods=["POST", "GET"])
def incrementer(id="", ans=""):
    return "Incremented number is " + str(id) + ans

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
