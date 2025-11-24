import { useRef, useEffect } from "react";
import gsap from "gsap";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { ImBlogger } from "react-icons/im";
import { IconType } from "react-icons";
import Image from "next/image";
const jadePendant = "/assets/jade-pendant.webp";

export default function Contact() {
    const pendantRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        // Animate pendant entrance
        if (pendantRef.current) {
            gsap.fromTo(
                pendantRef.current,
                { opacity: 0, scale: 0.7, y: 40 },
                { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power3.out" },
            );
        }
    }, []);

    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-10">
            {/* Left: Spinning Jade Pendant */}
            <div className="flex-1 flex items-center justify-center mb-8 md:mb-0 relative aspect-square w-full">
                <Image
                    ref={pendantRef}
                    src={jadePendant}
                    alt="Jade Pendant"
                    fill
                    className="w-full h-auto bg-cover grayscale animate-spin-slow"
                    priority
                />
            </div>
            {/* Right: Contact Buttons */}
            <div className="flex-1">
                <div className="flex flex-col items-center md:items-start gap-4 w-fit bg-white bg-opacity-80 rounded-lg shadow-md p-8 border border-gray-200">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Contact Me
                    </h2>
                    <p className="text-gray-500 text-base font-normal">
                        Thanks for stopping by! I’m always open to new
                        opportunities and connections.
                    </p>
                    <div className="flex flex-row gap-4">
                        <SocialButton
                            icon={FaEnvelope}
                            label="Email"
                            href="mailto:billwang7599@gmail.com"
                            animationDelay={0.5}
                            isFullWidth={true}
                        />

                        <SocialButton
                            icon={FaLinkedin}
                            label="LinkedIn"
                            href="https://linkedin.com/in/bw7599"
                            animationDelay={0.65}
                            external={true}
                        />

                        <SocialButton
                            icon={FaGithub}
                            label="GitHub"
                            href="https://github.com/billwang7599"
                            animationDelay={0.8}
                            external={true}
                        />

                        <SocialButton
                            icon={ImBlogger}
                            label="Blog"
                            href="https://blog.billwang.dev"
                            animationDelay={0.95}
                            external={true}
                        />
                    </div>
                </div>
            </div>
            {/* Custom slow spin animation */}
            <style>
                {`
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            .animate-spin-slow {
                animation: spin 30s linear infinite;
            }
            `}
            </style>
        </div>
    );
}

// Social Button Component
interface SocialButtonProps {
    icon: IconType;
    label: string;
    href: string;
    animationDelay?: number;
    external?: boolean;
    isFullWidth?: boolean;
}

function SocialButton({
    icon: Icon,
    label,
    href,
    animationDelay = 0,
    external = false,
    isFullWidth = false,
}: SocialButtonProps) {
    const buttonRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        // Animate button entrance
        if (buttonRef.current) {
            gsap.fromTo(
                buttonRef.current,
                { opacity: 0, x: 40 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    delay: animationDelay,
                },
            );
        }
    }, [animationDelay]);

    return (
        <a
            ref={buttonRef}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={`group ${isFullWidth ? "w-full" : ""} flex items-center gap-2 hover:px-4 py-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-700 hover:shadow-md transition-all duration-[0.7s] text-base`}
        >
            <Icon className="w-6 h-6" />
            <span className="max-w-0 text-base overflow-hidden group-hover:max-w-[100px] whitespace-nowrap transition-all duration-[0.7s] font-normal">
                {label}
            </span>
        </a>
    );
}
