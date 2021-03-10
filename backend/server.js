const express = require("express");
const app = express();
const PORT = 8000;
app.get("/", (req, res) => {
  res.send("get req worked");
});
app.listen(PORT, () => {
  console.log("server is running in port", PORT);
});