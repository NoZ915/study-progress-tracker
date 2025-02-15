import express from "express";
import { getAllMaterials, getMaterialDetail } from "../controllers/materialController.js";

const router = express.Router();

router.get("/getAllMaterials",getAllMaterials);
router.get("/getMaterialDetail/:material_id", getMaterialDetail);

export default router;