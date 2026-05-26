"use client";
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import ProfileImage from "@/assets/profile.png";
import ReactIcon from "@/assets/icons/react.png";
import NextIcon from "@/assets/icons/next.png";
import TailwindIcon from "@/assets/icons/tailwind.png";
import FigmaIcon from "@/assets/icons/figma.png";
import LinkedinIcon from "@/assets/icons/linkedin";
import GithubIcon from "@/assets/icons/github";
import InstagramIcon from "@/assets/icons/instagram";

export default function Navbar() {
    const [showCard, setShowCard] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownStyle, setDropdownStyle] =
        useState<React.CSSProperties | null>(null);
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    useEffect(() => {
        const updatePosition = () => {
            if (!navRef.current) return;
            const rect = navRef.current.getBoundingClientRect();
            setDropdownStyle({
                top: rect.bottom,
                left: rect.left,
                width: rect.width,
            });
        };

        updatePosition();

        const observer = new ResizeObserver(updatePosition);
        if (navRef.current) observer.observe(navRef.current);
        window.addEventListener("scroll", updatePosition, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", updatePosition);
        };
    }, []);

    const dropdown = (
        <div
            className={`fixed flex flex-col lg:flex-row items-start gap-10 border-t border-(--separator) p-4 md:p-10 bg-(--light-bg)/90 backdrop-blur-sm text-(--text) pointer-events-none transition-opacity duration-200 z-40 ${showCard ? "opacity-100" : "opacity-0"}`}
            style={dropdownStyle ?? undefined}
        >
            <Image
                src={ProfileImage}
                alt="Profile Image"
                width={200}
                height={200}
                className="rounded-xs w-30 h-30 lg:w-50 lg:h-50 object-cover"
            />

            <div className="flex flex-col lg:flex-row justify-between w-full gap-10">
                <div className="flex flex-col gap-4 flex-1">
                    <p className="text-(--subtext) w-fit relative pb-2 text-xs uppercase tracking-widest">
                        Certificates
                        <span
                            className="absolute bottom-0 left-0 w-full"
                            style={{
                                height: "1px",
                                background:
                                    "linear-gradient(90deg, var(--primary), var(--light-bg))",
                            }}
                        />
                    </p>
                    <div className="flex flex-wrap max-w-sm gap-2">
                        <p className="w-fit text-(--subtext) text-xs border border-(--div-stroke) py-2 px-4 rounded-full flex items-center justify-start gap-2">
                            Cambridge Linguaskill
                        </p>
                        <p className="w-fit text-(--subtext) text-xs border border-(--div-stroke) py-2 px-4 rounded-full flex items-center justify-start gap-2">
                            Boolean
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 flex-1">
                    <p className="text-(--subtext) w-fit relative pb-2 text-xs uppercase tracking-widest">
                        Languages
                        <span
                            className="absolute bottom-0 left-0 w-full"
                            style={{
                                height: "1px",
                                background:
                                    "linear-gradient(90deg, var(--primary), var(--light-bg))",
                            }}
                        />
                    </p>
                    <div className="flex flex-wrap max-w-sm gap-2">
                        <p className="w-fit text-(--text-white) font-bold text-xs border border-(--div-stroke) py-2 px-4 rounded-full flex items-center justify-start gap-2">
                            Italian
                        </p>
                        <p className="w-fit text-(--subtext) text-xs border border-(--div-stroke) py-2 px-4 rounded-full flex items-center justify-start gap-2">
                            English
                        </p>
                        <p className="w-fit text-(--subtext) text-xs border border-(--div-stroke) py-2 px-4 rounded-full flex items-center justify-start gap-2">
                            Ukrainian
                        </p>
                        <p className="w-fit text-(--subtext) text-xs border border-(--div-stroke) py-2 px-4 rounded-full flex items-center justify-start gap-2">
                            Russian
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 flex-1">
                    <p className="text-(--subtext) w-fit relative pb-2 text-xs uppercase tracking-widest">
                        Frontend stack
                        <span
                            className="absolute bottom-0 left-0 w-full"
                            style={{
                                height: "1px",
                                background:
                                    "linear-gradient(90deg, var(--primary), var(--light-bg))",
                            }}
                        />
                    </p>
                    <div className="flex flex-wrap max-w-sm gap-2">
                        <p className="w-fit text-(--subtext) text-xs border border-(--div-stroke) py-2 px-4 rounded-full flex items-center justify-start gap-2">
                            <Image
                                src={ReactIcon}
                                alt="React Logo"
                                className="w-4 h-4 object-cover"
                            />
                            React
                        </p>
                        <p className="w-fit text-(--subtext) text-xs border border-(--div-stroke) py-2 px-4 rounded-full flex items-center justify-start gap-2">
                            <Image
                                src={NextIcon}
                                alt="Next Logo"
                                className="w-4 h-4 object-cover"
                            />
                            Next
                        </p>
                        <p className="w-fit text-(--subtext) text-xs border border-(--div-stroke) py-2 px-4 rounded-full flex items-center justify-start gap-2">
                            <Image
                                src={TailwindIcon}
                                alt="Tailwind Logo"
                                className="w-4 h-4 object-cover"
                            />
                            Tailwind
                        </p>
                        <p className="w-fit text-(--subtext) text-xs border border-(--div-stroke) py-2 px-4 rounded-full flex items-center justify-start gap-2">
                            <Image
                                src={FigmaIcon}
                                alt="Figma Logo"
                                className="w-4 h-4 object-cover"
                            />
                            Figma
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <nav
                ref={navRef}
                className="sticky top-0 z-50 w-full bg-(--light-bg)/90 backdrop-blur-sm border-b border-(--separator)"
            >
                <div className="flex items-center justify-between py-4 px-4">
                    <div className="flex items-center gap-4">
                        <h1
                            className="text-(--subtext) text-sm tracking-wide cursor-default hover:text-(--text-white) transition-all duration-200"
                            onMouseEnter={() => setShowCard(true)}
                            onMouseLeave={() => setShowCard(false)}
                        >
                            Vladyslav Bukator
                        </h1>

                        <h1 className="hidden md:block text-(--primary) text-md">
                            ✦
                        </h1>

                        <h1 className="hidden md:block text-(--subtext) text-sm tracking-wide">
                            Italy, Milan
                        </h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="text-(--subtext) w-6 h-6 cursor-pointer hover:text-(--text-white) transition-colors duration-200"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <path
                                d="M4 8.5L20 8.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                style={{
                                    transformBox: "fill-box",
                                    transformOrigin: "50% 50%",
                                    transform: menuOpen
                                        ? "translateY(3.5px) rotate(45deg)"
                                        : "none",
                                    transition:
                                        "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
                                }}
                            />
                            <path
                                d="M4 15.5L20 15.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                style={{
                                    transformBox: "fill-box",
                                    transformOrigin: "50% 50%",
                                    transform: menuOpen
                                        ? "translateY(-3.5px) rotate(-45deg)"
                                        : "none",
                                    transition:
                                        "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
                                }}
                            />
                        </svg>
                    </div>
                </div>
            </nav>
            {dropdownStyle !== null &&
                ReactDOM.createPortal(dropdown, document.body)}
            {menuOpen &&
                ReactDOM.createPortal(
                    <div
                        className="fixed inset-0 z-30 bg-(--light-bg) p-4 md:p-10 w-full lg:px-40 flex flex-col items-start justify-start pt-30 md:pt-40 gap-10"
                        style={{
                            animation:
                                "menu-item-enter 0.3s cubic-bezier(0.22,1,0.36,1) both",
                        }}
                    >
                        <div className="flex flex-col items-start gap-4 md:gap-10 h-screen">
                            {[
                                {
                                    num: "01",
                                    label: "Work experience",
                                    id: "work-experience",
                                    delay: "0ms",
                                },
                                {
                                    num: "02",
                                    label: "Coding projects",
                                    id: "coding-projects",
                                    delay: "80ms",
                                },
                                {
                                    num: "03",
                                    label: "Design projects",
                                    id: "design-projects",
                                    delay: "160ms",
                                },
                            ].map(({ num, label, id, delay }) => (
                                <div
                                    key={id}
                                    className="text-(--subtext) cursor-pointer hover:text-(--text-white) transition-colors duration-200 uppercase"
                                    style={{
                                        animation: `menu-item-enter 0.5s cubic-bezier(0.22,1,0.36,1) ${delay} both`,
                                    }}
                                    onClick={() => {
                                        setMenuOpen(false);
                                        setTimeout(() => {
                                            document
                                                .getElementById(id)
                                                ?.scrollIntoView({
                                                    behavior: "smooth",
                                                });
                                        }, 50);
                                    }}
                                >
                                    <span className="text-(--primary) text-xs md:text-md mr-4 font-semibold">
                                        {num}
                                    </span>
                                    <span className="text-2xl lg:text-[100px] font-black">
                                        {label}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div
                            className="flex gap-4 mt-10 text-(--subtext) ml-auto"
                            style={{
                                animation:
                                    "menu-item-enter 0.5s cubic-bezier(0.22,1,0.36,1) 240ms both",
                            }}
                        >
                            <h1 className="text-(--subtext) text-sm tracking-wide">
                                Contacts
                            </h1>
                            <h1 className="text-(--primary) text-md">✦</h1>
                            <a
                                href="https://www.linkedin.com/in/vladyslav-bukator-992354337/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LinkedinIcon className="w-6 h-6 cursor-pointer hover:text-(--text-white) transition-colors duration-200" />
                            </a>
                            <a
                                href="https://github.com/Vladdddy"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GithubIcon className="w-6 h-6 cursor-pointer hover:text-(--text-white) transition-colors duration-200" />
                            </a>
                            <a
                                href="https://www.instagram.com/vladyslav_bukator/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <InstagramIcon className="w-6 h-6 cursor-pointer hover:text-(--text-white) transition-colors duration-200" />
                            </a>
                        </div>
                    </div>,
                    document.body,
                )}
        </>
    );
}
