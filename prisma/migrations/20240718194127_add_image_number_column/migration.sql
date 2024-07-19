/*
  Warnings:

  - Added the required column `imageNumber` to the `Properties` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Properties" ADD COLUMN     "imageNumber" INTEGER NOT NULL;
