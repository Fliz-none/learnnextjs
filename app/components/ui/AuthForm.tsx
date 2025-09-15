"use client";

import Button from "@/components/ui/Button";

interface AuthFormProps {
	title: string;
	onSubmit: (e: React.FormEvent) => void;
	children: React.ReactNode;
	loading: boolean;
	error?: string | null;
	footer: React.ReactNode;
}

export default function AuthForm({ title, onSubmit, children, loading, error, footer }: AuthFormProps) {
	return (
		<form onSubmit={onSubmit} className="w-full max-w-sm space-y-6 rounded-2xl border p-6 shadow-sm bg-white">
			<h1 className="text-2xl font-bold text-gray-900">{title}</h1>
			{children}
			{error && <p className="text-sm text-red-600">{error}</p>}
			<Button type="submit" disabled={loading} full>
				{loading ? "Loading..." : title}
			</Button>
			<p className="text-sm text-gray-500 text-center">{footer}</p>
		</form>
	);
}
