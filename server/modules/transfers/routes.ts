import { Router } from "express";
import { getTransfers, createTransfer } from "./controller";

const router = Router();

router.get("/transfers", getTransfers);
router.post("/transfers", createTransfer);

export default router;
