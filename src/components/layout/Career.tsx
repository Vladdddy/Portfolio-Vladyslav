"use client";

import React from "react";
import Work from "./Work";
import Education from "./Education";
import ScrollReveal from "../ui/ScrollReveal";

export default function Career() {
    return (
        <section className="mt-10">
            <ScrollReveal className="flex flex-col md:flex-row gap-4 md:gap-10 mt-20">
                <h1 className="text-(--subtext) w-fit text-xs md:text-sm tracking-widest pb-2 relative uppercase mb-10">
                    Work Experience
                    <span
                        className="absolute bottom-0 left-0 w-full"
                        style={{
                            height: "1px",
                            background:
                                "linear-gradient(90deg, var(--primary), var(--light-bg))",
                        }}
                    />
                </h1>
            </ScrollReveal>

            <Work />

            <ScrollReveal className="flex flex-col md:flex-row gap-4 md:gap-10 mt-20">
                <h1 className="text-(--subtext) w-fit text-xs md:text-sm tracking-widest pb-2 relative uppercase mb-10">
                    Education
                    <span
                        className="absolute bottom-0 left-0 w-full"
                        style={{
                            height: "1px",
                            background:
                                "linear-gradient(90deg, var(--primary), var(--light-bg))",
                        }}
                    />
                </h1>
            </ScrollReveal>

            <Education />
        </section>
    );
}
