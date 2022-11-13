# import chess
from flask import Flask, render_template, request

app = Flask(__name__)
app.debug = True

@app.route("/")
def index(name=None):
    return render_template('index.html', name=name)
    # return "ello world"

@app.route("/img/chesspieces/wikipedia/<piece>.png")
def rcp(piece):
    return app.url_for('static', filename=f'/img/chesspieces/wikipedia/{piece}.png')


@app.route('/write_pos_to_flask', methods=['POST'])
def get_post_board_pos():
    board_pos = request.form['nPos']
    print(board_pos)
    return board_pos