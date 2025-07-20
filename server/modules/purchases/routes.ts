import { Router } from "express";
import { getPurchases, createPurchase } from "./controller";

const router = Router();

router.get("/purchases", getPurchases);
router.post("/purchases", createPurchase);

export default router;
