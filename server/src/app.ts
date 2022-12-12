import express, { Application } from "express";
import "dotenv/config";

const app: Application = express();

app.listen(process.env.PORT, () => {
  console.log("server running on port: ", process.env.PORT);
});