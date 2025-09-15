"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginApi } from "@/lib/api";
import Link from "next/link";
import AuthForm from "@/components/ui/AuthForm";
import Input from "@/components/ui/Input";

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
		<AuthForm
			title="Login"
			onSubmit={handleSubmit}
			loading={loading}
			error={error}
			footer={
				<>
					Do not have an account?{" "}
					<Link href="/register" className="text-blue-600 hover:text-blue-800 underline">
						Register
					</Link>
				</>
			}
		>
			<Input label="Email" type="email" value={email} onChange={setEmail} placeholder="Enter your email" />
			<Input label="Password" type="password" value={password} onChange={setPassword} placeholder="Enter your password" />
		</AuthForm>
	);
}
