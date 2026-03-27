import express from "express";
import {
  register,
  login,
  refreshToken,
  logout,
} from "./auth.controller.js";
import authMiddleware from "../../middleware/auth.middleware.js";
import { validateRegistration, validateLogin } from "../../middleware/validation.middleware.js";

const router = express.Router();

router.post("/register", validateRegistration, register);
router.post("/login", validateLogin, login);
router.post("/refresh", refreshToken);
router.post("/logout", authMiddleware, logout);

export default router;