const express = require("express");
const app = express();

app.listen(3000, function () {
  console.log("listening on 3000");
});

// middleware that lets us handle reading data from the form element on its own
// the urlencoded method on express extracts data from the form element and adds then to the body prop in req
app.use(express.urlencoded({ extended: true }));

// read operation
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
// read operation

// create operation
app.post("/names", (req, res) => {
  console.log(req.body);
});
// create operation

// mongodb stuff below
// connection string
("mongodb+srv://tyler:sQXzIsBDxW3kUsL7@cluster0.r5q1t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(connectionString)
  .then(console.log("Connected to Database"))
  .catch((error) => console.error(error));

// MongoClient.connect('mongodb-connection-string', (err, client) => {

// });
