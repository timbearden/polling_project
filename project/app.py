from flask import Flask
from flask import render_template, url_for


app = Flask(__name__)


@app.route("/", methods=["GET"])
def index():
  return render_template('index.html')
#
# @app.route("/poll", methods=["GET"])
# def poll():
#   COLLECTION = 'polls'
#   return render_template('poll.html')

if __name__ == "__main__":
  app.run(debug=True)
