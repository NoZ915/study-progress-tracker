import express from "express";
import { updateProgress, getAllProgressByUserMaterialId, exportProgressExcel } from "../controllers/progressController.js";
import { authenticateJWT } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/getAllProgressByUserMaterialId", authenticateJWT, getAllProgressByUserMaterialId);
router.post("/updateProgress", authenticateJWT, updateProgress);
router.post("/export", authenticateJWT, exportProgressExcel)

export default router;