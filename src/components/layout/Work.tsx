import React from "react";
import ScrollReveal from "../ui/ScrollReveal";

export default function Work() {
    return (
        <div className="flex flex-col gap-20">
            <ScrollReveal className="group flex flex-col md:flex-row items-start gap-4">
                <div className="flex flex-col gap-4 border-b border-(--separator) pb-10 w-full">
                    <div className="flex items-center gap-4">
                        <p className="w-fit text-(--subtext) text-xs border border-(--div-stroke) py-2 px-4 rounded-full flex items-center justify-start gap-2">
                            Oct 2025 - Present
                        </p>
                        <h1 className="text-(--primary) text-md">✦</h1>
                        <h1 className="text-(--subtext) text-xs md:text-sm tracking-wide">
                            Newmann
                        </h1>
                    </div>
                    <h1 className="text-xl lg:text-7xl font-black text-(--text)">
                        Founding Frontend & UX
                    </h1>

                    <ul className="list-disc mt-4 ml-4 flex flex-col gap-2">
                        <li className="text-xs text-(--placeholder-text) leading-tight">
                            Designed and coded the frontend of the AI-powered
                            dashboard using Next.js and Tailwind CSS.
                        </li>
                        <li className="text-xs text-(--placeholder-text) leading-tight">
                            Designed and created the main website of Newmann.
                        </li>
                        <li className="text-xs text-(--placeholder-text) leading-tight">
                            Designed and created the landing page to promote the
                            product.
                        </li>
                    </ul>
                </div>
            </ScrollReveal>

            <ScrollReveal
                delay={150}
                className="group flex flex-col md:flex-row items-start gap-4"
            >
                <div className="flex flex-col gap-4 border-b border-(--separator) pb-10 w-full">
                    <div className="flex items-center flex-wrap gap-4">
                        <p className="w-fit text-(--subtext) text-xs border border-(--div-stroke) py-2 px-4 rounded-full flex items-center justify-start gap-2">
                            Jun 2025 - Aug 2025
                        </p>
                        <p className="w-fit text-(--subtext) text-xs border border-(--div-stroke) py-2 px-4 rounded-full flex items-center justify-start gap-2">
                            Dec 2025 - May 2026
                        </p>
                        <h1 className="text-(--primary) text-md">✦</h1>
                        <h1 className="text-(--subtext) text-xs md:text-sm tracking-wide">
                            CAE
                        </h1>
                    </div>

                    <h1 className="text-xl lg:text-7xl font-black text-(--text) ">
                        Web Development Intern
                    </h1>

                    <ul className="list-disc mt-4 ml-4 flex flex-col gap-2">
                        <li className="text-xs text-(--placeholder-text) leading-tight">
                            Engineered a web application for managing and
                            tracking tasks of flight simulators using React,
                            Tailwind CSS, Express and SQL.
                        </li>
                        <li className="text-xs text-(--placeholder-text) leading-tight">
                            Allows technicians to create, update, and delete
                            tasks, as well as assign them to specific simulators
                            and track their shifts.
                        </li>
                        <li className="text-xs text-(--placeholder-text) leading-tight">
                            The applications is being used internally by all
                            technicians to maintain and manage the flight
                            simulators.
                        </li>
                    </ul>
                </div>
            </ScrollReveal>
        </div>
    );
}
