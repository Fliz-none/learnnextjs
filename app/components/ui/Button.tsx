"use client";

import React from "react";
import clsx from "clsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  full?: boolean;
  variant?: "primary" | "ghost";
};

export default function Button({ className, full, variant = "primary", ...props }: Props) {
  const base = "inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium transition disabled:opacity-60 disabled:cursor-not-allowed";
  const style =
    variant === "primary"
      ? "bg-black text-white hover:bg-black/90"
      : "border border-gray-300 text-gray-700 hover:bg-gray-100";
  return <button className={clsx(base, style, full && "w-full", className)} {...props} />;
}
