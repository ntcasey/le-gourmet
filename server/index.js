const express = require("express");
const path = require("path");
const connection = require("./database/db.js");

const router = require("./routes/cartRoute.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../le-casey-supermarket/build")));
app.use(express.json());

app.use("/cart", router);

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
