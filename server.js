const express = require("express");
const portfolioRoute = require("./routes/portfolioRoute");
const path = require("path");
require("dotenv").config();
const dbConfig = require("./config/dbConfig");

const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

app.use("/api/portfolio", portfolioRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
