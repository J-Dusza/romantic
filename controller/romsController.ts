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

export async function getRomsByPlatform(shortname: string) {
  const roms = await prisma.roms.findMany({
    where: {
      platform: {
        shortname: {
          equals: shortname,
          mode: "insensitive",
        },
      },
    },
    include: {
      platform: true,
    },
  });
  return roms;
}

export async function searchRomsWithPlatform(search: string) {
  const roms = await prisma.roms.findMany({
    where: {
      title: {
        contains: search,
        mode: "insensitive",
      },
    },
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
