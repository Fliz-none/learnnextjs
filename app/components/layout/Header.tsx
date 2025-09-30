"use client";

import Logo from "@/components/ui/Logo";
import NavLink from "@/components/layout/NavLink";

const NAV = [
	{ href: "/", label: "Home" },
	{ href: "/news", label: "News" },
	{ href: "/about", label: "About" },
];

export default function Header() {
	return (
		<header className="sticky-top py-1">
			<nav className="navbar navbar-expand-md">
				<div className="container">
					<Logo />
					<button className="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ms-auto gap-3 d-flex align-items-center">
							{NAV.map((item) => (
								<li className="nav-item" key={item.href}>
									<NavLink href={item.href}>{item.label}</NavLink>
								</li>
							))}
							<li className="nav-item">
								<NavLink href="/login">Sign in</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}
