import prisma from "../lib/prisma";

async function main() {
  // delete all data
  await prisma.roms.deleteMany();
  await prisma.platforms.deleteMany();

  // Seed platforms
  const nes = await prisma.platforms.create({
    data: {
      name: "Nintendo Entertainment System",
      shortname: "NES",
      image: "https://reaganray.com/img/blog/video-game-consoles/nes.png",
    },
  });

  const snes = await prisma.platforms.create({
    data: {
      name: "Super Nintendo Entertainment System",
      shortname: "SNES",
      image:
        "https://reaganray.com/img/blog/video-game-consoles/super-nintendo.png",
    },
  });

  const gameboy = await prisma.platforms.create({
    data: {
      name: "Gameboy",
      shortname: "GB",
      image:
        "https://reaganray.com/img/blog/video-game-consoles/super-nintendo.png",
    },
  });

  // Seed roms
  await prisma.roms.createMany({
    data: [
      {
        title: "Super Mario Bros.",
        description:
          "Super Mario Bros. is a platform game developed and published by Nintendo. The successor to the 1983 arcade game, Mario Bros., it was released in Japan in 1985 for the Famicom, and in North America and Europe for the Nintendo Entertainment System (NES) in 1985 and 1987 respectively.",
        image:
          "https://cdn2.steamgriddb.com/thumb/c0d1e37db869c1c58288290dba0810e1.jpg",
        platformId: nes.id,
      },
      {
        title: "The Legend of Zelda: A Link to the Past",
        description:
          "The Legend of Zelda: A Link to the Past is an action-adventure game developed and published by Nintendo for the Super Nintendo Entertainment System. It is the third installment in The Legend of Zelda series and was released in 1991 in Japan and 1992 in North America and Europe.",
        image:
          "https://cdn2.steamgriddb.com/thumb/c888280c65ec91eb9d20d2644575186e.jpg",
        platformId: snes.id,
      },
      {
        title: "Tetris",
        description:
          "Tetris is a tile-matching puzzle video game originally designed and programmed by Alexey Pajitnov in the Soviet Union. It was released on June 6, 1984, while he was working for the Dorodnicyn Computing Centre of the Academy of Science of the USSR in Moscow. ",
        image:
          "https://cdn2.steamgriddb.com/thumb/61a6ab285b480677841895cc5d251cf4.jpg",
        platformId: gameboy.id,
      },
      {
        title: "Super Mario World",
        description:
          "Super Mario World is a 1990 platform game developed and published by Nintendo as a pack-in launch title for the Super Nintendo Entertainment System (SNES). It features Mario and his brother Luigi in the plains of Dinosaur Land to stop the series antagonist Bowser and his children, the Koopalings, from kidnapping Princess Toadstool.",
        image:
          "https://cdn2.steamgriddb.com/thumb/0038c1adcc79bc78f93404fd9641e906.jpg",
        platformId: snes.id,
      },
      {
        title: "Pokémon Red",
        description:
          "Pokémon Red and Pokémon Blue are role-playing video games developed by Game Freak and published by Nintendo and The Pokémon Company. They are the first installments of the Pokémon series and were released in 1996 for the Game Boy.",
        image:
          "https://cdn2.steamgriddb.com/thumb/deaf47d9953d7c0216d9c3aa944fe5ba.jpg",
        platformId: gameboy.id,
      },
    ],
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
