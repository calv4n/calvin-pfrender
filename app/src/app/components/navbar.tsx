"use client";

import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { Highlighter } from "@/components/ui/highlighter";

export default function Navbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [navTheme, setNavTheme] = useState<"light" | "dark">(() => {
    if (!pathname) return "light";
    if (pathname.startsWith("/projects") || pathname.startsWith("/experience")) return "dark";
    return "light";
  });

  const navItems = [
    { name: "About Me", href: "/#experience" },
    // { name: "About", href: "#about" },
    // { name: "Projects", href: "/#projects" },
    { name: "Docs", href: "/docs" },
    { name: "Contact", href: "/#contact" },
    { name: "Ask Me", href: "/askme", underline: true },
  ];

  const brandName = "Calvin Pfrender";

  useLayoutEffect(() => {
    const themedSections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-nav-theme]")
    );

    if (!themedSections.length) {
      const fallbackTheme: "light" | "dark" =
        pathname?.startsWith("/projects") || pathname?.startsWith("/experience")
          ? "dark"
          : "light";
      const fallbackRaf = window.requestAnimationFrame(() => {
        setNavTheme(fallbackTheme);
      });
      return () => window.cancelAnimationFrame(fallbackRaf);
    }

    let rafId = 0;

    const resolveThemeAtHeader = () => {
      const navRect = navRef.current?.getBoundingClientRect();
      const markerY = navRect
        ? Math.max(0, Math.min(window.innerHeight - 1, navRect.top + navRect.height * 0.5))
        : Math.max(24, window.innerHeight * 0.1);

      const currentSection = themedSections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= markerY && rect.bottom >= markerY;
      });

      const fallbackSection =
        currentSection ??
        [...themedSections]
          .filter((section) => section.getBoundingClientRect().top <= markerY)
          .sort((a, b) => b.getBoundingClientRect().top - a.getBoundingClientRect().top)[0] ??
        themedSections[0];

      const theme = fallbackSection?.dataset.navTheme;
      if (theme === "dark" || theme === "light") {
        setNavTheme(theme);
      }
    };

    const handleScrollOrResize = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        resolveThemeAtHeader();
      });
    };

    handleScrollOrResize();
    window.addEventListener("scroll", handleScrollOrResize, { passive: true });
    window.addEventListener("resize", handleScrollOrResize);

    return () => {
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [pathname]);

  const isDark = navTheme === "dark";
  const textClass = isDark ? "text-white" : "text-[#0f0f0f]";
  const lineClass = isDark ? "bg-white" : "bg-[#0f0f0f]";
  const underlineColor = isDark ? "#0038ff" : "#ffc700";

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full p-[24px] sm:p-[32px] z-50 bg-transparent backdrop-blur-md border-b border-transparent transition-colors duration-300 ${textClass}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className={`text-sm font-bold sm:font-medium tracking-tight ${textClass}`}>
          <Link href="/#home">{brandName}</Link>
        </div>

        <ul className="hidden md:flex space-x-5 sm:space-x-8">
          {navItems.map(({ name, href, underline }) => (
            <li
              key={name}
              className={`text-sm font-medium hover:opacity-80 transition-opacity ${textClass}`}
            >
              <Link href={href}>
                {underline ? (
                  <Highlighter action="underline" color={underlineColor} animationDuration={1400}>
                    {name}
                  </Highlighter>
                ) : (
                  name
                )}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          className={`md:hidden inline-flex flex-col gap-[6px] items-center justify-center h-10 w-10 rounded-full ${textClass}`}
        >
          <span
            className={`relative block h-0.5 w-6 transition-transform duration-300 ${lineClass} ${isOpen ? "translate-y-[8px] rotate-45" : ""}`}
          />
          <span
            className={`relative block h-0.5 w-6 transition-opacity duration-300 ${lineClass} ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`relative block h-0.5 w-6 transition-transform duration-300 ${lineClass} ${isOpen ? "-translate-y-[8px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0"}`}>
        <div className={`mt-4 px-4 py-5 font-[Bdogrotesk-Title] text-bold ${textClass}`}>
          <ul className="flex flex-col space-y-2 text-lg">
            {navItems.map(({ name, href, underline }) => (
              <li key={name}>
                {underline ? (
                  <Highlighter action="underline" color={underlineColor} animationDuration={1400}>
                    <Link
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="flex w-full items-center justify-between rounded-lg px-1 py-2 transition hover:bg-black/5"
                    >
                      <span>{name}</span>
                    </Link>
                  </Highlighter>
                ) : (
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="flex w-full items-center justify-between rounded-lg px-1 py-2 transition hover:bg-black/5"
                  >
                    <span>{name}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
