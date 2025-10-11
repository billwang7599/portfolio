import { useEffect, useRef, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Scrollbar = ({
    containerRef,
}: {
    containerRef: RefObject<HTMLDivElement | null>;
}) => {
    const scrollBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const trigger = ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            onUpdate: (self) => {
                const progress = self.progress; // value from 0 to 1
                gsap.to(scrollBarRef.current, {
                    width: `${progress * 100}%`,
                    overwrite: "auto",
                });
            },
        });

        return () => trigger.kill();
    }, [containerRef]);
    return (
        <div
            ref={scrollBarRef}
            style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                height: "8px",
                width: "0%",
                backgroundColor: "black",
                zIndex: 999,
            }}
        ></div>
    );
};
