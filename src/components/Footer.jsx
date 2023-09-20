import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import Socials from "./Socials";

const Footer = () => {
	return (
		<>
			<div className=" bg-custom-color2 text-white">
				<div className="mx-10 mt-[10rem] py-10">
					<div>
						<span className="text-white font-bold text-2xl">get</span>
						<span className="text-color-2 font-bold text-2xl">linked</span>
					</div>
					<div>
						Getlinked Tech Hackathon is a technology innovation program
						established by a group of organizations with the aim of showcasing
						young and talented individuals in the field of technology
					</div>
					<div className="flex justify-center space-x-5 items-center my-10">
						<div className="w-[1/2] p-2">Terms of Use</div>
						<div className="border-[1px] border-purple-600 h-5"></div>
						<div className="w-[1/2] p-2">Privacy Policy</div>
					</div>

					<div className="space-y-6">
						<div className="text-color-2 font-bold text-xl">Useful Links</div>
						<div>
							<Link href={"overview"}> Overview</Link>
						</div>
						<div>
							<Link href={" timeline"}>Timeline</Link>
						</div>
						<div>
							<Link href={"faq"}>FAQs</Link>
						</div>
						<div>
							<Link href={"register"}>Register</Link>
						</div>
						<div className="flex">
							<div className="mr-5 text-color-2">Follow us</div>
							<Socials />
						</div>
					</div>

					<div className="space-y-5 mt-5">
						<div className="text-color-2 font-bold text-xl">Contact Us</div>
						<div className="flex items-center">
							<div className="pr-2">
								<FiPhoneCall className="w-4 h-4" />
							</div>
							<div>+234 679 81819</div>
						</div>
						<div className="flex">
							<div className="pr-2 mt-1">
								<IoLocationSharp className="w-4 h-4" />
							</div>
							<div>
								<p>27, Alara Street</p>
								<p>Yaba 100012</p>
								<p>Lagos State</p>
							</div>{" "}
						</div>
					</div>

					<div className="text-center my-5">
						All rights reserved.©getlinked Ltd.
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
