/**     Rest API     */
import express from "express";
const app = express();

let text = "Hello, world";

app.get("/message", (_req, res) => {
    res.send(text);
});
app.put("/message", (req, res) => {
    text += req.body;
    res.send(text);
});
app.post("/message", (req, res) => {
    text = req.body;
    res.send(text);
});
app.delete("/message", (_req, res) => {
    text = "";
    res.send(text);
});

app.listen(5001, () => {
    console.log("REST running on port 5001");
});

/**         GraphQL API        */
import http from 'http';
import { createHandler } from "graphql-http/lib/use/http";
import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Query {
        message: String
    }

    type Mutation {
        changeMessage(message: String): String
        addText(text: String): String
        deleteText: String
    }
`);

const root = {
    message() {
        return text;
    },
    changeMessage({ message }) {
        text = message;
        return text;
    },
    addText({ text }) {
        text += this.message;
        return text;
    },
    deleteText() {
        text = "";
        return text;
    }
};

const handler = createHandler({
    schema,
    rootValue: root,
});

const server = http.createServer((req, res) => {
    if (req.url?.startsWith('/graphql')) {
        handler(req, res);
    } else {
        res.writeHead(404).end();
    }
});

server.listen(8000, () => {
    console.log("Graphql server running on port 8000");
});


/**      WebSocket endpoint       */
import { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
    console.log("Connected...");

    const int = setInterval(() => {
        ws.send(Date().toString());
    }, 1000);
    
    ws.on('message', function(msg) {
        if (msg.toString() === "end") {
            clearInterval(int);
        }
    });

    ws.on('close', function() {
        clearInterval(int);
        console.log("Disconnected...");
    });
});