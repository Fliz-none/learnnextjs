"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerApi } from "@/lib/api";
import Link from "next/link";
import AuthForm from "@/components/ui/AuthForm";
import Input from "@/components/ui/Input";

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
		<AuthForm
			title="Register"
			onSubmit={handleSubmit}
			loading={loading}
			error={error}
			footer={
				<>
					Already have an account?{" "}
					<Link href="/login" className="text-blue-600 hover:text-blue-800 underline">
						Login
					</Link>
				</>
			}
		>
			<Input label="Username" value={username} onChange={setUsername} placeholder="Enter your username" />
			<Input label="Email" type="email" value={email} onChange={setEmail} placeholder="Enter your email" />
			<Input label="Password" type="password" value={password} onChange={setPassword} placeholder="Enter your password" />
		</AuthForm>
	);
}
