import express from "express";
import { createNewUserMaterial, getAllUserMaterialsByUserId } from "../controllers/userMaterialController.js";

const router = express.Router();

router.get("/getAllUserMaterials/:user_id", getAllUserMaterialsByUserId)
router.post("/createNewUserMaterial", createNewUserMaterial);

export default router;