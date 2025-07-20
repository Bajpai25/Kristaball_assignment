/*
  Warnings:

  - You are about to drop the column `assetTypeId` on the `Assignment` table. All the data in the column will be lost.
  - You are about to drop the column `assetTypeId` on the `Transfer` table. All the data in the column will be lost.
  - Added the required column `assetId` to the `Assignment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `assetId` to the `Transfer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Assignment" DROP CONSTRAINT "Assignment_assetTypeId_fkey";

-- DropForeignKey
ALTER TABLE "Transfer" DROP CONSTRAINT "Transfer_assetTypeId_fkey";

-- AlterTable
ALTER TABLE "Assignment" DROP COLUMN "assetTypeId",
ADD COLUMN     "assetId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Transfer" DROP COLUMN "assetTypeId",
ADD COLUMN     "assetId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Transfer" ADD CONSTRAINT "Transfer_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "AssetType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assignment" ADD CONSTRAINT "Assignment_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "AssetType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
