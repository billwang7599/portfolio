"use client";
import { Hero } from "../pages/hero";
import { Experience } from "../pages/experience";
import Projects from "../pages/projects";
import Contact from "../pages/contact";
import { Navbar, NavItems } from "../components/navbar";
import { Scrollbar } from "../components/scrollbar";
import { useRef } from "react";

export default function Home() {
    const homeRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const navItems: NavItems[] = [
        { title: "Home", ref: homeRef },
        { title: "Experience", ref: experienceRef },
        { title: "Projects", ref: projectsRef },
        { title: "Contact", ref: contactRef },
        { title: "Blog", url: "https://blog.billwang.dev" },
    ];

    return (
        <>
            <div
                className="flex flex-col bg-bg text-secondary overflow-hidden"
                ref={containerRef}
            >
                <Navbar navItems={navItems} />
                <div ref={homeRef}>
                    <Hero />
                </div>
                <div ref={experienceRef}>
                    <Experience />
                </div>
                <div ref={projectsRef}>
                    <Projects />
                </div>
                <div ref={contactRef}>
                    <Contact />
                </div>
                <Scrollbar containerRef={containerRef} />
            </div>
            <footer className="w-full py-6 flex flex-col items-center border-t border-gray-200 bg-white bg-opacity-80 text-gray-500 text-sm">
                <span>
                    &copy; {new Date().getFullYear()} Bill Wang. All rights
                    reserved.
                </span>
                <span>Built with React, GSAP, and Tailwind CSS.</span>
            </footer>
        </>
    );
}
