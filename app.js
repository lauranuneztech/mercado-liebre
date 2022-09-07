const express = require("express")
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, './public')));

app.use(express.static(__dirname + '/views'));

app.get("/home", (req, res) => {
    res.sendFile((__dirname + '/views/home.html'))
} );

app.get("/register", (req, res) => {
    res.sendFile((__dirname + '/views/register.html'))
} );

app.get("/login", (req, res) => {
    res.sendFile((__dirname + '/views/login.html'))
} );

const PORT = process.env.PORT || 3100

app.listen(PORT, function () {
    console.log("Levantando un servidor con Express", PORT)
})
