import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <button className="btn btn-primary">Button</button>
    </>
  );
}
