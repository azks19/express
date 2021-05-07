const path = require("path");
const express = require("express");
const app = express();

const staticPath = path.join(__dirname, "../public");

// builtin midllewar
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("hello from Express");
});

app.get("/about", (req, res) => {
  res.send("hello from about page");
});

app.listen(8000, () => {
  console.log("listening to port no 8000");
});
