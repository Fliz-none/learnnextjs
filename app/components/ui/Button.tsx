"use client";

import React from "react";
import clsx from "clsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	full?: boolean;
	variant?: "primary" | "ghost";
};

export default function Button({ className, full, variant = "primary", ...props }: Props) {
	const base = "btn"; // Bootstrap class mặc định
	const style = variant === "primary" ? "btn-primary" : "btn-outline-secondary"; // dùng outline thay cho ghost
	return <button className={clsx(base, style, full && "w-100", className)} {...props} />;
}
