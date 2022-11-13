from flask import Flask
from flask import jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, support_credentials=True)


@app.route("/", methods=["GET"])
@cross_origin(supports_credentials=True)
def sendQuestions():
    print("called")
    questions = {
        "text": [
            {"id": 1, "question": "How r you"},
            {"id": 2, "question": "How r you"},
            {"id": 3, "question": "How r you"},
            {"id": 4, "question": "How r you"},
            {"id": 5, "question": "How r you"},
            {"id": 6, "question": "How r you"},
            {"id": 7, "question": "How r you"},
        ],
        "facebook": [
            {"id": 1, "question": "How r you"},
            {"id": 2, "question": "How r you"},
            {"id": 3, "question": "How r you"},
        ],
        "liker": [
            {"id": 1, "question": "How r you liker"},
            {"id": 2, "question": "How r you"},
            {"id": 3, "question": "How r you"},
        ],
    }
    import json
    return json.load(open("database/data.json"))


@app.route("/<type>/<id>/<ans>", methods=["POST", "GET"])
def incrementer(id="", ans=""):
    return "Incremented number is " + str(id) + ans


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
