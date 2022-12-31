const express = require("express");
const quotes = require("inspirational-quotes");

const admin = require("../backend/config/fbConfig");


const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin",
    "X-Requested-With,Content-Type,Accept"
  );
  next();
});

app.get("/", (req, res) => {

const idToken = req.query.id
  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      const uid = decodedToken.uid;
      console.log(
        "ddddddddddddddddddddddddddddddddddddddd" + decodedToken.email
      );
      // ...
    })
    .catch((error) => {
      // Handle error
    });

  res.send(quotes.getQuote());
});

app.listen(5000, () => {
  console.log("server start running");
});
