# import chess
from flask import Flask, render_template

app = Flask(__name__)
app.debug = True

@app.route("/")
def index(name=None):
    return render_template('index.html', name=name)
    # return "ello world"

@app.route("/img/chesspieces/wikipedia/<piece>.png")
def rcp(piece):
    return app.url_for('static', filename=f'/img/chesspieces/wikipedia/{piece}.png')
