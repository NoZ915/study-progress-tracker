import express from "express";
import { authenticateJWT } from "../middlewares/authMiddleware.js";
import { createNewFeedback } from "../controllers/feedbackController.js";

const router = express.Router();

router.post("/createNewFeedback", authenticateJWT, createNewFeedback)

export default router;