import React from "react";
import PlatformsGallery from "@/components/PlatformsGallery";
import { getAllPlatforms } from "@/controller/platformsController";

async function Platforms() {
  const platforms = await getAllPlatforms();

  return (
    <div className="p-5 m-10 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Choose a platform</h1>
      <p className="mb-8">
        We&apos;re thrilled to offer you a gateway to the golden age of gaming.
        Below, you&apos;ll find a variety of classic gaming platforms. Simply
        click on any platform to explore an extensive collection of ROMs,
        emulators, and more. Dive into a world of retro gaming fun!
      </p>

      <PlatformsGallery platforms={platforms} />
    </div>
  );
}

export default Platforms;
