/*
  Warnings:

  - Made the column `shortname` on table `platforms` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "platforms" ALTER COLUMN "shortname" SET NOT NULL;
