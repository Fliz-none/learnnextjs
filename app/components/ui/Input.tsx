"use client";

interface InputProps {
	label: string;
	type?: string;
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
}

export default function Input({ label, type = "text", value, onChange, placeholder }: InputProps) {
	return (
		<div>
			<label className="text-sm font-medium block text-gray-700">{label}</label>
			<input
				type={type}
				placeholder={placeholder}
				className="w-full rounded-xl border px-3 py-2 text-gray-900 placeholder-gray-400"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				required
			/>
		</div>
	);
}
