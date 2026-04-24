"use client";

import React, { useState } from "react";
import Image from "next/image";
import LinkedinIcon from "@/assets/icons/linkedin";
import GithubIcon from "@/assets/icons/github";
import InstagramIcon from "@/assets/icons/instagram";
import Link from "next/link";
import CambridgeImage from "@/assets/certificates-images/cambridge.jpeg";
import BooleanImage from "@/assets/certificates-images/boolean.jpeg";
import DownloadIcon from "@/assets/icons/download";
import Button from "@/components/ui/Button";

export default function AboutMe() {
    const [viewMore, setViewMore] = useState(false);

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

            <div className="flex items-center gap-1 mt-2 text-(--subtext) hover:text-(--text) cursor-pointer w-fit select-none">
                <p className="text-md" onClick={() => setViewMore(!viewMore)}>
                    {viewMore ? "hide" : "view more..."}
                </p>
            </div>

            {viewMore && (
                <div className="flex flex-col gap-4 mt-4 border-l-4 rounded border-(--separator) pl-8 py-4">
                    <div className="flex flex-col gap-2">
                        <p className="text-(--subtext) text-sm">Languages</p>
                        <div className="flex flex-row gap-10 md:gap-20 flex-wrap mt-2">
                            <div className="flex flex-col gap-2">
                                <p className="text-(--text) font-semibold text-md">
                                    English
                                </p>
                                <ul className="list-disc ml-4 flex flex-col gap-1">
                                    <li className="text-sm text-(--subtext) leading-tight">
                                        Reading: C2
                                    </li>
                                    <li className="text-sm text-(--subtext) leading-tight">
                                        Listening: C1
                                    </li>
                                    <li className="text-sm text-(--subtext) leading-tight">
                                        Writing: B2
                                    </li>
                                    <li className="text-sm text-(--subtext) leading-tight">
                                        Speaking: B1
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-2">
                                <p className="text-(--text) font-semibold text-md">
                                    Italian
                                </p>
                                <ul className="list-disc ml-4 flex flex-col gap-1">
                                    <li className="text-sm text-(--subtext) leading-tight">
                                        Native
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-2">
                                <p className="text-(--text) font-semibold text-md">
                                    Ukrainian
                                </p>
                                <ul className="list-disc ml-4 flex flex-col gap-1">
                                    <li className="text-sm text-(--subtext) leading-tight">
                                        Native
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-2">
                                <p className="text-(--text) font-semibold text-md">
                                    Russian
                                </p>
                                <ul className="list-disc ml-4 flex flex-col gap-1">
                                    <li className="text-sm text-(--subtext) leading-tight">
                                        Basic
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-4">
                        <p className="text-(--subtext) text-sm">Certificates</p>
                        <div className="flex flex-col md:flex-row items-start gap-4 mt-2">
                            <Image
                                src={CambridgeImage}
                                alt="CambridgeImage Logo"
                                width={60}
                                height={60}
                                className="rounded-full shadow-[0_4px_12px_var(--shadow)] border border-(--div-stroke)"
                            />
                            <div className="flex flex-col gap-0">
                                <p className="text-xs text-(--subtext) leading-tight mb-1">
                                    Issued Feb 2025
                                </p>
                                <h1 className="font-semibold text-lg text-(--text) leading-tight">
                                    Linguaskill
                                </h1>
                                <h4 className="text-md text-(--subtext) leading-tight">
                                    Cambridge English
                                </h4>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-start gap-4 mt-4">
                            <Image
                                src={BooleanImage}
                                alt="BooleanImage Logo"
                                width={60}
                                height={60}
                                className="rounded-full shadow-[0_4px_12px_var(--shadow)] border border-(--div-stroke)"
                            />
                            <div className="flex flex-col gap-0">
                                <p className="text-xs text-(--subtext) leading-tight mb-1">
                                    Issued Oct 2023
                                </p>
                                <h1 className="font-semibold text-lg text-(--text) leading-tight">
                                    Boolean Careers Web Development
                                </h1>
                                <h4 className="text-md text-(--subtext) leading-tight">
                                    Boolean
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 w-full md:w-fit">
                        <a
                            href="/Resume_Vladyslav.pdf"
                            download="Resume_Vladyslav.pdf"
                        >
                            <Button
                                type="primary"
                                text="Resume"
                                icon={<DownloadIcon className="w-5 h-5" />}
                            />
                        </a>
                    </div>
                </div>
            )}

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
