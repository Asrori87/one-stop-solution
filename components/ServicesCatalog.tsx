"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
	{
		id: "website-development",
		title: "Website Development",
		description: "Custom websites tailored to your needs",
		basePrice: 500,
		showcaseImage: "https://placehold.co/600x400.svg",
	},
	{
		id: "academic-writing",
		title: "Academic Writing",
		description: "Professional assistance for your research papers",
		basePrice: 100,
		showcaseImage: "https://placehold.co/600x400.svg",
	},
	{
		id: "graphic-design",
		title: "Graphic Design",
		description: "Eye-catching visuals for your brand",
		basePrice: 200,
		showcaseImage: "https://placehold.co/150x200.svg",
	},
	{
		id: "digital-marketing",
		title: "Digital Marketing",
		description: "Boost your online presence and reach",
		basePrice: 300,
		showcaseImage: "https://placehold.co/150x200.svg",
	},
	{
		id: "content-creation",
		title: "Content Creation",
		description: "Engaging content for your audience",
		basePrice: 150,
		showcaseImage: "https://placehold.co/150x200.svg",
	},
	{
		id: "seo-optimization",
		title: "SEO Optimization",
		description: "Improve your search engine rankings",
		basePrice: 250,
		showcaseImage: "https://placehold.co/150x200.svg",
	},
];

export default function ServicesCatalog() {
	return (
		<section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-100 mb-12">
					Our Services
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service) => (
						<Link href={`/services/${service.id}`} key={service.id}>
							<Card className="bg-white dark:bg-gray-700 hover:shadow-lg transition-shadow duration-300 border-none overflow-hidden">
								<Image
									src={service.showcaseImage}
									alt={`${service.title} showcase`}
									width={200}
									height={150}
									className="w-full h-40 object-cover"
								/>
								<CardHeader>
									<CardTitle className="text-gray-800 dark:text-gray-100">
										{service.title}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-gray-600 dark:text-gray-300 mb-2">
										{service.description}
									</p>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										Starting at ${service.basePrice}
									</p>
								</CardContent>
							</Card>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
