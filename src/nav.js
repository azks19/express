const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.write("<h1> Wellcom to home page</h1>");
  res.write("<h1> Wellcom to home page</h1>");
  res.send();
});

app.get("/about", (req, res) => {
  res.send("wellcom to about page");
});

app.get("/contact", (req, res) => {
  res.status(200).send("wellcom to contact page");
});

app.get("/temp", (req, res) => {
  res.send([
    {
      id: 1,
      name: "Aurang zaib",
    },
    {
      id: 1,
      name: "Aurang zaib",
    },
    {
      id: 1,
      name: "Aurang zaib",
    },
  ]);
});

app.listen(8000, () => {
  console.log("listening to port 8000");
});
