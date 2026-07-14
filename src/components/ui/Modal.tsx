"use client";

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { TriangleAlert } from "lucide-react";

export default function Modal({
    open,
    title,
    description,
    onClose,
}: {
    open: boolean;
    title: string;
    description: string;
    onClose: () => void;
}) {
    useEffect(() => {
        if (!open) return;

        document.body.style.overflow = "hidden";
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [open, onClose]);

    if (!open || typeof document === "undefined") return null;

    return ReactDOM.createPortal(
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div
                className="w-full max-w-lg rounded-2xl border border-(--separator) bg-(--light-bg) p-8 shadow-[0_4px_12px_var(--shadow)]"
                style={{
                    animation:
                        "menu-item-enter 0.3s cubic-bezier(0.22,1,0.36,1) both",
                }}
            >
                <div className="flex items-center gap-2 mb-4">
                    <TriangleAlert className="w-6 h-6" />

                    <h1 className="text-(--text-white) text-xl font-bold">
                        {title}
                    </h1>
                </div>

                <p className="text-(--subtext) text-sm leading-snug mb-10">
                    {description}
                </p>

                <button
                    onClick={onClose}
                    className="w-full py-3 px-6 text-sm rounded-full transition-all duration-200 cursor-pointer bg-(--primary) text-white hover:bg-(--primary-hover) shadow-[0_4px_12px_var(--shadow)]"
                >
                    Close
                </button>
            </div>
        </div>,
        document.body,
    );
}
