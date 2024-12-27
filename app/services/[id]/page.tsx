import Image from "next/image";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
	{
		id: "website-development",
		title: "Website Development",
		description: "Custom websites tailored to your needs",
		content:
			"Our website development service offers end-to-end solutions for businesses of all sizes. We create responsive, user-friendly websites that not only look great but also perform exceptionally well.",
		showcase: [
			{
				title: "E-commerce Platform",
				image: "https://placehold.co/400x300.svg",
				description:
					"A fully responsive e-commerce website with integrated payment systems and inventory management.",
			},
			{
				title: "Corporate Website",
				image: "https://placehold.co/400x300.svg",
				description:
					"A sleek, professional website for a multinational corporation, featuring a content management system and multilingual support.",
			},
			{
				title: "Educational Portal",
				image: "https://placehold.co/400x300.svg",
				description:
					"An interactive learning platform with video integration, quiz modules, and progress tracking for students.",
			},
		],
	},
	{
		id: "academic-writing",
		title: "Academic Writing",
		description: "Professional assistance for your research papers",
		content:
			"Our academic writing service provides expert assistance for students and researchers. We help with research papers, theses, dissertations, and more, ensuring high-quality, plagiarism-free content.",
		showcase: [
			{
				title: "Doctoral Dissertation",
				image: "https://placehold.co/400x300.svg",
				description:
					"A comprehensive dissertation on climate change impacts, published in a peer-reviewed journal.",
			},
			{
				title: "Research Paper",
				image: "https://placehold.co/400x300.svg",
				description:
					"An in-depth analysis of machine learning algorithms, presented at an international conference.",
			},
			{
				title: "Literature Review",
				image: "https://placehold.co/400x300.svg",
				description:
					"A thorough review of recent advancements in renewable energy technologies.",
			},
		],
	},
	{
		id: "graphic-design",
		title: "Graphic Design",
		description: "Eye-catching visuals for your brand",
		content:
			"Our graphic design service creates stunning visuals that capture your brand's essence. From logos to marketing materials, we deliver designs that make a lasting impression.",
		showcase: [
			{
				title: "Brand Identity",
				image: "https://placehold.co/400x300.svg",
				description:
					"A complete brand identity package for a startup, including logo, color palette, and brand guidelines.",
			},
			{
				title: "Product Packaging",
				image: "https://placehold.co/400x300.svg",
				description:
					"Innovative and attractive packaging design for a line of organic skincare products.",
			},
			{
				title: "Event Poster",
				image: "https://placehold.co/400x300.svg",
				description:
					"A vibrant and informative poster design for a major music festival.",
			},
		],
	},
	{
		id: "digital-marketing",
		title: "Digital Marketing",
		description: "Boost your online presence and reach",
		content:
			"Our digital marketing services help you reach your target audience effectively. We offer a comprehensive approach including SEO, social media marketing, and PPC campaigns.",
		showcase: [
			{
				title: "Social Media Campaign",
				image: "https://placehold.co/400x300.svg",
				description:
					"A viral social media campaign that increased brand engagement by 200% for a fashion retailer.",
			},
			{
				title: "SEO Optimization",
				image: "https://placehold.co/400x300.svg",
				description:
					"An SEO strategy that boosted organic traffic by 150% for a local restaurant chain.",
			},
			{
				title: "PPC Campaign",
				image: "https://placehold.co/400x300.svg",
				description:
					"A targeted PPC campaign that resulted in a 300% ROI for an online course platform.",
			},
		],
	},
	{
		id: "content-creation",
		title: "Content Creation",
		description: "Engaging content for your audience",
		content:
			"Our content creation service produces engaging, valuable content that resonates with your audience. We create blog posts, articles, social media content, and more.",
		showcase: [
			{
				title: "Blog Series",
				image: "https://placehold.co/400x300.svg",
				description:
					"A series of in-depth blog posts on personal finance that increased website traffic by 80%.",
			},
			{
				title: "Video Content",
				image: "https://placehold.co/400x300.svg",
				description:
					"A set of explainer videos for a SaaS product that improved conversion rates by 50%.",
			},
			{
				title: "Infographic",
				image: "https://placehold.co/400x300.svg",
				description:
					"A viral infographic on environmental sustainability that was shared by major news outlets.",
			},
		],
	},
	{
		id: "seo-optimization",
		title: "SEO Optimization",
		description: "Improve your search engine rankings",
		content:
			"Our SEO optimization service helps improve your website's visibility in search engine results. We use the latest techniques to boost your rankings and drive organic traffic.",
		showcase: [
			{
				title: "Local SEO",
				image: "https://placehold.co/400x300.svg",
				description:
					"A local SEO strategy that put a small business on the first page of Google for key local search terms.",
			},
			{
				title: "E-commerce SEO",
				image: "https://placehold.co/400x300.svg",
				description:
					"An SEO overhaul for an online store that resulted in a 200% increase in organic product sales.",
			},
			{
				title: "Content SEO",
				image: "https://placehold.co/400x300.svg",
				description:
					"A content-focused SEO strategy that established a blog as a top industry resource, driving significant traffic and leads.",
			},
		],
	},
];

export default function ServicePage({ params }: { params: { id: string } }) {
	const service = services.find((s) => s.id === params.id);

	if (!service) {
		notFound();
	}

	return (
		<>
			<Card className="mb-12">
				<CardHeader>
					<CardTitle className="text-3xl">{service.title}</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
						{service.description}
					</p>
					<div className="prose dark:prose-invert max-w-none">
						<p>{service.content}</p>
					</div>
				</CardContent>
			</Card>

			<h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
				Our Work
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{service.showcase.map((project, index) => (
					<Card
						key={index}
						className="overflow-hidden bg-white dark:bg-gray-800"
					>
						<Image
							src={project.image}
							alt={project.title}
							width={400}
							height={300}
							className="w-full h-48 object-cover"
						/>
						<CardHeader>
							<CardTitle className="text-gray-800 dark:text-gray-200">
								{project.title}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-gray-600 dark:text-gray-300">
								{project.description}
							</p>
						</CardContent>
					</Card>
				))}
			</div>
		</>
	);
}
