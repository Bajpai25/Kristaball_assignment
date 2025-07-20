import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAssetTypes = async (_req: Request, res: Response) => {
  const types = await prisma.assetType.findMany();
  res.json(types);
};

export const createAssetType = async (req: Request, res: Response) => {
  const { name, description } = req.body;
  const type = await prisma.assetType.create({
    data: { name, description },
  });
  res.json(type);
};
