"use client";

import { useEffect } from "react";

// Bootstrap bundle
export function BootstrapBundle() {
	useEffect(() => {
		import("bootstrap/dist/js/bootstrap.bundle.min.js");
	}, []);
	return null;
}