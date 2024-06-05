import prisma from "../lib/prisma";

export async function getAllPlatforms() {
  const platforms = await prisma.platforms.findMany();
  return platforms;
}
