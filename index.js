const express = require("express")
const https = require("https")

const app = express();
app.get("/", function (req, res) {
  res.send("<h1>Data is getting enter via Get Request</h1>")
})

app.listen(4500, function () {
  console.log("Server started at port 4500");
})