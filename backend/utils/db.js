import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv();
const dbURL = process.env.DB_URL;
export const connectDB = async () => {
  await mongoose
    .connect(dbURL)
    .then(() => console.log("Connected to Database"))
    .catch((err) => {
      console.log(err.message);
    });
};
