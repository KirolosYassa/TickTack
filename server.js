/*
touch index.html styles.css app.js
npm init
npm i express https body-parser request fetch node-fetch fs alert dom DOM
nodemon app.js
*/

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const fs = require("fs");
const alert = require("alert");
const productsFilename = "./public/products.json";
const usersFilename = './public/users.json';
const productsFile = require(productsFilename);
const usersFile = require(usersFilename);


const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/index.html", (req, res) => {
    res.sendFile(__dirname + "/index.html")

})

app.post("/home.html", (req, res) => {

    var newUser = req.body;
    console.log(newUser);

    var configFile = fs.readFileSync(usersFilename);
    var config = JSON.parse(configFile);
    config.push(newUser);
    var configJSON = JSON.stringify(config);
    fs.writeFileSync(usersFilename, configJSON);

    var usersData = fs.readFileSync(usersFilename);
    var obj = JSON.parse(usersData);
    console.log("\n-----------\nUser Json File:\n" + JSON.stringify(obj));

    return res.redirect("/home.html");
})


app.post("/productsPage.html", (req, res) => {

    var user = req.body;
    console.log(user);

    let found = false;
    var usersData = fs.readFileSync(usersFilename);
    var obj = JSON.parse(usersData);
    // console.log(obj.length);
    for (let ele = 0; ele < obj.length; ele++) {
        if (obj[ele].name === user.name && obj[ele].password === user.password) {
            found = true;
        }
    }

    if (found) {
        console.log("Signed in Successfully");
        return res.redirect("/productsPage.html");
    }
    console.log("Failure siginning in");
    return res.redirect("/home.html");
    // console.log("\n-----------\nUser Json File:\n" + JSON.stringify(obj));

})


app.get("/home.html", (req, res) => {
    res.sendFile(__dirname + "/home.html")
})

app.get("/productsPage.html", (req, res) => {
    res.sendFile(__dirname + "/productsPage.html")
})


app.post("/mobilePage.html", (req, res) => {
    
    res.sendFile(__dirname + "/mobilePage.html")
})

app.get("/register.html", (req, res) => {
    res.sendFile(__dirname + "/register.html")
})

app.get("/contact.html", (req, res) => {
    res.sendFile(__dirname + "/contact.html")
})


app.listen(3000 || Process.env.PORT, () => {
    console.log("Server is running at Port: 3000...")
})



function checkNullElement(element) {
    if (element == '') {
        return false;
    }
    return true;
}