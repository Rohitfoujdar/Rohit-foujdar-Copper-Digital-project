import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Route from "./routes/route.js"
import { DATABASE } from "./config.js";

const app = express();
app.use(cors());
app.use(express.json());


try {
    mongoose.connect(DATABASE);
    console.log("Database Connected");
  } catch (err) {
    console.log("error:", err);
  }

app.use("/", Route);

app.listen(8000, () => {
    console.log("listening on port : 8000");
  });