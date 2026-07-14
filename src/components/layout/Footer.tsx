import React from "react";
import ScrollReveal from "../ui/ScrollReveal";

export default function Footer() {
    return (
        <footer className="py-10 mt-20">
            <ScrollReveal as="div" className="container mx-auto px-4">
                <p className="text-center text-(--placeholder-text) text-xs">
                    &copy; {new Date().getFullYear()} Vladyslav Bukator. All
                    rights reserved.
                </p>
            </ScrollReveal>
        </footer>
    );
}
