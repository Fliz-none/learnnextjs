import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

type Post = {
	id: number;
	userId: number;
	title: string;
	body: string;
	imageUrl?: string;
	createdAt: string;
};

type PageProps = {
	params: { id: string };
};

async function getPost(id: string): Promise<Post> {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		cache: "no-store",
	});
	if (!res.ok) throw new Error("Failed to fetch post");
	return res.json();
}

export default async function PostPage({ params }: PageProps) {
	const post = await getPost(params.id);

	return (
		<Container className="py-5">
			<Link href="/news" className="small text-primary text-decoration-underline">
				← Back to News
			</Link>
			<div className="d-flex align-items-center gap-3 mt-4">
				<Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&q=80" alt={`# User_${post.userId}`} width={80} height={80} className="rounded-circle object-fit-cover" />
				<div>
					<span className="smalld fw-semibold"># User_{post.userId}</span>
					<p className="small text-primary fw-semibold mb-0">{new Date(post.createdAt ? post.createdAt : "2025-09-15").toLocaleString()}</p>
				</div>
			</div>
			<h1 className="mt-3 h3 fw-bold">{post.title}</h1>
			<p className="mt-3 text-secondary">{post.body}</p>
			<div className="mt-4 position-relative" style={{ width: "600px", maxWidth: "100%", height: "20rem" }}>
				<Image src={post.imageUrl ? post.imageUrl : "/image.svg"} alt={post.title} fill className="rounded" />
			</div>
		</Container>
	);
}
