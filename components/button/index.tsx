import React from "react";
import "./styles.css";

export interface ButtonProps {
    variant?: "contained" | "outlined";
    backgroundColor?: string;
    labelColor?: string;
    borderColor?: string;
    focusColor?: string;
    disabled?: boolean;
    type?: "button" | "reset" | "submit";
    label: string;
    onClick?: () => void;
    className?: string[];
}

export function Button({
    variant = "contained",
    backgroundColor = "#004BF5",
    labelColor = "#FFFFFF",
    borderColor = "transparent",
    focusColor = "transparent",
    disabled = false,
    type = "button",
    label,
    onClick,
    className = [],
    ...props
}: ButtonProps) {
    const buttonClass = [
        "dbc-ui-button", 
        `dbc-ui-button-${variant}`, 
        ...className
    ];

    return (
        <button
            type={type}
            className={buttonClass.join(' ')}
            disabled={disabled}
            onClick={onClick}
            style={{
                "--dbc-ui-button-bg-color": backgroundColor,
                "--dbc-ui-button-label-color": labelColor,
                "--dbc-ui-button-border-color": borderColor,
                "--dbc-ui-button-focus-color": focusColor,
            } as React.CSSProperties}
            aria-disabled={disabled}
            {...props}
        >
            {label}
        </button>
    );
};
