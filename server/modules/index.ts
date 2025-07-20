import { Router } from "express";

import authRoutes from "../modules/auth/routes";
import userRoutes from "../modules/user/routes";
import baseRoutes from "../modules/bases/routes"
import assetTypeRoutes from "../modules/asset/routes";
import purchaseRoutes from "../modules/purchases/routes";
import transferRoutes from "../modules/transfers/routes";
import assignmentRoutes from "../modules/assignments/routes";
import expenditureRoutes from "../modules/expenditures/routes";
import dashboardRoutes from "../modules/dashboard/routes";
import auditLogRoutes from "../modules/auditLogs/routes";

const router = Router();

router.use("/api", authRoutes);
router.use("/api", userRoutes);
router.use("/api", baseRoutes);
router.use("/api", assetTypeRoutes);
router.use("/api", purchaseRoutes);
router.use("/api", transferRoutes);
router.use("/api", assignmentRoutes);
router.use("/api", expenditureRoutes);
router.use("/api", dashboardRoutes);
router.use("/api", auditLogRoutes);

export default router;
