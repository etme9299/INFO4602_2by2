const express = require('express');
let bodyParser = require('body-parser')
const app = express();
const config = require('./config');
const port = process.env.PORT || 8080;

const createRouter = require("./routes/create");
const mainRouter = require("./routes/main");
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
res.render("pages/home");
});


app.use("/create", createRouter);
app.use("/", mainRouter);




app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.render("pages/404");
    return;
});

app.listen(port, () => {
    console.log(`App listening at http://${config.serverInfo.hostName}`);
  });