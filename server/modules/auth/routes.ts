import { Router } from "express";
import { login, verify } from "./controller";

const router = Router();

router.post("/auth/login", login);
router.get("/auth/verify", verify);

export default router;
