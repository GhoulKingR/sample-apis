from flask import Flask, request

app = Flask(__name__)
text = "Hello, world"

@app.get("/message")
def read():
    return text

@app.put("/message")
def append():
    global text
    text += request.get_data(as_text=True)
    return text

@app.post("/message")
def change():
    global text
    text = request.get_data(as_text=True)
    return text

@app.delete("/message")
def delete():
    global text
    text = ""
    return text


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=False)