"use client";

import { SearchIcon } from "lucide-react";
export interface SearchItemProps {
	id: string;
	label: string;
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	type?: string;
}

const SearchItem = ({ id, label, value, onChange, placeholder = "Enter text...", type = "text" }: SearchItemProps) => (
	<div className="flex items-center gap-2 w-full max-w-sm mt-3">
		<label htmlFor={id} className="text-gray-700 whitespace-nowrap">
			{label}
		</label>
		<div className="relative flex-1">
			<input
				id={id}
				type={type}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder={placeholder}
				className="w-full border border-gray-300 pl-9 pr-3 py-2 rounded-lg 
             focus:outline-none focus:ring-2 focus:ring-blue-500 
             placeholder:text-gray-600 placeholder:opacity-100 opacity-100 text-gray-600"
			/>
			<SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
		</div>
	</div>
);

export default SearchItem;
