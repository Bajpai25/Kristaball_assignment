import { Router } from "express";
import { getAuditLogs } from "./controller";

const router = Router();

router.get("/audit-logs", getAuditLogs);

export default router;
