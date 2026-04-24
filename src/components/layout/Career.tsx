"use client";

import React from "react";
import Work from "./Work";
import Education from "./Education";
import { useInView } from "@/hooks/useInView";

export default function Career() {
    const { ref, inView } = useInView<HTMLElement>();

    return (
        <section ref={ref} className="mt-10">
            <div className="flex flex-col md:flex-row gap-4 md:gap-10">
                <div
                    className={`bg-(--div-bg) border border-(--div-stroke) p-4 rounded-xl flex flex-col gap-4 flex-1 shadow-[0_4px_12px_var(--shadow)] animate-on-scroll ${inView ? "is-visible" : ""}`}
                >
                    <h1 className="text-lg font-semibold text-(--subtext) border-b border-(--separator) pb-2 ">
                        Work Experience
                    </h1>
                    <Work />
                </div>
                <div
                    className={`bg-(--div-bg) border border-(--div-stroke) p-4 rounded-xl flex flex-col gap-4 flex-1 shadow-[0_4px_12px_var(--shadow)] animate-on-scroll ${inView ? "is-visible" : ""}`}
                    style={{ transitionDelay: inView ? "150ms" : "0ms" }}
                >
                    <h1 className="text-lg font-semibold text-(--subtext) border-b border-(--separator) pb-2">
                        Education
                    </h1>
                    <Education />
                </div>
            </div>
        </section>
    );
}
