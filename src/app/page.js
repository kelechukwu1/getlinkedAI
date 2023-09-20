import Faq from "@/components/Faq";
import Introduction from "@/components/Introduction";
import Judging from "@/components/Judging";
import Landing from "@/components/Landing";
import Privacy from "@/components/Privacy";
import Prizes from "@/components/Prizes";
import Rules from "@/components/Rules";
import Sponsor from "@/components/Sponsor";
import Timeline from "@/components/Timeline";

export default function Home() {
	return (
		<main className="text-white">
			{/* Landing page */}
			<Landing />

			{/* introduction to getlinked tech hackathon section*/}
			<Introduction />

			{/* rules and guidlines section*/}
			<Rules />

			{/* judging Criteria key atributes section*/}
			<Judging />

			{/* Faq section*/}
			<Faq />

			{/* timeline section*/}
			<Timeline />

			{/* prizes section */}
			<Prizes />

			{/* partners and sponsors section */}
			<Sponsor />

			{/* privacy and policy section */}
			<Privacy />
		</main>
	);
}
