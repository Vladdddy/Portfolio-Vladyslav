"use client";

import React, { ElementType, ComponentPropsWithoutRef } from "react";
import { useInView } from "@/hooks/useInView";

type ScrollRevealProps<T extends ElementType> = {
    as?: T;
    delay?: number;
    className?: string;
    children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className" | "style">;

export default function ScrollReveal<T extends ElementType = "div">({
    as,
    delay = 0,
    className = "",
    children,
    ...rest
}: ScrollRevealProps<T>) {
    const Tag = (as || "div") as ElementType;
    const { ref, inView } = useInView<HTMLElement>();

    return (
        <Tag
            ref={ref as React.Ref<HTMLElement>}
            className={`animate-on-scroll ${inView ? "is-visible" : ""} ${className}`}
            style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
            {...rest}
        >
            {children}
        </Tag>
    );
}
