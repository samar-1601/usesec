from flask import Flask
from flask import jsonify
from flask_cors import CORS, cross_origin
from flask import Flask, render_template
from flask import request
import random
import json

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
        rand_numbers = random.sample(range(0, sz-1), number)
        for rand_number in rand_numbers:
            comments["data"].append(comment_category["data"][rand_number])
    return comments

@app.route("/post_answer", methods=["GET", "POST"])
def post_answer():
    response = {}
    response["question_type"] = request.args.get('question_type')
    response["question_id"] = request.args.get('question_id')
    response["question"] = request.args.get('question')
    response["answer"] = request.args.get('answer')
    return response

@app.route("/get_image", methods=["GET"])
def get_image():
    file_image_path = request.args["file_path"]
    return render_template("index.html", user_image = file_image_path)

@app.route("/<type>/<id>/<ans>", methods=["POST", "GET"])
def incrementer(id="", ans=""):
    return "Incremented number is " + str(id) + ans

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
