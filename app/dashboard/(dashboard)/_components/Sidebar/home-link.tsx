"use client";

import { Home } from "lucide-react";
import Link from "next/link";

const HomeLink = () => {
  return (
    <Link href="/">
      <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition p-1">
        <Home className="text-white text-[2px]" />
      </button>
    </Link>
  );
};

export default HomeLink;
