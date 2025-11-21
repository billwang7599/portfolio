import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import Image from "next/image";

type Experience = {
    title: string;
    company: string;
    duration: string;
};

export default function Experience() {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    const experiences: Experience[] = [
        {
            title: "Software Engineer",
            company: "Rocket Mortgage",
            duration: "May 2025 - Aug 2025",
        },
        {
            title: "Full Stack Developer",
            company: "AllMind AI",
            duration: "Sept 2024 - Dec 2024",
        },
        {
            title: "Software Engineer",
            company: "Huawei Technologies",
            duration: "Feb 2023 - May 2023",
        },
        {
            title: "Software Engineer",
            company: "AdaptivePulse",
            duration: "May 2022 - Aug 2022",
        },
    ];

    useEffect(() => {
        if (!headingRef.current) return;
        gsap.to(headingRef.current, {
            opacity: 1,
            y: "0%",
            scrollTrigger: {
                trigger: headingRef.current,
                start: "top bottom",
                end: "bottom 30%",
                scrub: true,
            },
        });
        cardsRef.current.forEach((card, i) => {
            if (!card) return;
            gsap.fromTo(
                card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    delay: 0.2 + i * 0.15,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                    },
                },
            );
        });
    }, []);

    return (
        <div className="w-full my-32 px-4 relative">
            <div className="absolute inset-0 -z-10 w-full h-full">
                <Image
                    src="/assets/ancient-china-bg.webp"
                    alt="Ancient China Background"
                    fill
                    style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        opacity: 0.15,
                        filter: "grayscale(1)",
                    }}
                    priority
                />
            </div>
            <div
                className="flex w-full opacity-0 translate-y-[-50vh] relative z-0 justify-center mb-24"
                ref={headingRef}
            >
                <h2 className="text-7xl font-bold text-gray-800 drop-shadow-lg">
                    Experience
                </h2>
            </div>
            <div className="flex flex-col gap-12 items-center justify-center relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-gray-400 to-gray-600 opacity-30 z-0" />
                {experiences.map((experience, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            cardsRef.current[index] = el;
                        }}
                        className="relative z-10 bg-white rounded-xl shadow-xl p-8 w-full max-w-xl hover:scale-105 transition-transform duration-300"
                    >
                        <h3 className="text-3xl font-bold text-gray-700 mb-2">
                            {experience.company}
                        </h3>
                        <div className="flex items-center justify-between text-xl text-gray-600 w-full">
                            <span className="font-light">
                                {experience.title}
                            </span>
                            <span className="text-md text-gray-500 font-light">
                                {experience.duration}
                            </span>
                        </div>
                        <p className="text-md text-gray-500 mt-1"></p>
                    </div>
                ))}
            </div>
        </div>
    );
}
