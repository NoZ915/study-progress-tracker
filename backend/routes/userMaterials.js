import express from "express";
import { createNewUserMaterial } from "../controllers/userMaterialController.js";

const router = express.Router();

router.post("/createNewUserMaterial", createNewUserMaterial);

export default router;