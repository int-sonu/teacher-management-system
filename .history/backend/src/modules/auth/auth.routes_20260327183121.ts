import express from "express";
import {
  register,
  login,
  refreshToken,
  logout,
} from "./auth.controller";
import authMiddleware from "../../middleware/auth.middleware";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refreshToken);
router.post("/logout", authMiddleware, logout);

export default router;