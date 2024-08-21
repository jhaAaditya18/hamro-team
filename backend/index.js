import { configDotenv } from "dotenv";
import express from "express";
import { connectDB } from "./utils/db.js";

const app = express();
configDotenv();

const port = process.env.PORT;
connectDB();
app.listen(port, () => console.log(`Server started at port:${port}`));
