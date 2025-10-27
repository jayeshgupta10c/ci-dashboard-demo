const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let builds = [];

app.post("/webhook", (req, res) => {
  const data = req.body;
  builds.push({
    status: data.status || "unknown",
    time: new Date().toLocaleString(),
  });
  console.log("Build received:", data);
  res.sendStatus(200);
});

app.get("/builds", (req, res) => {
  res.json(builds);
});

app.listen(4000, () => console.log("Server running on port 4000"));
