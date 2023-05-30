// const express = require("express");
import express from "express";
import path from "path";
const app = express();

import mongoose from "mongoose";
import cookieParser from "cookie-parser";

// DB
mongoose
  .connect("mongodb://localhost:27017/messageDB")
  .then(() => {
    console.log("DB Connected...");
  })
  .catch((err) => {
    console.log(err);
  });

// schema
const messageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: String,
});

// Model
const Message = mongoose.model("Message", messageSchema);

// middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// setting up view engine
app.set("view engine", "ejs");

// Get Request
app.get("/", (req, res) => {
  //   res.render("index");
  const token = req.cookies.token;
  if (token) {
    res.render("index");
  } else {
    res.render("login");
  }
});

app.get("/success", (req, res) => {
  res.render("success");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/logout", (req, res) => {
  res.render("logout");
});

// post Request
app.post("/", (req, res) => {
  const message = new Message({
    name: req.body.name,
    email: req.body.email,
  });

  message.save();
  res.redirect("/success");
});

app.post("/login", (req, res) => {
  res.cookie("token", "iamsahil", {
    httpOnly: true,
  });
  res.redirect("/");
});

app.get("/logout", (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
  });
  res.redirect("/");
});

// listening
app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
