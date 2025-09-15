"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerApi } from "@/lib/api";
import Button from "@/components/ui/Button";
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
			const data = await registerApi(email, password);
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
		<form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6 rounded-2xl border p-6 shadow-sm bg-white">
			<h1 className="text-2xl font-bold text-gray-900">Register</h1>
      <div className="">
        <label className="text-sm font-medium block text-gray-700">Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          className="w-full rounded-xl border px-3 py-2 text-gray-900 placeholder-gray-400"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
			<div>
				<label className="text-sm font-medium block text-gray-700">Email</label>
				<input
					type="email"
					placeholder="Enter your email"
					className="w-full rounded-xl border px-3 py-2 text-gray-900 placeholder-gray-400"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
			</div>

			<div>
				<label className="text-sm font-medium block text-gray-700">Password</label>
				<input
					type="password"
					placeholder="Enter your password"
					className="w-full rounded-xl border px-3 py-2 text-gray-900 placeholder-gray-400"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
			</div>

			{error && <p className="text-sm text-red-600">{error}</p>}

			<Button type="submit" disabled={loading} full>
				{loading ? "Loading..." : "Register"}
			</Button>

			<p className="text-sm text-gray-500 text-center">
				Already have an account?{" "}
				<Link href="/auth/login" className="text-blue-600 hover:text-blue-800 underline">
					Login
				</Link>
			</p>
		</form>
	);
}
