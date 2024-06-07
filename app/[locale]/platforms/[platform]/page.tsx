import React from "react";
import { getPlatformByShortname } from "@/controller/platformsController";
import RomsGallery from "@/components/RomsGallery";
import { getRomsByPlatform } from "@/controller/romsController";
import initTranslations from "@/app/i18n";

type PlatformProps = {
  params: {
    locale: any;
    platform: any;
  };
};

async function Platform({ params: { locale, platform } }: PlatformProps) {
  const platformData = await getPlatformByShortname(platform);
  const roms = await getRomsByPlatform(platform);
  const { t } = await initTranslations(locale, ["Platforms"]);

  return (
    <div className="p-5 m-10 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">{platformData?.name}</h1>
      <p className="mb-8">{t(`description_${platform.toLowerCase()}`)}</p>
      <RomsGallery roms={roms} />
    </div>
  );
}

export default Platform;
