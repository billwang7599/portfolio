import { cn } from "../lib/cn";
import React, { useState } from "react";

export type NavItems = {
    title: string;
    ref?: React.RefObject<HTMLDivElement | null>;
    url?: string; // Optional external/internal link
};

type NavbarProps = {
    navItems: NavItems[];
};

export const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavClick = (item: NavItems) => {
        if (item.ref && item.ref.current) {
            item.ref.current.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false); // Close menu on mobile after click
        }
    };

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 w-full z-50 flex items-center justify-between px-4 sm:px-32 py-2",
                    "bg-opacity-5 bg-white backdrop-blur-md backdrop-filter shadow-sm",
                )}
            >
                <div className="flex items-center">
                    <span className="ml-2 text-lg font-semibold tracking-tight">
                        BW
                    </span>
                </div>
                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4">
                    {navItems.map((item) =>
                        item.url ? (
                            <a
                                key={item.title}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium px-2 py-1 rounded text-gray-600 hover:text-gray-300 transition tracking-tight hover:cursor-pointer cursor-pointer"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.title}
                            </a>
                        ) : (
                            <button
                                key={item.title}
                                className="text-sm font-medium px-2 py-1 rounded text-gray-600 hover:text-gray-300 transition tracking-tight cursor-pointer"
                                onClick={() => handleNavClick(item)}
                                type="button"
                            >
                                {item.title}
                            </button>
                        ),
                    )}
                </div>
                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center">
                    <button
                        className="p-2 rounded focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={
                                    menuOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16M4 18h16"
                                }
                            />
                        </svg>
                    </button>
                </div>
            </nav>
            {/* Mobile Menu Overlay OUTSIDE nav */}
            {menuOpen && (
                <div className="fixed inset-0 bg-white bg-opacity-90 backdrop-blur-lg z-[100] flex flex-col items-center justify-center md:hidden">
                    {navItems.map((item) =>
                        item.url ? (
                            <a
                                key={item.title}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-base font-medium mb-4 px-4 py-2 rounded hover:bg-gray-100 transition tracking-tight cursor-pointer"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.title}
                            </a>
                        ) : (
                            <button
                                key={item.title}
                                className="text-base font-medium mb-4 px-4 py-2 rounded hover:bg-gray-100 transition tracking-tight cursor-pointer"
                                onClick={() => handleNavClick(item)}
                                type="button"
                            >
                                {item.title}
                            </button>
                        ),
                    )}
                    <button
                        className="text-gray-600 text-base mt-2"
                        onClick={() => setMenuOpen(false)}
                        type="button"
                    >
                        Close
                    </button>
                </div>
            )}
        </>
    );
};
