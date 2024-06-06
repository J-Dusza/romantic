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
      image:
        "https://static.wikia.nocookie.net/logopedia/images/0/0d/NES_logo.svg/revision/latest?cb=20220520170257",
      color: "#a5a2a2",
      description:
        "Step back into the '80s with the iconic NES. Relive classic titles like Super Mario Bros., The Legend of Zelda, and Mega Man.",
    },
  });

  const snes = await prisma.platforms.create({
    data: {
      name: "Super Nintendo Entertainment System",
      shortname: "SNES",
      image:
        "https://static.wikia.nocookie.net/logopedia/images/2/2c/SNES_logo.svg/revision/latest?cb=20210604013405",
      color: "#b5b6e4",
      description:
        "Experience the golden age of 16-bit gaming with the SNES. Relive classics like Super Mario World, Donkey Kong Country, and Chrono Trigger.",
    },
  });

  const gameboy = await prisma.platforms.create({
    data: {
      name: "Game Boy",
      shortname: "GB",
      image:
        "https://static.wikia.nocookie.net/logopedia/images/d/d5/Nintendo_Game_Boy_packaging.svg/revision/latest?cb=20220622191133",
      color: "#3A3C9F",
      description:
        "Travel back to the era of handheld gaming with the original Game Boy. Access a vast collection of classics like Pokémon Red and Blue, Tetris, and The Legend of Zelda: Link's Awakening.",
    },
  });

  const gba = await prisma.platforms.create({
    data: {
      name: "Game Boy Advance",
      shortname: "GBA",
      image:
        "https://static.wikia.nocookie.net/logopedia/images/a/a1/Gameboy_advance_logo_stacked.svg/revision/latest?cb=20220620020941",
      color: "#1900CD",
      description:
        "Enjoy advanced portable gaming with the GBA. Download ROMs for Pokémon FireRed and LeafGreen, Metroid Fusion, and Mario Kart: Super Circuit.",
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
        releaseDate: new Date("1985-09-13"),
        downloadUrl:
          "https://cdn.discordapp.com/attachments/1248284075710742528/1248284365956321402/Super_Mario_Bros._World.nes?ex=66631ae8&is=6661c968&hm=53fe666cf0764e310563d0f58332d3da7d7b767c4caa12fc709c155c0e2f28c3&",
      },
      {
        title: "The Legend of Zelda: A Link to the Past",
        description:
          "The Legend of Zelda: A Link to the Past is an action-adventure game developed and published by Nintendo for the Super Nintendo Entertainment System. It is the third installment in The Legend of Zelda series and was released in 1991 in Japan and 1992 in North America and Europe.",
        image:
          "https://cdn2.steamgriddb.com/thumb/c888280c65ec91eb9d20d2644575186e.jpg",
        platformId: snes.id,
        releaseDate: new Date("1991-11-21"),
        downloadUrl:
          "https://cdn.discordapp.com/attachments/1248284075710742528/1248285574133973093/Legend_of_Zelda_The_-_A_Link_to_the_Past_U_.smc?ex=66631c08&is=6661ca88&hm=f88e2c21f56775c6460eb6c279e2a8726ae93f232fe317e0742776e097c1914e&",
      },
      {
        title: "Tetris",
        description:
          "Tetris is a tile-matching puzzle video game originally designed and programmed by Alexey Pajitnov in the Soviet Union. It was released on June 6, 1984, while he was working for the Dorodnicyn Computing Centre of the Academy of Science of the USSR in Moscow. ",
        image:
          "https://cdn2.steamgriddb.com/thumb/61a6ab285b480677841895cc5d251cf4.jpg",
        platformId: gameboy.id,
        releaseDate: new Date("1989-07-31"),
        downloadUrl:
          "https://cdn.discordapp.com/attachments/1248284075710742528/1248285775464890521/Tetris.gb?ex=66631c38&is=6661cab8&hm=438acd3a5d4fdec56130dd7308bbdb01ce96e2a09a4aa4f1bad43d1a59124a9b&",
      },
      {
        title: "Super Mario World",
        description:
          "Super Mario World is a 1990 platform game developed and published by Nintendo as a pack-in launch title for the Super Nintendo Entertainment System (SNES). It features Mario and his brother Luigi in the plains of Dinosaur Land to stop the series antagonist Bowser and his children, the Koopalings, from kidnapping Princess Toadstool.",
        image:
          "https://cdn2.steamgriddb.com/thumb/0038c1adcc79bc78f93404fd9641e906.jpg",
        platformId: snes.id,
        releaseDate: new Date("1990-11-21"),
        downloadUrl:
          "https://cdn.discordapp.com/attachments/1248284075710742528/1248286553420075111/Super_Mario_Bros._World.nes?ex=66631cf2&is=6661cb72&hm=90de7426ee94c199a205ebaf2a9fd431706729aff9c7ed9fb1c3ee152a144d63&",
      },
      {
        title: "Pokémon Red",
        description:
          "Pokémon Red and Pokémon Blue are role-playing video games developed by Game Freak and published by Nintendo and The Pokémon Company. They are the first installments of the Pokémon series and were released in 1996 for the Game Boy.",
        image:
          "https://cdn2.steamgriddb.com/thumb/deaf47d9953d7c0216d9c3aa944fe5ba.jpg",
        platformId: gameboy.id,
        releaseDate: new Date("1996-09-28"),
        downloadUrl:
          "https://cdn.discordapp.com/attachments/1248284075710742528/1248286553134989312/Pokemon_Red_UE_S.gb?ex=66631cf2&is=6661cb72&hm=84ec2fbc3d8c32a262d82d4fd4a65393a105e3a89bad7470e379df029162d064&",
      },
      {
        title: "Battletoads",
        description:
          "Battletoads is a video game media franchise by Rare that began with the original beat 'em up game Battletoads in 1991. Starring three anthropomorphic toads named after skin conditions, Rash, Zitz, and Pimple, the series was created to rival the Teenage Mutant Ninja Turtles games.",
        image:
          "https://cdn2.steamgriddb.com/thumb/5f2e2f400030f3f4a4d5d36e2aa6c003.jpg",
        platformId: nes.id,
        releaseDate: new Date("1991-06-01"),
        downloadUrl:
          "https://cdn.discordapp.com/attachments/1248284075710742528/1248286552329683035/Battletoads_U_p1.nes?ex=66631cf2&is=6661cb72&hm=aff0b4398edcffd1174960f6ed55852b595eb440f62d8f7a619eda03206f43a4&",
      },
      {
        title: "Pokémon FireRed",
        description:
          "Pokémon FireRed and Pokémon LeafGreen are 2004 role-playing video games developed by Game Freak, published by The Pokémon Company",
        image:
          "https://cdn2.steamgriddb.com/thumb/02364616164166b84371270ca2e6eda2.png",
        platformId: gba.id,
        releaseDate: new Date("2004-09-09"),
        downloadUrl:
          "https://cdn.discordapp.com/attachments/1248284075710742528/1248286552748982333/Pokemon_-_Fire_Red_Version_U_V1.1.gba?ex=66631cf2&is=6661cb72&hm=b784cff4e95d32e36fa01db4fca04b31f66faa59ce9599e149720957ff4506c3&",
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
