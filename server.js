
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://user22:<password>@heroku2275-jqrd8.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

////https://www.youtube.com/watch?v=WDrU305J1yw

// https://www.youtube.com/watch?v=qXIG8iKO7Fo&feature=youtu.be&list=PLOFmg4xbN_TPrB6w4rThsFanVxJI_SfER
