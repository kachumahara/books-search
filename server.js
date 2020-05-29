const express = require("express");

const mongoose = require("mongoose");

const routes = require("./routes");

const app = express();

const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//Serve up static assets

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://user22:<password>@heroku2275-jqrd8.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// ////https://www.youtube.com/watch?v=WDrU305J1yw

// // https://www.youtube.com/watch?v=qXIG8iKO7Fo&feature=youtu.be&list=PLOFmg4xbN_TPrB6w4rThsFanVxJI_SfER

// // user22: Hav123
