"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerApi } from "@/lib/api";
import Link from "next/link";

export default function RegisterPage() {
	const router = useRouter();
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);
		setLoading(true);

		try {
			const data = await registerApi(email, password, username);
			localStorage.setItem("token", data.token);
			router.push("/");
		} catch (err: unknown) {
			if (err instanceof Error) {
				setError(err.message);
			} else {
				setError("An unknown error occurred");
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="card shadow-sm px-4 py-5 w-100" style={{ maxWidth: "440px" }}>
			<h3 className="mb-0 fw-semibold text-center">Create your account</h3>
			<span className="text-center text-secondary">Join us and stay updated with the latest tech news.</span>
			<div className="my-3">
				<form onSubmit={handleSubmit}>
					<div className="mb-3 form-group">
						<label className="form-label">Username</label>
						<input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" required />
					</div>

					<div className="mb-3 form-group">
						<label className="form-label">Email</label>
						<input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
					</div>

					<div className="mb-3 form-group">
						<label className="form-label">Password</label>
						<input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
					</div>

					{error && <p className="text-danger small">{error}</p>}

					<button type="submit" className="btn btn-primary w-100" disabled={loading}>
						{loading ? "Loading..." : "Sign Up"}
					</button>
				</form>
			</div>
			<p className="text-center mt-3 mb-0">
				Already have an account?{" "}
				<Link href="/login" className="text-decoration-none">
					Sign In
				</Link>
			</p>
		</div>
	);
}
