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
			<hr />
			{/* rules and guidlines section*/}
			<Rules />
			<hr />
			{/* judging Criteria key atributes section*/}
			<Judging />
			<hr />
			{/* Faq section*/}
			<Faq />
			<hr />
			{/* timeline section*/}
			<Timeline />

			{/* prizes section */}
			<Prizes />

			{/* partners and sponsors section */}
			<Sponsor />
			<hr />

			{/* privacy and policy section */}
			<Privacy />
		</main>
	);
}
