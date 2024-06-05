import Image from "next/image";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { Suspense } from "react";
import RomsGallery from "@/components/RomsGallery";
import { roms } from "@prisma/client";

export default async function Home() {
  const roms = await prisma.roms.findMany();

  return (
    <div className="flex flex-col md:flex-row p-5">
      {/* Left panel */}
      <div className="md:w-2/3 p-5">
        <RomsGallery roms={roms} />
      </div>

      {/* Right panel */}
      <div className="md:w-1/3 bg-red-300"></div>
    </div>
  );
}
