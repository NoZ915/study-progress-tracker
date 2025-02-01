import express from "express";
import passport from "passport";
import { googleAuth } from "../controllers/userController.js"
// import { authenticateJWT } from "../middlewares/authMiddleware";

const router = express.Router();

// Google OAuth 登入
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth callbacks
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  googleAuth
);

// 更新使用者資料 //還沒寫update的部份
// router.put("/profile", authenticateJWT, updateUserProfile);

export default router;