"use client";

import { useState } from "react";

interface PaginateItemProps {
	page: number;
	totalPages: number;
	onPageChange: (page: number) => void;
	size?: "sm" | "md" | "lg";
}

export default function PaginateItem({ page, totalPages, onPageChange }: PaginateItemProps) {
	const [jumpPage, setJumpPage] = useState("");

	const handleJump = (e: React.FormEvent) => {
		e.preventDefault();
		const num = parseInt(jumpPage, 10);
		if (!isNaN(num) && num >= 1 && num <= totalPages) {
			onPageChange(num);
			setJumpPage("");
		}
	};

	if (totalPages <= 1) return null;

	const getPages = () => {
		const pages: (number | "...")[] = [];
		if (totalPages <= 7) {
			for (let i = 1; i <= totalPages; i++) pages.push(i);
		} else {
			if (page <= 3) {
				pages.push(1, 2, 3, "...", totalPages);
			} else if (page >= totalPages - 2) {
				pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
			} else {
				pages.push(1, "...", page - 1, page, page + 1, "...", totalPages);
			}
		}
		return pages;
	};

	const pages = getPages();
	return (
		<div className="mt-3">
			<ul className="d-flex justify-content-center gap-4 list-unstyled">
				{/* Prev */}
				<li className={`${page === 1 ? "disabled" : ""}`}>
					<span className="p-2 text-white" role="button" onClick={() => onPageChange(Math.max(1, page - 1))}>
						‹
					</span>
				</li>

				{/* Page numbers */}
				{pages.map((p, i) =>
					p === "..." ? (
						<li key={`input-${i}`}>
							<form onSubmit={handleJump}>
								<input type="text" value={jumpPage} onChange={(e) => setJumpPage(e.target.value)} className="page-link text-center" style={{ width: "3rem" }} placeholder="..." />
							</form>
						</li>
					) : (
						<li key={p} className={`${p === page ? "active" : ""}`}>
							<span
								className={`d-flex align-items-center justify-content-center rounded-circle ${p === page ? "bg-primary text-white" : "text-white"}`}
								style={{ width: "2rem", height: "2rem", cursor: "pointer"}}
								onClick={() => onPageChange(p)}
							>
								{p}
							</span>
						</li>
					)
				)}

				{/* Next */}
				<li className={`${page === totalPages ? "disabled" : ""}`}>
					<span className="p-2 text-white" role="button" onClick={() => onPageChange(Math.min(totalPages, page + 1))}>
						›
					</span>
				</li>
			</ul>
		</div>
	);
}
