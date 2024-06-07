"use client";
import React from "react";
import RomsGallery from "@/components/RomsGallery";
import { searchRomsWithPlatform } from "@/controller/romsController";
import { useEffect, useState } from "react";
import { RomsWithPlatform } from "@/controller/romsController";
import { useSearchParams } from "next/navigation";
import prisma from "@/lib/prisma";

async function page() {
  return (
    <div className="p-5 m-10 min-h-screen">
      <h1 className="text-2xl font-semibold mb-5">No results found</h1>;
    </div>
  );

  // return (
  //   <div className="p-5 m-10 min-h-screen">
  //     {roms && roms.length !== 0 ? (
  //       <>
  //         <h1 className="text-2xl font-semibold mb-5">Search results</h1>
  //         <RomsGallery roms={roms} />
  //       </>
  //     ) : (
  //       <h1 className="text-2xl font-semibold mb-5">No results found</h1>
  //     )}
  //   </div>
  // );
}

export default page;
