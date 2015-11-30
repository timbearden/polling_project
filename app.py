from flask import Flask
from flask import render_template, url_for
from pymongo import MongoClient


app = Flask(__name__)

# HOST = 'localhost'
# PORT = 27017
# conn = MongoClient(HOST, PORT)

@app.route("/", methods=["GET"])
def index():
  return render_template('index.html')

@app.route("/poll", methods=["GET"])
def poll():
  COLLECTION = 'polls'
  # FIELDS = {}
  # pollData = conn.find(COLLECTION, FIELDS)
  return render_template('poll.html')


if __name__ == "__main__":
  app.run(debug=True)