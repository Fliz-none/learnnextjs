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
		<div className="mb-3">
			<label className="form-label">{label}</label>
			<input type={type} className="form-control" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} required />
		</div>
	);
}
