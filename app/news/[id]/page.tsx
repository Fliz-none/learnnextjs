import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

type Post = { id: number; userId: number; title: string; body: string; imageUrl?: string; createdAt: string };
type PostPageProps = {
	params: {
		id: string;
	};
};
async function getPost(id: string): Promise<Post> {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		cache: "no-store",
	});
	if (!res.ok) throw new Error("Failed to fetch post");
	return res.json();
}

export default async function PostPage({ params }: PostPageProps) {
	const { id } = params;
	const post = await getPost(id);

	return (
		<Container className="py-10">
			<Link href="/news" className="text-sm text-blue-600 hover:text-blue-800 underline">
				← Back to News
			</Link>
			<div className="flex items-center space-x-3 mt-5 sm:mt-3">
				<Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&q=80" alt={`# User_${post.userId}`} width={80} height={80} className="w-12 h-12 rounded-full object-cover" />
				<div>
					<span className="text-sm text-gray-700 font-semibold"># User_{post.userId}</span>
					<p className="text-sm text-blue-500 font-semibold"> {new Date(post.createdAt ? post.createdAt : "2025-09-15").toLocaleString()}</p>
				</div>
			</div>
			<h1 className="mt-2 text-3xl font-bold text-gray-900">{post.title}</h1>
			<p className="mt-3 text-gray-700 whitespace-pre-line">{post.body}</p>
			<div className="mt-6 relative w-50 h-60 sm:w-96 sm:h-72 lg:w-[600px] lg:h-80">
				<Image src={post.imageUrl ? post.imageUrl : "/image.svg"} alt={post.title} fill className="mt-4 rounded-lg" />
			</div>
		</Container>
	);
}
