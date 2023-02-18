const express = require("express");
const https = require("https")
const bodyparser = require("body-parser")

const app = express();

app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html")

})
app.post("/", function (req, res) {
  var uname = req.body.first;
  var lname = req.body.Last;
  var emailid = req.body.email;
  var data = {
    members: [{
      email_address: emailid,
      status: "Subscribed",
      merge_fields: {
        FNAME: uname,
        LNAME: lname
      }
    }]
  };
  const jsondata = JSON.stringify(data);
  const urldata = "https://us13.api.mailchimp.com/3.0/lists/b816aaa7fc";
  const options = {
    method: "POST",
    auth: "RAHUL:fa7d440253df2ca241be46d915b89015-us13"
  }
  const request = https.request(url, options, function (response) {
    response.on("data", function (data) {
      console.log(JSON.parse(data));

    })
  });
  request.write(jsondata);
  request.end
})
app.listen(3000, function (req, res) {
  console.log("server started at port 3000")

})


// API ID
//fa7d440253df2ca241be46d915b89015-us13

// unique Id-
// b816aaa7fc