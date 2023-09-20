import Link from "next/link";

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
							<div>Follow us</div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>

					<div className="space-y-5 mt-5">
						<div className="text-color-2 font-bold text-xl">Contact Us</div>
						<div>+234 679 81819</div>
						<div className="">27, Alara Street Yaba 100012 Lagos State</div>
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
