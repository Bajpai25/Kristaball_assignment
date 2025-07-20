import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getExpenditures = async (_req: Request, res: Response) => {
  const expenditures = await prisma.expenditure.findMany();
  res.json(expenditures);
};

export const createExpenditure = async (req: Request, res: Response) => {
  const { assetId, baseId, quantity, date } = req.body;
  const expenditure = await prisma.expenditure.create({
    data: { assetId, baseId, quantity, date },
  });
  res.json(expenditure);
};
