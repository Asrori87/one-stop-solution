import CustomProjectForm from "@/components/CustomProjectForm";
import Hero from "@/components/Hero";
import PriceCalculator from "@/components/PriceCalculator";
import ServicesCatalog from "@/components/ServicesCatalog";

export default function Home() {
	return (
		<div className="min-h-screen">
			<Hero />
			<main>
				<ServicesCatalog />
				<PriceCalculator />
				<CustomProjectForm />
			</main>
		</div>
	);
}
