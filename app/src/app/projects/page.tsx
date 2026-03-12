import AnimatedContent from "@/components/AnimatedContent";
import Link from "next/link";
import { Highlighter } from "@/components/ui/highlighter";
import { LatestRepositories } from "./LatestRepositories";

export default function Projects() {
    return (
        <section id="projects" data-nav-theme="dark" className="px-[24px] sm:px-[48px] bg-[#1c1c1c] text-white pt-24 pb-0">
            <div className="max-w-7xl mx-auto">
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
                    <div className="min-h-[calc(100vh-196px)]">
                        <div className="lg:w-[36%] space-y-6">
                            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-gray-400">
                                <span className="h-px w-10 bg-white/30" />
                                projects
                            </div>
                            <h1 className="text-5xl font-[Bdogrotesk-Title] font-bold mb-8">
                                Things I build
                            </h1>
                        </div>

                        <div className="mt-8 mb-14 max-w-3xl">
                            <p className="text-xl font-medium mb-4">
                                More projects are coming soon.
                            </p>
                            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                <Link
                                    href="/#contact"
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1c1c1c] transition hover:-translate-y-[2px] hover:shadow-[0_12px_24px_rgba(255,255,255,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Contact Me
                                    <span className="material-symbols-outlined text-base" aria-hidden="true">north_east</span>
                                </Link>
                                <a
                                    href="https://github.com/calv4n"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Browse GitHub
                                </a>
                            </div>
                        </div>

                        <div>
                            <Highlighter
                                action="underline"
                                color="#0038ff"
                                isView={true}
                                animationDuration={1400}
                            >
                                <h2 className="text-xl font-medium mb-1">My Latest Repositories</h2>
                            </Highlighter>
                            <div className="mt-8">
                                <LatestRepositories />
                            </div>
                            <a
                                href="https://github.com/calv4n?tab=repositories"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-gray-200 transition hover:text-white"
                            >
                                View all repositories
                                <span className="material-symbols-outlined text-base" aria-hidden="true">open_in_new</span>
                            </a>
                        </div>
                    </div>
                </AnimatedContent>
            </div>
        </section>
    );
}
