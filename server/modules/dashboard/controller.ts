import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getDashboard = async (_req: Request, res: Response) => {
  // Example aggregated query
  const totalAssets = await prisma.asset.count();
  const totalBases = await prisma.base.count();
  res.json({ totalAssets, totalBases });
};
