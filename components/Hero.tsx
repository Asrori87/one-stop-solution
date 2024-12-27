"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Hero() {
	const { theme } = useTheme();

	return (
		<section className="relative h-screen flex items-center justify-center overflow-hidden">
			<div className="relative z-10 text-center">
				<motion.h1
					className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-gray-100"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					Your One-Stop Solution
				</motion.h1>
				<motion.p
					className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					{`From website development to academic writing, we've got you covered.`}
				</motion.p>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<a
						href="#services"
						className={`${
							theme === "dark"
								? "bg-gray-800 text-white hover:bg-gray-700"
								: "bg-blue-600 text-white hover:bg-blue-700"
						} px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300`}
					>
						Explore Our Services
					</a>
				</motion.div>
			</div>
			<motion.div
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.5,
					delay: 0.6,
					repeat: Infinity,
					repeatType: "reverse",
				}}
			>
				<ChevronDown className="text-gray-600 dark:text-gray-400 w-8 h-8" />
			</motion.div>
		</section>
	);
}
