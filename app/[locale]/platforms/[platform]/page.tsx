import React from "react";
import { getPlatformByShortname } from "@/controller/platformsController";
import RomsGallery from "@/components/RomsGallery";
import { getRomsByPlatform } from "@/controller/romsController";

type PlatformProps = {
  params: {
    locale: any;
    platform: any;
  };
};

async function Platform({ params: { platform } }: PlatformProps) {
  const platformData = await getPlatformByShortname(platform);
  const roms = await getRomsByPlatform(platform);

  return (
    <div className="p-5 m-10 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">{platformData?.name}</h1>
      <p className="mb-8">{platformData?.description}</p>
      <RomsGallery roms={roms} />
    </div>
  );
}

export default Platform;
