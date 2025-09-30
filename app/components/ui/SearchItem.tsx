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
	<div className="d-flex align-items-center gap-2 w-100 mt-3" style={{ maxWidth: "20rem" }}>
		<label htmlFor={id} className="text-secondary text-nowrap">
			{label}
		</label>
		<div className="position-relative flex-grow-1">
			<input id={id} type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="form-control ps-5" />
			<SearchIcon className="position-absolute top-50 start-0 translate-middle-y ms-2d" width={16} height={16} />
		</div>
	</div>
);

export default SearchItem;
