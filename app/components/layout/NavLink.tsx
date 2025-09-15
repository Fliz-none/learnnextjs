"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
	const pathname = usePathname();
	const active = pathname === href || (href !== "/" && pathname.startsWith(href));

	return (
		<Link href={href} className={`px-2 py-1 transition ${active ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}`}>
			{children}
		</Link>
	);
}
