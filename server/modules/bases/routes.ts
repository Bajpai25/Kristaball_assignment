import { Router } from "express";
import { getBases, createBase } from "./controller";

const router = Router();

router.get("/bases", getBases);
router.post("/bases", createBase);

export default router;
