import { platforms } from "@prisma/client";
import { platform } from "os";
import React from "react";
import Image from "next/image";

type PlatformsGalleryProps = {
  platforms: platforms[];
};

function PlatformsGallery({ platforms }: PlatformsGalleryProps) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {platforms.map((platform) => (
        <div
          key={platform.id}
          className="h-auto max-w-full rounded-lg shadow-lg hover:scale-105 hover:cursor-pointer transform transition-transform duration-300 ease-in-out bg-white"
        >
          {platform.image ? (
            <Image
              className="w-full aspect-video rounded-t-lg object-contain p-3"
              src={platform.image}
              alt={platform.name}
              width={100}
              height={100}
              priority
            />
          ) : (
            <div className="w-full aspect-square rounded-t-lg bg-gray-200"></div>
          )}
          <div className="p-2">
            <div className="font-bold text-md">{platform.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlatformsGallery;
