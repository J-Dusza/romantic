import React from "react";
import PlatformsGallery from "@/components/PlatformsGallery";
import { getAllPlatforms } from "@/controller/platformsController";

async function Platforms() {
  const platforms = await getAllPlatforms();

  return (
    <div>
      <PlatformsGallery platforms={platforms} />
    </div>
  );
}

export default Platforms;
