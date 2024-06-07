import React from "react";
import PlatformsGallery from "@/components/PlatformsGallery";
import { getAllPlatforms } from "@/controller/platformsController";
import initTranslations from "@/app/i18n";
import Breadcrumb from "@/components/Breadcrumb";

type PlatformsProps = {
  params: {
    locale: any;
  };
};

async function Platforms({ params: { locale } }: PlatformsProps) {
  const platforms = await getAllPlatforms();
  const { t } = await initTranslations(locale, ["Platforms"]);

  return (
    <div className="p-5 m-10 min-h-screen">
      <Breadcrumb homeElement="Home" separator=">" capitalizeLinks={true} />
      <h1 className="text-3xl font-bold mb-4">{t("header")}</h1>
      <p className="mb-8">{t("description")}</p>

      <PlatformsGallery platforms={platforms} />
    </div>
  );
}

export default Platforms;
