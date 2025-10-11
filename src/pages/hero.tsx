import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Image from "next/image";

// Use public asset paths for Next.js
const bgImage = "/assets/china-bg.webp";
const cloudImage1 = "/assets/clouds1.webp";
const fgImage = "/assets/china-fg.webp";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const fgRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const cloud1Ref = useRef<HTMLDivElement>(null);
    const cloud2Ref = useRef<HTMLDivElement>(null);
    const cloud3Ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!containerRef.current || !fgRef.current!) return;

        gsap.to(fgRef.current, {
            y: "150%",
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            },
        });

        gsap.to(bgRef.current, {
            y: "-20%",
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom center",
                scrub: true,
            },
        });

        gsap.to(cloud2Ref.current, {
            x: "-100px",
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom center",
                scrub: true,
            },
        });

        gsap.to(cloud3Ref.current, {
            x: "150px",
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom center",
                scrub: true,
            },
        });
    }, []);

    return (
        <div
            id="hero"
            className="flex flex-col w-full h-[150vh]"
            ref={containerRef}
        >
            <div
                className="flex-auto flex-col w-full relative z-10 h-[150vh]"
                ref={bgRef}
            >
                {/* Background with blur effect */}
                <div className="absolute inset-0 z-0 w-full h-full">
                    <Image
                        src={bgImage}
                        alt="China background"
                        fill
                        style={{
                            objectFit: "cover",
                            objectPosition: "center 30%",
                            filter: "blur(0px)",
                        }}
                        priority
                    />
                </div>
                <div className="absolute inset-0 z-40 w-full h-full">
                    <Image
                        src={fgImage}
                        alt="China foreground"
                        fill
                        style={{
                            objectFit: "cover",
                            objectPosition: "center 30%",
                            filter: "blur(0px)",
                        }}
                        priority
                    />
                </div>
                <div
                    ref={cloud1Ref}
                    className="absolute bottom-[-4rem] md:bottom-[-6rem] left-[-20vw] right-[-20vw] h-[20vh] z-50"
                >
                    <Image
                        src={cloudImage1}
                        alt="Clouds 1"
                        fill
                        style={{
                            objectFit: "cover",
                            filter: "blur(2px)",
                            opacity: 1,
                        }}
                        priority
                    />
                </div>
                <div
                    ref={cloud2Ref}
                    className="absolute bottom-[-10rem] md:bottom-[-12rem] left-[-20vw] right-[-20vw] h-[70vh] z-50"
                >
                    <Image
                        src={cloudImage1}
                        alt="Clouds 2"
                        fill
                        style={{
                            objectFit: "cover",
                            filter: "blur(2px)",
                            opacity: 0.9,
                        }}
                        priority
                    />
                </div>
                <div
                    ref={cloud3Ref}
                    className="absolute bottom-[-14rem] md:bottom-[-18rem] left-[-40vw] right-[-40vw] h-[100vh] z-50"
                >
                    <Image
                        src={cloudImage1}
                        alt="Clouds 3"
                        fill
                        style={{
                            objectFit: "cover",
                            filter: "blur(2px)",
                            opacity: 0.8,
                        }}
                        priority
                    />
                </div>
                {/* Content */}
                <div
                    className="flex flex-col relative z-10 items-end mt-[18vh] w-full p-8"
                    ref={fgRef}
                >
                    <h1 className="w-full mb-4 tracking-wide text-7xl lg:text-8xl font-extrabold text-black drop-shadow text-center leading-none">
                        Bill Wang
                    </h1>
                    <h2 className="w-full mb-4 tracking-wide text-3xl lg:text-4xl font-light text-black drop-shadow text-center leading-none">
                        王泽涛
                    </h2>
                </div>
            </div>
        </div>
    );
}
