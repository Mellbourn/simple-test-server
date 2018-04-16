const express = require("express");
const app = express();

app.get("/*", (req, res) => {
  res.status(202);
  console.log("responding with 202", req);
  res.send("responded with 202!");
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
