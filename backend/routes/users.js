import express from "express";
import passport from "passport";
import { googleAuth, getUserById, createUser, updateUser } from "../controllers/userController.js"
// import { authenticateJWT } from "../middlewares/authMiddleware";

const router = express.Router();

// Google OAuth 登入
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.post("/googleAuth", googleAuth);

// 更新使用者資料 //還沒寫update的部份
// router.put("/profile", authenticateJWT, updateUserProfile);

router.get("/getUserById/:id", getUserById);
router.post("/createUser", createUser);
router.put("/updateUser/:id", updateUser);

export default router;