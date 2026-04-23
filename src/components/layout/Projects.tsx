"use client";

import React from "react";
import Image from "next/image";
import Newmann from "@/assets/projects-images/newmann-prj.png";
import CAE from "@/assets/projects-images/cae-prj.png";
import Flowascend from "@/assets/projects-images/flowascend-prj.png";
import Button from "../ui/Button";
import GithubIcon from "@/assets/icons/github";
import GlobeIcon from "@/assets/icons/globe";
import NextIcon from "@/assets/icons/next.png";
import TailwindIcon from "@/assets/icons/tailwind.png";
import FigmaIcon from "@/assets/icons/figma.png";
import ReactIcon from "@/assets/icons/react.png";
import ExpressIcon from "@/assets/icons/express.png";
import SQLIcon from "@/assets/icons/sql.png";

export default function Projects() {
    return (
        <div className="bg-(--div-bg) border border-(--div-stroke) p-4 rounded-xl flex flex-col gap-4 flex-1 shadow-[0_4px_12px_var(--shadow)] mt-10">
            <h1 className="text-lg font-semibold text-(--subtext) border-b border-(--separator) pb-2 ">
                Projects
            </h1>

            <div className="flex flex-col gap-8 p-0 md:p-4">
                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <Image
                        src={Newmann}
                        alt="Newmann Project"
                        className="w-full md:w-1/2 h-auto rounded-xl shadow-[0_4px_12px_var(--shadow)] object-fit border border-(--separator)"
                    />
                    <div className="flex flex-col gap-1">
                        <h1 className="text-(--text) text-2xl font-bold tracking-wide leading-tight">
                            Newmann{" "}
                            <span className="text-(--subtext) font-normal tracking-normal text-sm">
                                (Dashboard is not public)
                            </span>
                        </h1>

                        <p className="text-(--subtext) text-md leading-tight mt-2">
                            Gmail oriented dashboard that helps users manage
                            labels with AI and more.
                        </p>

                        <p className="text-(--subtext) text-md leading-tight mt-2 mb-4">
                            Built a responsive frontend with Next.js and
                            Tailwind CSS, starting from a Figma wireframe to map
                            out the UI/UX.
                        </p>

                        <div className="flex gap-2 flex-wrap">
                            <Button
                                type="primary"
                                text="View landing"
                                link="https://newmann.ai/"
                                icon={<GlobeIcon className="w-5 h-5" />}
                            />
                        </div>

                        <div className="flex flex-col gap-2 mt-4">
                            <p className="text-(--subtext) text-sm">
                                Technologies used
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                <span className="flex items-center justify-center gap-2 py-1 px-2 border border-(--div-stroke) rounded-lg shadow-[0_4px_12px_var(--shadow)]">
                                    <Image
                                        src={NextIcon}
                                        alt="Next.js"
                                        className="w-7 h-7"
                                    />
                                    <p className="text-sm text-(--subtext)">
                                        Next.js
                                    </p>
                                </span>
                                <span className="flex items-center justify-center gap-2 py-1 px-2 border border-(--div-stroke) rounded-lg shadow-[0_4px_12px_var(--shadow)]">
                                    <Image
                                        src={TailwindIcon}
                                        alt="Tailwind CSS"
                                        className="w-7 h-7"
                                    />
                                    <p className="text-sm text-(--subtext)">
                                        Tailwind
                                    </p>
                                </span>
                                <span className="flex items-center justify-center gap-2 py-1 px-2 border border-(--div-stroke) rounded-lg shadow-[0_4px_12px_var(--shadow)]">
                                    <Image
                                        src={FigmaIcon}
                                        alt="Figma"
                                        className="w-7 h-7"
                                    />
                                    <p className="text-sm text-(--subtext)">
                                        Figma
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:gap-8 border-t border-(--separator) pt-8">
                    <Image
                        src={CAE}
                        alt="CAE Project"
                        className="w-full md:w-1/2 h-auto rounded-xl shadow-[0_4px_12px_var(--shadow)] object-fit"
                    />
                    <div className="flex flex-col gap-1">
                        <h1 className="text-(--text) text-2xl font-bold tracking-wide leading-tight">
                            CAE
                        </h1>

                        <p className="text-(--subtext) text-md leading-tight mt-2 mb-4">
                            A web application developed to manage employees,
                            their shifts and tasks. This project was assigned to
                            me during my internship at CAE.
                        </p>

                        <div className="flex gap-2 flex-wrap">
                            <Button
                                type="primary"
                                text="Git repository"
                                link="https://github.com/Vladdddy/CAE-Rework"
                                icon={<GithubIcon className="w-5 h-5" />}
                            />
                        </div>

                        <div className="flex flex-col gap-2 mt-4">
                            <p className="text-(--subtext) text-sm">
                                Technologies used
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                <span className="flex items-center justify-center gap-2 py-1 px-2 border border-(--div-stroke) rounded-lg shadow-[0_4px_12px_var(--shadow)]">
                                    <Image
                                        src={ReactIcon}
                                        alt="React"
                                        className="w-7 h-7"
                                    />
                                    <p className="text-sm text-(--subtext)">
                                        React
                                    </p>
                                </span>
                                <span className="flex items-center justify-center gap-2 py-1 px-2 border border-(--div-stroke) rounded-lg shadow-[0_4px_12px_var(--shadow)]">
                                    <Image
                                        src={TailwindIcon}
                                        alt="Tailwind CSS"
                                        className="w-7 h-7"
                                    />
                                    <p className="text-sm text-(--subtext)">
                                        Tailwind
                                    </p>
                                </span>
                                <span className="flex items-center justify-center gap-2 py-1 px-2 border border-(--div-stroke) rounded-lg shadow-[0_4px_12px_var(--shadow)]">
                                    <Image
                                        src={ExpressIcon}
                                        alt="Express"
                                        className="w-7 h-7"
                                    />
                                    <p className="text-sm text-(--subtext)">
                                        Express JS
                                    </p>
                                </span>
                                <span className="flex items-center justify-center gap-2 py-1 px-2 border border-(--div-stroke) rounded-lg shadow-[0_4px_12px_var(--shadow)]">
                                    <Image
                                        src={SQLIcon}
                                        alt="SQL"
                                        className="w-7 h-7"
                                    />
                                    <p className="text-sm text-(--subtext)">
                                        SQL
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:gap-8 border-t border-(--separator) pt-8">
                    <Image
                        src={Flowascend}
                        alt="Flowascend Project"
                        className="w-full md:w-1/2 h-auto rounded-xl shadow-[0_4px_12px_var(--shadow)] object-fit"
                    />
                    <div className="flex flex-col gap-1">
                        <h1 className="text-(--text) text-2xl font-bold tracking-wide leading-tight">
                            Flowascend
                        </h1>

                        <p className="text-(--subtext) text-md leading-tight mt-2 mb-4">
                            E-commerce platform for selling t-shirts with unique
                            designs. It was founded by me as a side project but
                            I put it on hold due to insufficient resources to
                            continue.
                        </p>

                        <div className="flex gap-2 flex-wrap">
                            <Button
                                type="primary"
                                text="View website"
                                link="https://flowascend.vercel.app/"
                                icon={<GlobeIcon className="w-5 h-5" />}
                            />

                            <Button
                                type="secondary"
                                text="Git repository"
                                link="https://github.com/Vladdddy/Flowascend"
                                icon={<GithubIcon className="w-5 h-5" />}
                            />
                        </div>

                        <div className="flex flex-col gap-2 mt-4">
                            <p className="text-(--subtext) text-sm">
                                Technologies used
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                <span className="flex items-center justify-center gap-2 py-1 px-2 border border-(--div-stroke) rounded-lg shadow-[0_4px_12px_var(--shadow)]">
                                    <Image
                                        src={ReactIcon}
                                        alt="React"
                                        className="w-7 h-7"
                                    />
                                    <p className="text-sm text-(--subtext)">
                                        React
                                    </p>
                                </span>
                                <span className="flex items-center justify-center gap-2 py-1 px-2 border border-(--div-stroke) rounded-lg shadow-[0_4px_12px_var(--shadow)]">
                                    <Image
                                        src={ExpressIcon}
                                        alt="Express"
                                        className="w-7 h-7"
                                    />
                                    <p className="text-sm text-(--subtext)">
                                        Express JS
                                    </p>
                                </span>
                                <span className="flex items-center justify-center gap-2 py-1 px-2 border border-(--div-stroke) rounded-lg shadow-[0_4px_12px_var(--shadow)]">
                                    <Image
                                        src={FigmaIcon}
                                        alt="Figma"
                                        className="w-7 h-7"
                                    />
                                    <p className="text-sm text-(--subtext)">
                                        Figma
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
