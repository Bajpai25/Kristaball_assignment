import { Router } from "express";
import { getAssignments, createAssignment } from "./controller";

const router = Router();

router.get("/assignments", getAssignments);
router.post("/assignments", createAssignment);

export default router;
