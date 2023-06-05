import express from "express";
import cookieParser from "cookie-parser";
import messageRouter from "./routes/message.js";
import { config } from "dotenv";

export const app = express();
config({
  path: "./config.env",
});

// middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(messageRouter);

// setting up view engine
app.set("view engine", "ejs");
