/*
  Warnings:

  - You are about to drop the column `assetTypeId` on the `Expenditure` table. All the data in the column will be lost.
  - You are about to drop the column `assetTypeId` on the `Purchase` table. All the data in the column will be lost.
  - Added the required column `assetId` to the `Expenditure` table without a default value. This is not possible if the table is not empty.
  - Added the required column `assetId` to the `Purchase` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Expenditure" DROP CONSTRAINT "Expenditure_assetTypeId_fkey";

-- DropForeignKey
ALTER TABLE "Purchase" DROP CONSTRAINT "Purchase_assetTypeId_fkey";

-- AlterTable
ALTER TABLE "Expenditure" DROP COLUMN "assetTypeId",
ADD COLUMN     "assetId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Purchase" DROP COLUMN "assetTypeId",
ADD COLUMN     "assetId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "AssetType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expenditure" ADD CONSTRAINT "Expenditure_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "AssetType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
