import express from "express";
import { createNewUserMaterial } from "../controllers/userMaterialController";

const router = express.Router();

router.post("/createNewUserMaterial", createNewUserMaterial);

export default router;