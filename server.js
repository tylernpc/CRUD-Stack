const express = require("express");
const app = express();

app.listen(3000, function () {
  console.log("listening on 3000");
});


// read operation
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
// read operation

// create operation
app.post("/names", (req, res) => {
    console.log('Success');
})
// create operation