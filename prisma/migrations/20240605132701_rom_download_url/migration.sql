-- AlterTable
ALTER TABLE "roms" ADD COLUMN     "downloadUrl" TEXT,
ALTER COLUMN "releaseDate" DROP NOT NULL;
