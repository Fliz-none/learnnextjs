export default function Logo() {
	return (
		<div className="d-flex align-items-center gap-1">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="40" height="40">
				<mask id="mask0_408_134" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: "alpha" }}>
					<circle cx="90" cy="90" r="90" fill="#137FEC" />
				</mask>
				<g mask="url(#mask0_408_134)">
					<circle cx="90" cy="90" r="90" fill="#137FEC" data-circle="true" />
					<path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_134)" />
					<rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_134)" />
				</g>
				<defs>
					<linearGradient id="paint0_linear_408_134" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
						<stop stopColor="black" />
						<stop offset="1" stopColor="black" stopOpacity="0" />
					</linearGradient>
					<linearGradient id="paint1_linear_408_134" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
						<stop stopColor="black" />
						<stop offset="1" stopColor="black" stopOpacity="0" />
					</linearGradient>
				</defs>
			</svg>
			<span className="fw-bold fs-4 text-nowrap">Tech News</span>
		</div>
	);
}
