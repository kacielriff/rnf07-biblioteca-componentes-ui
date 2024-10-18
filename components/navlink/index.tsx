import React from "react";
import "./styles.css";

export interface NavLinksProps {
    backgroundColor?: string;
    labelColor?: string;
    borderColor?: string;
    focusColor?: string;
    label: string;
    href: string;
    className?: string[];
}

export function NavLink({
    backgroundColor = "transparent",
    labelColor = "#000",
    borderColor = "#000",
    focusColor = "#E9F2FF",
    label,
    href,
    className = [],
    ...props
}: NavLinksProps) {
    const navLinksClass = [
        "dbc-ui-navlink",
        ...className
    ]

    return (
        <a
            href={href}
            className={navLinksClass.join(' ')}
            style={{
                "--dbc-ui-navlink-bg-color": backgroundColor,
                "--dbc-ui-navlink-label-color": labelColor,
                "--dbc-ui-navlink-border-color": borderColor,
                "--dbc-ui-navlink-focus-color": focusColor,
            } as React.CSSProperties}
            {...props}
        >
            {label}
        </a>
    );
}
