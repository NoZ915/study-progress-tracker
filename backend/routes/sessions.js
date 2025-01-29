import express from "express";
import { getAllSessions, getSessionsByMaterialId } from "../controllers/sessionController.js";

const router = express.Router();

router.get("/getAllSessions", getAllSessions);
router.get("/:materialId", getSessionsByMaterialId);

export default router;