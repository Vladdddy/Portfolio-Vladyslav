import React from "react";
import Image from "next/image";
import CAE from "../../assets/work-images/cae.png";
import Newmann from "../../assets/work-images/newmann.png";
import Reti from "../../assets/work-images/reti.jpg";
import MCDonalds from "../../assets/work-images/mcdonalds.png";

export default function Work() {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col md:flex-row items-start gap-4">
                <Image
                    src={Newmann}
                    alt="Newmann Logo"
                    width={60}
                    height={60}
                    className="rounded-full shadow-[0_4px_12px_var(--shadow)] border border-(--div-stroke) p-1"
                />
                <div className="flex flex-col gap-0">
                    <p className="text-xs text-(--subtext) leading-tight mb-1">
                        Oct 2025 - Present
                    </p>
                    <h1 className="font-semibold text-lg text-(--text) leading-tight">
                        Newmann
                    </h1>
                    <h4 className="text-md text-(--subtext) leading-tight">
                        Founding Frontend & UX
                    </h4>
                    <ul className="list-disc mt-4 ml-4 flex flex-col gap-2">
                        <li className="text-sm text-(--subtext) leading-tight">
                            Developed the Frontend using Next.js and Tailwind
                            CSS, ensuring a responsive and visually appealing
                            user interface.
                        </li>
                        <li className="text-sm text-(--subtext) leading-tight">
                            Coded a landing page to present the product and its
                            features.
                        </li>
                        <li className="text-sm text-(--subtext) leading-tight">
                            Created a wireframe on Figma to visualize the user
                            interface and user experience.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-4">
                <Image
                    src={CAE}
                    alt="CAE Logo"
                    width={60}
                    height={60}
                    className="rounded-full shadow-[0_4px_12px_var(--shadow)] border border-(--div-stroke)"
                />
                <div className="flex flex-col gap-0">
                    <p className="text-xs text-(--subtext) leading-tight mb-1">
                        Dec 2025 - May 2026
                    </p>
                    <h1 className="font-semibold text-lg text-(--text) leading-tight">
                        CAE
                    </h1>
                    <h4 className="text-md text-(--subtext) leading-tight">
                        Web Development Intern
                    </h4>
                    <ul className="list-disc mt-4 ml-4 flex flex-col gap-2">
                        <li className="text-sm text-(--subtext) leading-tight">
                            Enhancing the internal management app by adding new
                            features, refining the UI, and improving
                            performance.
                        </li>
                        <li className="text-sm text-(--subtext) leading-tight">
                            Added SQL database support to the app, enabling
                            efficient data storage.
                        </li>
                    </ul>
                    <p className="text-xs text-(--subtext) leading-tight mt-4">
                        Jun 2025 - Aug 2025
                    </p>
                    <ul className="list-disc mt-4 ml-4 flex flex-col gap-2">
                        <li className="text-sm text-(--subtext) leading-tight">
                            Development of a private Fullstack Management Web
                            Application for employees to manage their shifts and
                            tasks of different simulators.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-4">
                <Image
                    src={MCDonalds}
                    alt="MCDonalds Logo"
                    width={60}
                    height={60}
                    className="rounded-full shadow-[0_4px_12px_var(--shadow)] border border-(--div-stroke)"
                />
                <div className="flex flex-col gap-0">
                    <p className="text-xs text-(--subtext) leading-tight mb-1">
                        Feb 2025 - Mar 2025
                    </p>
                    <h1 className="font-semibold text-lg text-(--text) leading-tight">
                        McDonald&apos;s
                    </h1>
                    <h4 className="text-md text-(--subtext) leading-tight">
                        Crew Member
                    </h4>
                    <ul className="list-disc mt-4 ml-4 flex flex-col gap-2">
                        <li className="text-sm text-(--subtext) leading-tight">
                            Crew Member at McDonald&apos;s Restaurant
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-4">
                <Image
                    src={Reti}
                    alt="Reti Logo"
                    width={60}
                    height={60}
                    className="rounded-full shadow-[0_4px_12px_var(--shadow)] border border-(--div-stroke)"
                />
                <div className="flex flex-col gap-0">
                    <p className="text-xs text-(--subtext) leading-tight mb-1">
                        Oct 2023
                    </p>
                    <h1 className="font-semibold text-lg text-(--text) leading-tight">
                        Reti SPA
                    </h1>
                    <h4 className="text-md text-(--subtext) leading-tight">
                        Highschool Intern
                    </h4>
                    <ul className="list-disc mt-4 ml-4 flex flex-col gap-2">
                        <li className="text-sm text-(--subtext) leading-tight">
                            Basic backend training with C# and C++ for Arduino
                            mini project.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
