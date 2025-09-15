"use client";

import { useState, useEffect } from "react";
import SearchItem from "@/components/ui/SearchItem";
import PaginateItem from "@/components/ui/common/PaginateItem";
import Image from "next/image";

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
		<div className="flex flex-col h-[calc(100vh-120px)]">
			{/* Search */}
			<SearchItem
				id="search-news"
				label=""
				value={query}
				onChange={(val) => {
					setQuery(val);
					setPage(1);
				}}
				placeholder="Search news..."
			/>

			<div className="flex-1 overflow-y-auto mt-6">
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{paginated.map((p) => (
						<a key={p.id} href={`/news/${p.id}`} className="bg-white border rounded-lg shadow-sm hover:shadow-md transition flex flex-col overflow-hidden">
							<div className="relative w-full h-40">
								<Image src="/image.svg" alt={p.title} fill className="object-cover" />
							</div>
							<div className="p-4 flex flex-col flex-1">
								<p className="text-xs text-gray-500">News #{p.id}</p>
								<h5 className="mt-1 font-semibold text-gray-900 line-clamp-2">{p.title}</h5>
								<p className="mt-2 text-sm text-gray-600 line-clamp-3 flex-1">{p.body}</p>
							</div>
							<div className="px-4 py-2 border-t bg-gray-50 text-right">
								<span className="text-xs text-blue-600">Xem chi tiết</span>
							</div>
						</a>
					))}
				</div>
			</div>

			<div className="sticky bottom-10">
				<PaginateItem page={page} totalPages={totalPages} onPageChange={setPage} />
			</div>
		</div>
	);
}
