import express from "express";
import { getAllProgressByUserMaterialId } from "../controllers/progressController.js";
import { authenticateJWT } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/getAllProgressByUserMaterialId", authenticateJWT, getAllProgressByUserMaterialId);

export default router;