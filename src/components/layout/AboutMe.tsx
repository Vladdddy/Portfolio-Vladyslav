"use client";

import React from "react";
import LinkedinIcon from "@/assets/icons/linkedin";
import GithubIcon from "@/assets/icons/github";
import InstagramIcon from "@/assets/icons/instagram";
import Link from "next/link";

export default function AboutMe() {
    return (
        <div className="flex flex-col">
            <h1 className="text-(--text) text-2xl font-bold tracking-wide">
                Vladyslav Bukator
            </h1>

            <p className="text-(--subtext) text-md">
                Web Developer & UX/UI Designer | Italy, Milan
            </p>

            <p className="text-(--text) text-md mt-4 max-w-2xl leading-snug">
                I&apos;m currently working at{" "}
                <Link
                    href="https://www.linkedin.com/company/newmann/"
                    target="_blank"
                    className="font-normal underline underline-offset-2 text-(--primary) cursor-pointer"
                >
                    Newmann
                </Link>{" "}
                as a <strong>Founding Frontend & UX</strong>. I&apos;ve built
                functional dashboards, including one for{" "}
                <Link
                    href="https://www.cae.com/"
                    target="_blank"
                    className="font-normal underline underline-offset-2 text-(--primary) cursor-pointer"
                >
                    CAE
                </Link>{" "}
                to help manage their simulators and employees, with a
                user-friendly dashboard that allows internal technicians to
                easily track tasks.
            </p>

            <div className="flex flex-col gap-2 mt-8">
                <p className="text-(--subtext) text-sm">Contact info</p>
                <div className="flex gap-4">
                    <span
                        onClick={() =>
                            window.open(
                                "https://www.linkedin.com/in/vladyslav-bukator-992354337/",
                                "_blank",
                            )
                        }
                        className="flex items-center justify-center p-3 rounded-2xl bg-(--div-bg) hover:bg-(--div-bg-hover) text-(--primary) hover:-translate-y-1 hover:text-(--primary-hover) transition-all duration-200 cursor-pointer shadow-[0_4px_12px_var(--shadow)]"
                    >
                        <LinkedinIcon className="w-7 h-7" />
                    </span>
                    <span
                        onClick={() =>
                            window.open("https://github.com/Vladdddy", "_blank")
                        }
                        className="flex items-center justify-center p-3 rounded-2xl bg-(--div-bg) hover:bg-(--div-bg-hover) text-(--primary) hover:-translate-y-1 hover:text-(--primary-hover) transition-all duration-200 cursor-pointer shadow-[0_4px_12px_var(--shadow)]"
                    >
                        <GithubIcon className="w-7 h-7" />
                    </span>
                    <span
                        onClick={() =>
                            window.open(
                                "https://www.instagram.com/vladyslav_bukator/",
                                "_blank",
                            )
                        }
                        className="flex items-center justify-center p-3 rounded-2xl bg-(--div-bg) hover:bg-(--div-bg-hover) text-(--primary) hover:-translate-y-1 hover:text-(--primary-hover) transition-all duration-200 cursor-pointer shadow-[0_4px_12px_var(--shadow)]"
                    >
                        <InstagramIcon className="w-7 h-7" />
                    </span>
                </div>
            </div>
        </div>
    );
}
