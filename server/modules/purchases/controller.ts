import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getPurchases = async (_req: Request, res: Response) => {
  const purchases = await prisma.purchase.findMany();
  res.json(purchases);
};

export const createPurchase = async (req: Request, res: Response) => {
  const { assetId, baseId, quantity, date } = req.body;
  const purchase = await prisma.purchase.create({
    data: { assetId, baseId, quantity, date },
  });
  res.json(purchase);
};
