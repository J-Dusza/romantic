import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";

export async function getRomsWithPlatform() {
  const roms = await prisma.roms.findMany({
    include: {
      platform: true,
    },
  });
  return roms;
}

export type RomsWithPlatform = Prisma.romsGetPayload<{
  include: {
    platform: true;
  };
}>;
