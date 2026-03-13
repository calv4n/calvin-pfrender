"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

import Footer from "./footer";
import Navbar from "./navbar";

export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isDocsRoute = pathname?.startsWith("/docs");

  return (
    <>
      {!isDocsRoute && <Navbar />}
      <main className="flex-1">{children}</main>
      {!isDocsRoute && <Footer />}
    </>
  );
}
