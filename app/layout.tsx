import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "One-Stop Solution",
	description: "Your one-stop solution for all services",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
			>
				<ThemeProvider>
					<div className="min-h-screen">
						<Header />
						{children}
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
