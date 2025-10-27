const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

let builds = [];

// ✅ Webhook endpoint - receives build data
app.post("/webhook", (req, res) => {
  const data = req.body;
  builds.push({
    status: data.status || "unknown",
    time: new Date().toLocaleString(),
    coverage: data.coverage || 0,
    defects: data.defects || 0
  });
  console.log("Build received:", data);
  res.sendStatus(200);
});

// ✅ API endpoint - frontend will fetch this
app.get("/builds", (req, res) => {
  res.json(builds);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
