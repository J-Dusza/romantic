import prisma from "../lib/prisma";

export async function getAllPlatforms() {
  const platforms = await prisma.platforms.findMany();
  return platforms;
}

export async function getPlatformByShortname(shortname: string) {
  const platform = await prisma.platforms.findFirst({
    where: {
      shortname: {
        equals: shortname,
        mode: "insensitive",
      },
    },
  });
  return platform;
}
