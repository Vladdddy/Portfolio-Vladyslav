import React from "react";

export default function Work() {
    return (
        <div className="flex flex-col gap-20">
            <div className="group flex flex-col md:flex-row items-start gap-4">
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
                            Developed the Frontend using Next.js and Tailwind
                            CSS, ensuring a responsive and visually appealing
                            user interface.
                        </li>
                        <li className="text-xs text-(--placeholder-text) leading-tight">
                            Coded a landing page to present the product and its
                            features.
                        </li>
                        <li className="text-xs text-(--placeholder-text) leading-tight">
                            Created a wireframe on Figma to visualize the user
                            interface and user experience.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="group flex flex-col md:flex-row items-start gap-4">
                <div className="flex flex-col gap-4 border-b border-(--separator) pb-10 w-full">
                    <div className="flex items-center gap-4">
                        <p className="w-fit text-(--subtext) text-xs border border-(--div-stroke) py-2 px-4 rounded-full flex items-center justify-start gap-2">
                            9 Months
                        </p>
                        <h1 className="text-(--primary) text-md">✦</h1>
                        <h1 className="text-(--subtext) text-xs md:text-sm tracking-wide">
                            CAE
                        </h1>
                    </div>
                    {/* <h1 className="text-xl lg:text-7xl font-black text-(--subtext) hover:px-4 hover:text-(--text-white) cursor-pointer transition-all duration-200 flex items-center gap-4">
                        Web Development Intern
                        <span className="text-(--primary) ml-auto">
                            <ArrowUpIcon className="w-4 h-4 md:w-10 md:h-10" />
                        </span>
                    </h1> */}
                    <h1 className="text-xl lg:text-7xl font-black text-(--text) ">
                        Web Development Intern
                    </h1>

                    <ul className="list-disc mt-4 ml-4 flex flex-col gap-2">
                        <li className="text-xs text-(--placeholder-text) leading-tight">
                            Enhancing the internal management app by adding new
                            features, refining the UI, and improving
                            performance.
                        </li>
                        <li className="text-xs text-(--placeholder-text) leading-tight">
                            Added SQL database support to the app, enabling
                            efficient data storage.
                        </li>
                        <li className="text-xs text-(--placeholder-text) leading-tight">
                            Development of a private Fullstack Management Web
                            Application for employees to manage their shifts and
                            tasks of different simulators.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
