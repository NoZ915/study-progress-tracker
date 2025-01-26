import express from "express";
import { getAllMaterials } from "../controllers/materialController.js";

const router = express.Router();

router.get("/getAllMaterials",getAllMaterials);

export default router;