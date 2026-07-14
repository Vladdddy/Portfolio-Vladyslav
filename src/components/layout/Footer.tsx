import React from "react";

export default function Footer() {
    return (
        <footer className="py-10 mt-20">
            <div className="container mx-auto px-4">
                <p className="text-center text-(--placeholder-text) text-xs">
                    &copy; {new Date().getFullYear()} Vladyslav Bukator. All
                    rights reserved.
                </p>
            </div>
        </footer>
    );
}
