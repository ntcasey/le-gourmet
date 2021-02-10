// npm i -D typescript ts-node nodemon @types/node @types/express
import express, { Application } from "express";
import path from "path";
import connection from "./database/db";

import router from "./routes/cartRoute";

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(
  express.static(path.join(__dirname, "../../le-casey-supermarket/build"))
);
app.use(express.json());

app.use("/cart", router);

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
