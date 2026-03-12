"use client";
import Link from "next/link";
import SplitText from "@/components/SplitText";
import Experience from "./experience/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Hobbies from "./hobbies/page";
import AnimatedContent from "@/components/AnimatedContent";
import { Highlighter } from "@/components/ui/highlighter";

export default function Home() {
  const splitTextProps = {
    className: "text-7xl sm:text-8xl md:text-9xl text-center font-[Bdogrotesk] font-[1000]",
    delay: 75,
    duration: 0.5,
    ease: "power3.out" as const,
    splitType: "chars" as const,
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0 },
    threshold: 0.1,
    rootMargin: "-100px",
    textAlign: "center" as const,
  };

  const subtitleText =
    "Swiss software developer based near Zurich finishing his apprenticeship.";
  const textFirst =
    "Building and maintaining web applications and internal automations at SIX, focused on clarity, reliability, and best practices.";

  return (
    <>
      <section id="home" data-nav-theme="light" className="p-[24px] sm:p-[48px] bg-[#fff9f0]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-start min-h-[calc(100vh-48px)] sm:min-h-[calc(100vh-96px)] justify-end pb-32 pt-16 gap-6 md:gap-12">
            <div className="flex flex-col items-start">
              <SplitText text="Calvin" {...splitTextProps} />
              <SplitText text="Pfrender" {...splitTextProps} />
            </div>

            <AnimatedContent
              distance={70}
              direction="vertical"
              reverse={false}
              duration={0.8}
              ease="power3.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={0}
            >
              <div className="w-full md:w-[82%] flex flex-col md:flex-row gap-3 md:gap-14">
                <div className="text-xl sm:text-2xl md:text-3xl font-medium max-w-xl">
                  <p>{subtitleText}</p>
                </div>
                <div className=" text-sm text-gray-700 font-medium hidden sm:block">
                  <p>{textFirst}</p>
                  <br />
                  <p>
                    Constantly{" "}
                    <Highlighter action="highlight" color="#ffc700" animationDuration={1400} isView={true}>
                      improving
                    </Highlighter>{" "}
                    myself, both as a developer and as a person.
                  </p>
                </div>
                <p className="block sm:hidden py-2 text-gray-700 opacity-60 text-xs tracking-[0.16em]">WORKING @ SIX GROUP</p>
              </div>

              <div className="flex w-full flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-2">
                <Link
                  href="/#experience"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1c1c1c] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-[2px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1c1c1c]"
                >
                  About Me
                  <span className="material-symbols-outlined text-base" aria-hidden="true">north_east</span>
                </Link>
                <Link
                  href="/askme"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1c1c1c] px-6 py-3 text-sm font-semibold text-[#1c1c1c] transition hover:-translate-y-[2px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1c1c1c]"
                >
                  Ask Me
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-[#1c1c1c] transition hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1c1c1c]"
                >
                  Contact
                </Link>
              </div>
            </AnimatedContent>
          </div>
          <a href="#experience" className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-gray-700 opacity-50 text-xs uppercase tracking-[0.2em]">scroll</a>
        </div>
      </section>

      <Experience />
      <Projects />
      <Hobbies />
      <Contact />
    </>
  );
}
