import express from "express";
import { updateProgress, getAllProgressByUserMaterialId } from "../controllers/progressController.js";
import { authenticateJWT } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/getAllProgressByUserMaterialId", authenticateJWT, getAllProgressByUserMaterialId);
router.post("/updateProgress", authenticateJWT, updateProgress);

export default router;