"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PaginateItem from "@/components/ui/PaginateItem"; // import component đã viết

type News = { userId: number; id: number; title: string; body: string };

export default function NewsList() {
	const [query, setQuery] = useState("");
	const [news, setNews] = useState<News[]>([]);
	const [page, setPage] = useState(1);
	const pageSize = 6;

	useEffect(() => {
		const getNews = async () => {
			const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
				cache: "no-store",
			});
			const data: News[] = await res.json();
			setNews(data);
		};
		getNews();
	}, []);

	const filtered = news.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()));
	const start = (page - 1) * pageSize;
	const paginated = filtered.slice(start, start + pageSize);
	const totalPages = Math.ceil(filtered.length / pageSize);

	return (
		<div className="container d-flex flex-column p-2">
			{/* Search */}
			<div className="input-group mb-4">
				<span className="search-icon-wrapper input-group-text">
					<i className="bi bi-search text-white"></i>
				</span>
				<input type="text" className="rounded-start-0 form-control form-control-sm " placeholder="Search articles..." value={query} onChange={(e) => { setQuery(e.target.value); setPage(1); }}
				/>
			</div>
			{/* Categories */}
			<div className="d-flex flex-wrap gap-3 mb-4">
				<button className="btn btn-outline-primary active">All</button>
				<button className="btn btn-outline-secondary">Technology</button>
				<button className="btn btn-outline-secondary">Politics</button>
				<button className="btn btn-outline-secondary">Sports</button>
			</div>
			{/* News grid */}
			<div className="flex-grow-1">
				<div className="row g-4">
					{paginated.map((p) => (
						<div key={p.id} className="col-sm-6 col-lg-4">
							<Link href={`/news/${p.id}`} className="card h-100 shadow-sm text-decoration-none">
								<div className="ratio ratio-16x9">
									<Image src="/image.svg" alt={p.title} fill className="card-img-top object-fit-cover" />
								</div>
								<div className="card-body d-flex flex-column bg-semidark">
									<h4 className="card-title">{p.title}</h4>
									<p className="card-text text-truncate text-secondary">{p.body}</p>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>

			{/* Pagination - dùng component tái sử dụng */}
			<div className="mt-4 d-flex justify-content-center">
				<PaginateItem page={page} totalPages={totalPages} onPageChange={setPage} />
			</div>
		</div>
	);
}
