import React from "react";
import Image from "next/image";
import ITSINCOM from "../../assets/education-images/itsincom.jpeg";
import Itis from "../../assets/education-images/itis.jpeg";

export default function Education() {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col md:flex-row items-start gap-4">
                <Image
                    src={ITSINCOM}
                    alt="ITSINCOM Logo"
                    width={60}
                    height={60}
                    className="rounded-full shadow-[0_4px_12px_var(--shadow)] border border-(--div-stroke)"
                />
                <div className="flex flex-col gap-0">
                    <p className="text-xs text-(--subtext) leading-tight mb-1">
                        Jan 2024 - Sep 2026
                    </p>
                    <h1 className="font-semibold text-lg text-(--text) leading-tight">
                        ITSINCOM
                    </h1>
                    <h4 className="text-md text-(--subtext) leading-tight">
                        Computer Programming
                    </h4>
                    <ul className="list-disc mt-4 ml-4 flex flex-col gap-2">
                        <li className="text-sm text-(--subtext) leading-tight">
                            Activities and societies: Web Development, Backend,
                            Frontend, Softskills, Digital Security
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-4">
                <Image
                    src={Itis}
                    alt="Itis Logo"
                    width={60}
                    height={60}
                    className="rounded-full shadow-[0_4px_12px_var(--shadow)] border border-(--div-stroke) p-1"
                />
                <div className="flex flex-col gap-0">
                    <p className="text-xs text-(--subtext) leading-tight mb-1">
                        Sep 2019 - Jun 2024
                    </p>
                    <h1 className="font-semibold text-lg text-(--text) leading-tight">
                        ITIS Ponti
                    </h1>
                    <h4 className="text-md text-(--subtext) leading-tight">
                        IT Highschool
                    </h4>
                    <ul className="list-disc mt-4 ml-4 flex flex-col gap-2">
                        <li className="text-sm text-(--subtext) leading-tight">
                            Basic programming lessons in Python, Java, C, and
                            HTML.
                        </li>
                        <li className="text-sm text-(--subtext) leading-tight">
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
