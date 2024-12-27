"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const services = [
	{ id: "website-development", title: "Website Development", basePrice: 500 },
	{ id: "academic-writing", title: "Academic Writing", basePrice: 100 },
	{ id: "graphic-design", title: "Graphic Design", basePrice: 200 },
	{ id: "digital-marketing", title: "Digital Marketing", basePrice: 300 },
	{ id: "content-creation", title: "Content Creation", basePrice: 150 },
	{ id: "seo-optimization", title: "SEO Optimization", basePrice: 250 },
];

export default function PriceCalculator() {
	const [selectedServices, setSelectedServices] = useState<string[]>([]);

	const toggleService = (serviceId: string) => {
		setSelectedServices((prev) =>
			prev.includes(serviceId)
				? prev.filter((id) => id !== serviceId)
				: [...prev, serviceId],
		);
	};

	const calculateTotal = () => {
		return selectedServices.reduce((total, serviceId) => {
			const service = services.find((s) => s.id === serviceId);
			return total + (service?.basePrice || 0);
		}, 0);
	};

	return (
		<section id="calculator" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
					Price Calculator
				</h2>
				<Card className="max-w-md mx-auto">
					<CardHeader>
						<CardTitle>Calculate Your Project Cost</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							{services.map((service) => (
								<div key={service.id} className="flex items-center space-x-2">
									<Checkbox
										id={service.id}
										checked={selectedServices.includes(service.id)}
										onCheckedChange={() => toggleService(service.id)}
									/>
									<Label htmlFor={service.id}>
										{service.title} - ${service.basePrice}
									</Label>
								</div>
							))}
						</div>
						<div className="mt-6">
							<p className="text-lg font-semibold">
								Total Estimated Cost: ${calculateTotal()}
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
