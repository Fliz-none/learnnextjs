import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";


/** Import JS */
import { BootstrapBundle } from "@/components/Clients";

/** Import components */
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<Header />
				<BootstrapBundle />
				<main className="d-flex min-vh-100 align-items-center justify-content-center container pb-4">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
