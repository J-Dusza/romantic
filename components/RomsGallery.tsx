import React from "react";
import { roms } from "@prisma/client";
import Image from "next/image";
import { RomsWithPlatform } from "@/controller/romsController";
import { platform } from "os";
import Link from "next/link";

type RomsGalleryProps = {
  roms: RomsWithPlatform[];
};

function RomsGallery({ roms }: RomsGalleryProps) {
  // roms = roms.concat(roms).concat(roms);

  return (
    <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {roms.map((rom) => (
        <Link
          download
          href={rom.downloadUrl || ""}
          key={rom.id}
          className="h-auto max-w-full rounded-lg shadow-lg hover:scale-105 hover:cursor-pointer transform transition-transform duration-300 ease-in-out bg-white"
        >
          <Image
            className="w-full aspect-square rounded-t-lg object-cover"
            src={rom.image}
            alt=""
            width={150}
            height={150}
            priority
          />
          <div
            className={`w-full text-center text-sm text-white`}
            style={{ backgroundColor: rom.platform.color || "black" }}
          >
            {rom.platform.shortname}
          </div>
          <div className="p-2">
            <div className="font-bold text-md">{rom.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default RomsGallery;
