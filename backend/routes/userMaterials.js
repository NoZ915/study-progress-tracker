import express from "express";
import { createNewUserMaterial, deleteOneUserMaterial, getAllUserMaterialsByUserId } from "../controllers/userMaterialController.js";
import { authenticateJWT } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/getAllUserMaterials/:user_id", getAllUserMaterialsByUserId)
router.post("/createNewUserMaterial", createNewUserMaterial);
router.delete("/deleteOneUserMaterial", authenticateJWT, deleteOneUserMaterial)

export default router;