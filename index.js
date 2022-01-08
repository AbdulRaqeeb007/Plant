const express = require("express");

const app = express();

const port = 5000;

app.get("/", (req, res) => {
    res.send("Hellow World With First Api");

    console.log("Hellow World With First Api");
})


app.listen(port, () => {
    console.log("server is running")
})