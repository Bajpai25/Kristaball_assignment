import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAuditLogs = async (_req: Request, res: Response) => {
  const logs = await prisma.auditLog.findMany();
  res.json(logs);
};
