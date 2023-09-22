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
      <hr className="border-t-1 border-gray-500" />
      {/* introduction to getlinked tech hackathon section*/}
      <Introduction />
      <hr className="border-t-1 border-gray-500" />
      {/* rules and guidlines section*/}
      <Rules />
      <hr className="border-t-1 border-gray-500" />
      {/* judging Criteria key atributes section*/}
      <Judging />
      <hr className="border-t-1 border-gray-500" />
      {/* Faq section */}
      <Faq />
      <hr className="border-t-1 border-gray-500" />
      {/* timeline section*/}
      <Timeline />
      {/* prizes section */}
      <Prizes />
      <hr className="border-t-1 border-gray-500" />
      {/* partners and sponsors section */}
      <Sponsor />
      <hr className="border-t-1 border-gray-500" />
      {/* privacy and policy section */}
      {/* <Privacy /> */}
    </main>
  );
}
