import { Router } from "express";
import { getAssetTypes, createAssetType } from "./controller";

const router = Router();

router.get("/asset-types", getAssetTypes);
router.post("/asset-types", createAssetType);

export default router;
