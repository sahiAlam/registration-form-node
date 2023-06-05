import express from "express";
import {
  handleCreateMessage,
  handleGetHomeRoute,
  handleGetLoginRoute,
  handleGetLogoutRoute,
  handleGetSuccessRoute,
  handleLogInUser,
  handleLogOutUser,
} from "../controllers/message.js";

const router = express.Router();

// Get Request
router.get("/", handleGetHomeRoute);

router.get("/success", handleGetSuccessRoute);

router.get("/login", handleGetLoginRoute);

router.get("/logout", handleGetLogoutRoute);

// post Request
router.post("/", handleCreateMessage);

router.post("/login", handleLogInUser);

router.get("/logout", handleLogOutUser);

export default router;
