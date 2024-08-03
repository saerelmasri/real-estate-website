/*
  Warnings:

  - The primary key for the `Details` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Properties` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `propertiesId` on table `Details` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Details" DROP CONSTRAINT "Details_propertiesId_fkey";

-- AlterTable
ALTER TABLE "Details" DROP CONSTRAINT "Details_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "propertiesId" SET NOT NULL,
ALTER COLUMN "propertiesId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Details_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Details_id_seq";

-- AlterTable
ALTER TABLE "Properties" DROP CONSTRAINT "Properties_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Properties_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Properties_id_seq";

-- AddForeignKey
ALTER TABLE "Details" ADD CONSTRAINT "Details_propertiesId_fkey" FOREIGN KEY ("propertiesId") REFERENCES "Properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
