"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function Loading() {
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (textRef.current) {
            gsap.to(textRef.current, {
                y: -12,
                repeat: -1,
                yoyo: true,
                duration: 0.8,
                ease: "power1.inOut",
            });
        }
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                background: "rgba(255,255,255,0.95)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
            aria-busy="true"
            aria-label="Loading"
        >
            <motion.div
                style={{
                    width: 64,
                    height: 64,
                    border: "8px solid #e0e0e0",
                    borderTop: "8px solid #333",
                    borderRadius: "50%",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
                }}
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "linear",
                }}
            />
            <motion.p
                ref={textRef}
                style={{
                    marginTop: 32,
                    fontSize: 22,
                    color: "#333",
                    fontWeight: 500,
                    letterSpacing: "0.04em",
                    textShadow: "0 1px 8px rgba(0,0,0,0.08)",
                }}
                initial={{ opacity: 0.5, scale: 0.98 }}
                animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [0.98, 1.04, 0.98],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            >
                Loading...
            </motion.p>
        </div>
    );
}
