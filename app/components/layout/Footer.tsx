export default function Footer() {
	return (
		<footer className="py-2 mt-auto">
			<div className="container d-flex justify-content-between align-items-center">
				<div>
					<span className="small">© 2024 Tech News. All rights reserved.</span>
				</div>
				<div className="d-flex gap-3">
					<a href="/terms" className="text-decoration-none small">
						Terms of Service
					</a>
					<a href="/privacy" className="text-decoration-none small">
						Privacy Policy
					</a>
				</div>
			</div>
		</footer>
	);
}
