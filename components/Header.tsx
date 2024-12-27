"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "./ThemeProvider";

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const { theme, toggleTheme } = useTheme();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ href: "#services", label: "Services" },
		{ href: "#calculator", label: "Price Calculator" },
		{ href: "#custom-project", label: "Custom Project" },
	];

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-white dark:bg-gray-900 shadow-md py-2"
					: "bg-transparent py-4"
			}`}
		>
			<div className="container mx-auto px-4">
				<nav className="flex justify-between items-center">
					<Link
						href="/"
						className={`text-2xl font-bold ${
							isScrolled
								? "text-gray-800 dark:text-white"
								: "text-gray-800 dark:text-white"
						}`}
					>
						One-Stop Solution
					</Link>
					<div className="hidden md:flex space-x-4 items-center">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={`text-sm font-medium hover:text-blue-500 transition-colors ${
									isScrolled
										? "text-gray-600 dark:text-gray-300"
										: "text-gray-800 dark:text-white"
								}`}
							>
								{item.label}
							</Link>
						))}
						<Button
							variant="ghost"
							size="icon"
							onClick={toggleTheme}
							className={
								isScrolled
									? "text-gray-600 dark:text-gray-300"
									: "text-gray-800 dark:text-white"
							}
						>
							{theme === "dark" ? (
								<Sun className="h-5 w-5" />
							) : (
								<Moon className="h-5 w-5" />
							)}
						</Button>
					</div>
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon" className="md:hidden">
								<Menu
									className={`h-6 w-6 ${
										isScrolled
											? "text-gray-800 dark:text-white"
											: "text-gray-800 dark:text-white"
									}`}
								/>
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="right">
							<nav className="flex flex-col space-y-4 mt-8">
								{navItems.map((item) => (
									<Link
										key={item.href}
										href={item.href}
										className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
									>
										{item.label}
									</Link>
								))}
								<Button
									variant="ghost"
									size="sm"
									onClick={toggleTheme}
									className="text-gray-600 dark:text-gray-300"
								>
									{theme === "dark" ? (
										<Sun className="h-5 w-5 mr-2" />
									) : (
										<Moon className="h-5 w-5 mr-2" />
									)}
									{theme === "dark" ? "Light Mode" : "Dark Mode"}
								</Button>
							</nav>
						</SheetContent>
					</Sheet>
				</nav>
			</div>
		</header>
	);
}
