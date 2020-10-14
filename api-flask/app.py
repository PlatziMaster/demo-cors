from flask import Flask
from flask import jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route('/polls')
def polls():
    return jsonify([
      {
        "id": 1,
        "poll": "Poll 1"
      },
      {
        "id": 2,
        "poll": "Poll 2"
      }
    ])