/*
  Warnings:

  - You are about to drop the column `type` on the `Properties` table. All the data in the column will be lost.
  - Added the required column `propertyUse` to the `Properties` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Properties" RENAME "type" TO "propertyUse";
