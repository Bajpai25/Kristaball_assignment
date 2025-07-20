import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTransfers = async (_req: Request, res: Response) => {
  const transfers = await prisma.transfer.findMany();
  res.json(transfers);
};

export const createTransfer = async (req: Request, res: Response) => {
  const { assetId, fromBaseId, toBaseId, quantity, date } = req.body;
  const transfer = await prisma.transfer.create({
    data: { assetId, fromBaseId, toBaseId, quantity, date },
  });
  res.json(transfer);
};
