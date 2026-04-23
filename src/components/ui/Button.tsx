import React from "react";

export default function Button({
    type,
    text,
    icon,
    link,
}: {
    type?: string;
    text?: string;
    icon?: React.ReactNode;
    link?: string;
}) {
    return (
        <button
            onClick={() => {
                if (link) {
                    window.open(link, "_blank");
                }
            }}
            className={`flex w-full lg:w-auto items-center justify-center gap-2 py-3 px-6 text-md rounded-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer ${type === "primary" ? "bg-(--primary) text-white hover:bg-(--primary-hover)" : "border border-(--button-border) bg-(--div-bg) text-(--text) hover:bg-(--div-bg-hover)"} shadow-[0_4px_12px_var(--shadow)]`}
        >
            {icon && icon}
            {text}
        </button>
    );
}
