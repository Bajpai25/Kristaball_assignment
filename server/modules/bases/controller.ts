import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getBases = async (_req: Request, res: Response) => {
  const bases = await prisma.base.findMany();
  res.json(bases);
};

export const createBase = async (req: Request, res: Response) => {
  const { name, location } = req.body;
  const base = await prisma.base.create({
    data: { name, location },
  });
  res.json(base);
};
