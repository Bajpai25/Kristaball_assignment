import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAssignments = async (_req: Request, res: Response) => {
  const assignments = await prisma.assignment.findMany();
  res.json(assignments);
};

export const createAssignment = async (req: Request, res: Response) => {
  const { assetId, personnelId, assignedAt } = req.body;
  const assignment = await prisma.assignment.create({
    data: { assetId, personnelId, assignedAt },
  });
  res.json(assignment);
};
