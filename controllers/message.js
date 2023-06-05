import { Message } from "../models/message.js";

const handleGetHomeRoute = (req, res) => {
  //   res.render("index");
  const token = req.cookies.token;
  if (token) {
    res.render("index");
  } else {
    res.render("login");
  }
};

const handleGetSuccessRoute = (req, res) => {
  res.render("success");
};

const handleGetLoginRoute = (req, res) => {
  res.render("login");
};

const handleGetLogoutRoute = (req, res) => {
  res.render("logout");
};

const handleCreateMessage = (req, res) => {
  const message = new Message({
    name: req.body.name,
    email: req.body.email,
  });

  message.save();
  res.redirect("/success");
};

const handleLogInUser = (req, res) => {
  res.cookie("token", "iamsahil", {
    httpOnly: true,
  });
  res.redirect("/");
};

const handleLogOutUser = (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
  });
  res.redirect("/");
};

export {
  handleGetHomeRoute,
  handleGetSuccessRoute,
  handleGetLoginRoute,
  handleGetLogoutRoute,
  handleCreateMessage,
  handleLogInUser,
  handleLogOutUser,
};
