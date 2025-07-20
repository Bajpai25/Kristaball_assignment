import { Router } from "express";
import { getDashboard } from "./controller"

const router = Router();

router.get("/dashboard", getDashboard);

export default router;
