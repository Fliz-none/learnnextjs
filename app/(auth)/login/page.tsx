"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginApi } from "@/lib/api";
import Link from "next/link";

export default function LoginPage() {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);
		setLoading(true);

		try {
			const data = await loginApi(email, password);
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
			<h3 className="mb-0 fw-semibold text-center">Welcome Back</h3>
			<span className="text-center text-secondary">Sign in to continue to your account.</span>
			<div className="my-3">
				<form onSubmit={handleSubmit}>
					<div className="mb-3 form-group">
						<label className="form-label">Email</label>
						<input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@example.com" required />
					</div>

					<div className="mb-3 form-group">
						<label className="form-label">Password</label>
						<input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required />
					</div>

					{error && <p className="text-danger small">{error}</p>}

					<Link href="/forgot-password" className="text-decoration-none d-block my-3">Forgot your password?</Link>
					<button type="submit" className="btn btn-primary w-100" disabled={loading}>
						{loading ? "Loading..." : "Log in"}
					</button>
				</form>
			</div>
			<p className="text-center mt-3 mb-0">
				Do not have an account?{" "}
				<Link href="/register" className="text-decoration-none">
					Sign up
				</Link>
			</p>
		</div>
	);
}
