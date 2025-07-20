import { Router } from "express";
import { getExpenditures, createExpenditure } from "./controller";

const router = Router();

router.get("/expenditures", getExpenditures);
router.post("/expenditures", createExpenditure);

export default router;
