"use client";

import Logo from "@/components/ui/Logo";
import NavLink from "@/components/layout/NavLink";
import Container from "@/components/ui/Container";
import { useState } from "react";
import Button from "../ui/Button";
import Image from "next/image";

const NAV = [
	{ href: "/", label: "Home" },
	{ href: "/news", label: "News" },
	{ href: "/shop", label: "Shop" },
	{ href: "/about", label: "About" },
	{ href: "/contact", label: "Contact" },
];

export default function Header() {
	const [open, setOpen] = useState(false);

	return (
		<header className="w-full bg-white border-b">
			<Container className="flex items-center justify-between py-4">
				<Logo />
				<nav className="hidden md:flex gap-6">
					{NAV.map((item) => (
						<NavLink key={item.href} href={item.href}>
							{item.label}
						</NavLink>
					))}
					<NavLink href="/auth/login">
						<Image src="/favicon.ico" alt="Login" width={18} height={18} className="inline-block mr-1" />
						Login
					</NavLink>
				</nav>
				<button onClick={() => setOpen((s) => !s)} className="md:hidden px-3 py-2 rounded border border-gray-300">
					☰
				</button>
			</Container>

			{open && (
				<div className="md:hidden border-t bg-white">
					<Container className="py-3 flex flex-col gap-2">
						{NAV.map((item) => (
							<NavLink key={item.href} href={item.href}>
								{item.label}
							</NavLink>
						))}
						<NavLink href="/auth/login">
							<Image src="/favicon.ico" alt="Login" width={18} height={18} className="inline-block mr-1" />
							Login
						</NavLink>
					</Container>
				</div>
			)}
		</header>
	);
}
