-- CreateTable
CREATE TABLE "Properties" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "size" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "readyToMove" BOOLEAN NOT NULL DEFAULT false,
    "project" TEXT NOT NULL,
    "latitude" DECIMAL(65,30) NOT NULL,
    "longitude" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Properties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Details" (
    "id" SERIAL NOT NULL,
    "detail" TEXT NOT NULL,
    "quantity" INTEGER,
    "propertiesId" INTEGER,

    CONSTRAINT "Details_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Details" ADD CONSTRAINT "Details_propertiesId_fkey" FOREIGN KEY ("propertiesId") REFERENCES "Properties"("id") ON DELETE SET NULL ON UPDATE CASCADE;
