import React from "react";

export default function Education() {
    return (
        <div className="flex flex-col md:flex-row gap-10">
            <div className="group flex flex-col md:flex-row items-start gap-4 flex-1 border border-(--separator) rounded-xs p-6">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 flex-wrap">
                        <p className="w-fit text-(--subtext) text-xs border border-(--div-stroke) py-2 px-4 rounded-full flex items-center justify-start gap-2">
                            Jan 2024 - Jun 2026
                        </p>
                        <h1 className="text-(--primary) text-md">✦</h1>
                        <h1 className="text-(--subtext) text-xs md:text-sm tracking-wide">
                            ITSINCOM
                        </h1>
                    </div>
                    <h1 className="text-xl lg:text-4xl font-black text-(--text)">
                        Web Development
                    </h1>

                    <ul className="list-disc ml-4 flex flex-col gap-2">
                        <li className="text-xs text-(--placeholder-text) leading-tight">
                            Activities and societies: Web Development, Backend,
                            Frontend, Softskills, Digital Security
                        </li>
                    </ul>
                </div>
            </div>

            <div className="group flex flex-col md:flex-row items-start gap-4 flex-1 border border-(--separator) rounded-xs p-6">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 flex-wrap">
                        <p className="w-fit text-(--subtext) text-xs border border-(--div-stroke) py-2 px-4 rounded-full flex items-center justify-start gap-2">
                            Sep 2019 - Jun 2024
                        </p>
                        <h1 className="text-(--primary) text-md">✦</h1>
                        <h1 className="text-(--subtext) text-xs md:text-sm tracking-wide">
                            ITIS Ponti
                        </h1>
                    </div>
                    <h1 className="text-xl lg:text-4xl font-black text-(--text)">
                        IT Highschool
                    </h1>

                    <ul className="list-disc ml-4 flex flex-col gap-2">
                        <li className="text-xs text-(--placeholder-text) leading-tight">
                            Basic programming lessons in Python, Java, C, and
                            HTML.
                        </li>
                        <li className="text-xs text-(--placeholder-text) leading-tight">
                            Computer Science lessons covering topics such as
                            algorithms, data structures, and software
                            development principles.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
