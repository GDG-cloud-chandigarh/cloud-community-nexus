import { Helmet } from "react-helmet-async";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const speakers = [
	{ name: "A. Sharma", title: "Cloud Architect" },
	{ name: "R. Kaur", title: "ML Engineer" },
	{ name: "V. Gupta", title: "DevOps Lead" },
	{ name: "S. Mehta", title: "Data Scientist" },
];

export default function Speakers() {
	return (
		<>
			<img
				src="/images/header.png"
				alt="Cloud Community Days 2025 Logo"
				className="w-full mb-6 object-contain"
			/>
			<section className="container py-16">
				<Helmet>
					<title>Speakers • Cloud Community Days</title>
					<meta
						name="description"
						content="Meet the Cloud Community Days speakers and community leaders."
					/>
					<link rel="canonical" href="/speakers" />
				</Helmet>
				<h1 className="font-display text-4xl mb-8">Speakers</h1>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{speakers.map((sp) => (
						<article
							key={sp.name}
							className="p-6 border bg-card shadow-soft text-center items-center justify-center bg-white border-black border-t-4 border-r-4 font-medium"
						>
							<Avatar className="mx-auto h-16 w-16">
								<AvatarFallback>
									{sp.name
										.split(" ")
										.map((s) => s[0])
										.join("")}
								</AvatarFallback>
							</Avatar>
							<h3 className="mt-4 font-medium">{sp.name}</h3>
							<p className="text-sm text-muted-foreground">
								{sp.title}
							</p>
						</article>
					))}
				</div>
			</section>
		</>
	);
}
