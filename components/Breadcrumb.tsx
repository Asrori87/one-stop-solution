"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb() {
	const pathname = usePathname();
	const pathSegments = pathname.split("/").filter((segment) => segment !== "");

	return (
		<nav aria-label="Breadcrumb" className="mb-4 mt-8">
			<ol className="flex items-center space-x-2 text-sm">
				<li>
					<Link
						href="/"
						className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
					>
						Home
					</Link>
				</li>
				{pathSegments.map((segment, index) => {
					const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
					const isLast = index === pathSegments.length - 1;
					const title =
						segment.charAt(0).toUpperCase() +
						segment.slice(1).replace(/-/g, " ");

					return (
						<li key={href} className="flex items-center">
							<ChevronRight className="w-4 h-4 text-gray-400" />
							{isLast ? (
								<span className="text-gray-700 dark:text-gray-200 font-medium">
									{title}
								</span>
							) : (
								<Link
									href={href}
									className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
								>
									{title}
								</Link>
							)}
						</li>
					);
				})}
			</ol>
		</nav>
	);
}
