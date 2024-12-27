import Breadcrumb from "@/components/Breadcrumb";

export default function ServiceLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="container mx-auto px-4 py-12 ">
			<Breadcrumb />
			{children}
		</div>
	);
}
