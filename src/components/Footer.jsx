import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import Socials from "./Socials";
import Image from "next/image";

const Footer = () => {
	return (
		<div className="relative">
			{/* background stars and frames */}
			<div className="absolute top-[49rem] left-[7rem] md:top-[45rem] md:left-[25rem] lg:left-[39rem] lg:top-[25rem]">
				<Image src={"/star pu.png"} width={15} height={15} alt="star image" />
			</div>
			<div className="absolute top-[8.5rem] md:top-[4rem] md:left-[5rem] left-[1rem]">
				<Image src={"/star.png"} width={12} height={12} alt="star image" />
			</div>
			<div className="absolute top-[46rem] left-[20rem] md:left-[40rem] md:top-[39rem] lg:top-[13rem] lg:left-[73rem]">
				<Image src={"/star.png"} width={12} height={12} alt="star image" />
			</div>
			<div className="absolute top-[29rem] md:top-[24rem] md:left-[25rem] lg:left-[56rem] lg:top-[3rem] left-[11rem]">
				<Image src={"/stargray.png"} width={15} height={15} alt="star image" />
			</div>
			{/* background stars and frames end here*/}
			<div className="text-white bg-custom-color2">
				<div className="mx-10 md:mx-40 mt-[10rem] py-10">
					<div className="grid grid-cols-1 lg:grid-cols-2 md:gap-16 justify-evenly">
						<div className="">
							<div className="mb-5 font">
								<span className="text-2xl font-bold text-white">get</span>
								<span className="text-2xl font-bold text-color-2">linked</span>
							</div>
							<div>
								Getlinked Tech Hackathon is a technology innovation program
								established by a group of organizations with the aim of
								showcasing young and talented individuals in the field of
								technology
							</div>
							<div className="flex items-center justify-center my-10 space-x-5 lg:justify-start md:mt-20">
								<div className="w-[1/2] p-2">Terms of Use</div>
								<div className="border-[1px] border-purple-600 h-5"></div>
								<div className="w-[1/2] p-2">Privacy Policy</div>
							</div>
						</div>

						<div className="md:flex">
							<div className="md:ml-10">
								<div className="space-y-6">
									<div className="text-xl font-bold text-color-2">
										Useful Links
									</div>
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
									<div className="flex md:py-10">
										<div className="mr-5 text-color-2">Follow us</div>
										<Socials />
									</div>
								</div>
							</div>
							<div className="md:ml-10">
								<div className="mt-5 space-y-5 md:mt-0">
									<div className="text-xl font-bold text-color-2">
										Contact Us
									</div>
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
							</div>
						</div>
					</div>

					<div className="my-5 text-center">
						All rights reserved.©getlinked Ltd.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
