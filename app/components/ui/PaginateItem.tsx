"use client";

import { useState } from "react";

interface PaginateItemProps {
	page: number;
	totalPages: number;
	onPageChange: (page: number) => void;
	size?: "sm" | "md";
}

export default function PaginateItem({ page, totalPages, onPageChange, size = "md" }: PaginateItemProps) {
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

	const sizeClass = size === "sm" ? "text-sm h-8 px-3" : "text-base h-10 px-4";

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
		<nav aria-label="Page navigation" className="mt-6">
			<ul className="inline-flex -space-x-px">
				{/* Prev */}
				<li>
					<button
						onClick={() => onPageChange(Math.max(1, page - 1))}
						disabled={page === 1}
						className={`cursor-${page === 1 ? "not-allowed" : "pointer"} flex items-center justify-center ${sizeClass} leading-tight 
              text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg 
              hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50`}
					>
						‹
					</button>
				</li>

				{/* Page numbers */}
				{pages.map((p, i) =>
					p === "..." ? (
						<li key={`input-${i}`}>
							<form onSubmit={handleJump}>
								<input
									type="text"
									value={jumpPage}
									onChange={(e) => setJumpPage(e.target.value)}
									className={`w-14 text-center border border-gray-300 focus:text-gray-900 ${sizeClass.replace(/px-\d+/, "px-1")} rounded`}
									placeholder="..."
								/>
							</form>
						</li>
					) : (
						<li key={p}>
							<button
								onClick={() => onPageChange(p)}
								aria-current={p === page ? "page" : undefined}
								className={`cursor-pointer flex items-center justify-center ${sizeClass} leading-tight border border-gray-300
                  ${p === page ? "text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700" : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"}`}
							>
								{p}
							</button>
						</li>
					)
				)}

				{/* Next */}
				<li>
					<button
						onClick={() => onPageChange(Math.min(totalPages, page + 1))}
						disabled={page === totalPages}
						className={`cursor-${page === totalPages ? "not-allowed" : "pointer"} flex items-center justify-center ${sizeClass} leading-tight 
              text-gray-500 bg-white border border-gray-300 rounded-e-lg 
              hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50`}
					>
						›
					</button>
				</li>
			</ul>
		</nav>
	);
}
