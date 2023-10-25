"use client";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Faq = () => {
	//aos useEffect hook
	useEffect(() => {
		AOS.init({
			duration: 750,
			offset: 0,
			once: true,
			anchorPlacement: "top-bottom",
		});
	}, []);
	return (
		<div className="relative">
			<div className="absolute top-[-1rem] left-[4rem] md:top-[-2rem] lg:top-[-3rem]">
				<Image src={"/star pu.png"} width={20} height={20} alt="star image" />
			</div>
			<div className="absolute top-[45rem] left-[12rem] md:top-[5rem] md:left-[43rem] lg:left-[62rem]">
				<Image src={"/sata gra.png"} width={15} height={15} alt="star image" />
			</div>
			<div className=" md:top-[12rem] md:left-[38rem] lg:left-[55rem] absolute top-[53rem] left-[6rem]">
				<Image src={"/sata gra.png"} width={10} height={10} alt="star image" />
			</div>
			<div className=" md:top-[16rem] md:left-[36rem] lg:left-[53rem] bg-pink-700-500 absolute top-[57rem] left-[3rem]">
				<Image src={"/stargray.png"} width={15} height={15} alt="star image" />
			</div>
			<div className="md:left-[50rem] md:top-[30rem] lg:left-[66rem] absolute top-[67rem] left-[18rem]">
				<Image src={"/star.png"} width={20} height={20} alt="star image" />
			</div>

			<div className="my-20 text-sm text-white md:justify-center md:items-centermd:my-24">
				<div className="gap-10 mx-10 md:grid md:grid-cols-2 md:text-start md:justify-center md:items-center md:mx-20">
					<div>
						<div className="mb-6 font text-center md:text-start">
							<div
								data-aos="fade-left"
								className="mb-2 text-2xl font-bold text-center md:text-start"
							>
								Frequently Ask
							</div>
							<span
								data-aos="fade-right"
								className="text-2xl font-bold text-center text-color-2"
							>
								Question
							</span>
						</div>
						<div data-aos="fade-up" className="mb-6 text-center md:text-start">
							We got answers to the questions that you might
							<div>
								want to ask about
								<span className="font-bold"> getlinked Hackathon 1.0</span>
							</div>
						</div>
						<div className="md:space-y-[-2rem]">
							<div>
								<div
									data-aos="fade-left"
									className="flex justify-between text-sm"
								>
									<div className="my-5">
										Can I work on a project I started before the hackathon?
									</div>
									<div
										data-aos="fade-up"
										className="mt-5 text-lg text-color-2 md:mt-5"
									>
										+
									</div>
								</div>
								<div
									data-aos="fade-right"
									className="w-full h-5 bg-text-color-2"
								>
									<hr className="border-purple-500 border-t-1" />
								</div>
							</div>

							<div>
								<div className="flex justify-between text-sm">
									<div data-aos="fade-left" className="my-5">
										What happens if I need help during the hackathon?{" "}
									</div>
									<div data-aos="fade-up" className="mt-5 text-lg text-color-2">
										+
									</div>
								</div>
								<div
									data-aos="fade-right"
									className="w-full h-5 bg-text-color-2"
								>
									<hr className="border-purple-500 border-t-1" />
								</div>
							</div>

							<div>
								<div className="flex justify-between text-sm">
									<div data-aos="fade-left" className="my-5">
										{`What happens if I don't have an idea for a project?`}
									</div>
									<div data-aos="fade-up" className="mt-5 text-lg text-color-2">
										+
									</div>
								</div>
								<div
									data-aos="fade-right"
									className="w-full h-5 bg-text-color-2"
								>
									<hr className="border-purple-500 border-t-1" />
								</div>
							</div>

							<div>
								<div className="flex justify-between text-sm">
									<div data-aos="fade-left" className="my-5">
										Can I join a team or do I have to come with one?{" "}
									</div>
									<div data-aos="fade-up" className="mt-5 text-lg text-color-2">
										+
									</div>
								</div>
								<div
									data-aos="fade-right"
									className="w-full h-5 bg-text-color-2"
								>
									<hr className="border-purple-500 border-t-1" />
								</div>
							</div>

							<div>
								<div className="flex justify-between text-sm">
									<div data-aos="fade-left" className="my-5">
										What happens after the hackathon ends?{" "}
									</div>
									<div data-aos="fade-up" className="mt-5 text-lg text-color-2">
										+
									</div>
								</div>
								<div
									data-aos="fade-right"
									className="w-full h-5 bg-text-color-2"
								>
									<hr className="border-purple-500 border-t-1" />
								</div>
							</div>

							<div>
								<div className="flex justify-between text-sm">
									<div data-aos="fade-left" className="my-5">
										Can I work on a project I started before the hackathon?{" "}
									</div>
									<div data-aos="fade-up" className="mt-5 text-lg text-color-2">
										+
									</div>
								</div>
								<div
									data-aos="fade-right"
									className="w-full h-5 bg-text-color-2"
								>
									<hr className="border-purple-500 border-t-1" />
								</div>
							</div>
						</div>
					</div>
					<div className="items-center justify-center mt-10">
						<div className="md:relative flex items-center justify-evenly md:left-[-7rem] md:top-3">
							<div data-aos="fade-right" className="absolute">
								<Image
									src={"/questionMark.png"}
									height={20}
									width={20}
									alt=""
									className="relative top-[0.5rem] left-[-8rem] md:top-[-1rem] md:left-[1rem] lg:left-[-3rem] lg:top-[1rem] w-auto h-auto"
								/>
							</div>
							<div data-aos="fade-down" className="absolute">
								<Image
									src={"/questionMark.png"}
									height={30}
									width={30}
									alt=""
									className="relative top-[-1rem] md:top-[-3rem] md:left-[6rem] left-[-3rem] lg:top-[-2rem] lg:left-[4rem] w-auto h-auto"
								/>
							</div>
							<div data-aos="fade-left" className="absolute">
								<Image
									src={"/questionMark.png"}
									height={20}
									width={20}
									alt=""
									className="relative top-[0.5rem] right-[-2rem] md:top-[-1rem] md:left-[11rem] lg:left-[11rem] lg:top-[1rem] w-auto h-auto"
								/>
							</div>
						</div>
						<div data-aos="fade-left" className="md:w-full md:pl-16">
							<Image
								className=""
								src={"/think.png"}
								width={500}
								height={500}
								alt="thinking man"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Faq;
