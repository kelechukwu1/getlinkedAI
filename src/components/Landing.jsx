"use client";

import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "nextjs-simple-typewriter";

const Landing = () => {
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
		<>
			<div className="">
				{/* medium and desktop design */}
				<div className="hidden md:block">
					<div className="w-full flex flex-col items-end">
						<div
							data-aos="fade-down-left"
							className="py-6 px-7 text-xl font-bold italic"
						>
							<Typewriter
								words={["Igniting a Revolution in HR Innovation"]}
								loop={0}
								cursor
								cursorStyle="_"
								typeSpeed={70}
								deleteSpeed={50}
								delaySpeed={2000}
							/>
						</div>
						<div
							data-aos="fade-left"
							className="md:mt-[-1.5rem] md:mr-[1.7rem]"
						>
							<Image
								src="/Vector 4.png"
								width={100}
								height={100}
								alt="pink line"
								className="md:w-[8.5rem] lg:w-[8.8rem]"
							/>
						</div>
					</div>

					{/* background beautifications */}
					<div className="">
						<div className="absolute top-[4rem] md:top-[3rem] left-[-6rem] md:left-[-1rem]">
							<Image
								src="/purpleLens.png"
								width={500}
								height={500}
								alt="purple lens"
								className="blur opacity-50 z-0 w-auto h-auto"
							/>
						</div>

						<div className="absolute top-[8.5rem] md:top-[8.5rem] left-[9rem]  md:left-[11rem]">
							<Image
								src={"/star.png"}
								width={12}
								height={12}
								alt="star image"
							/>
						</div>

						<div className="md:hidden absolute md:top-[12rem] left-[22rem]">
							<Image
								src={"/stargray.png"}
								width={8}
								height={8}
								alt="star image"
							/>
						</div>
						<div className="hidden md:block absolute top-[8.5rem] md:top-[12rem] left-[22rem] md:left-[50rem]">
							<Image
								src={"/stargray.png"}
								width={15}
								height={15}
								alt="star image"
							/>
						</div>

						<div className="md:hidden absolute top-[21.5rem] left-[22rem]">
							<Image
								src={"/stargray.png"}
								width={8}
								height={8}
								alt="star image"
							/>
						</div>
						<div className="hidden md:block absolute md:top-[33rem] md:left-[32rem]">
							<Image
								src={"/stargray.png"}
								width={15}
								height={15}
								alt="star image"
							/>
						</div>
					</div>
					{/* background styles ends here */}

					{/* main content */}
					<div className="md:flex text-white">
						<div className="md:pl-16 lg:ml-20 md:flex-1">
							<div className="justify-start mt-5 font-clash-display">
								<div data-aos="fade-down" className="absolute">
									<Image
										src={"/Creative 1.png"}
										width={25}
										height={25}
										alt="idea"
										className="relative md:top-[-1.5rem] lg:top-[-1.2rem] md:left-[17rem] lg:left-[21.5rem] w-auto h-auto"
									/>
								</div>
								<div
									data-aos="fade-up-right"
									className="md:text-5xl lg:text-6xl font-bold font flex justify-start"
								>
									getlinkedTech
								</div>
								<div className="flex items-center justify-start">
									<div
										data-aos="fade-up-right"
										className="md:text-5xl lg:text-6xl font-bold font"
									>
										Hackathon
									</div>
									<div
										data-aos="fade-up-right"
										className="md:text-5xl lg:text-6xl font font-bold text-color-2"
									>
										1.0
									</div>
									<div data-aos="fade-up-left">
										<Image
											src={"/chain.png"}
											width={60}
											height={60}
											alt="chain"
											className="w-auto h-auto"
										/>
									</div>
									<div data-aos="fade-left">
										<Image
											src={"/banger.png"}
											width={60}
											height={60}
											alt="banger"
										/>
									</div>
								</div>
							</div>

							<div
								data-aos="fade-up-left"
								className="mt-2 md:text-start md:mr-[5rem] lg:mr-[13rem]"
							>
								Participate in getlinked tech Hackathon 2023 stand a chance to
								win a Big prize
							</div>
							<div
								data-aos="fade-up-left"
								className="text-center mt-10 justify-center md:text-start z-10 relative"
							>
								<Link href={"/register"}>
									<Button text={"Register"} />
								</Link>
							</div>
							<div
								data-aos="fade-up-left"
								className="flex py-[1.6rem] time justify-center text-center md:justify-normal md:mt-2 gap-4"
							>
								<div className="text-6xl">
									00
									<span className="text-sm">H</span>
								</div>
								<div className="text-6xl">
									00
									<span className="text-sm">M</span>
								</div>
								<div className="text-6xl">
									00
									<span className="text-sm">S</span>
								</div>
							</div>
						</div>

						<div className="flex flex-col md:flex-1 items-center">
							<div data-aos="fade-left" className="mr-5 z-10">
								<Image
									src="/Image 1.png"
									width={500}
									height={500}
									alt="virtual reality"
									className=" md:w-full md:h-[27rem] z-10 object-contain"
								/>
							</div>
							<div
								data-aos="fade-up"
								className="lg:mt-[-22.5rem] md:mt-[-20rem]  lg:mr-5  top-[-10rem]"
							>
								<div className="md:flex justify-center w-auto h-auto">
									<Image
										src={"/man.png"}
										width={500}
										height={500}
										alt="man in a virtual reality"
										className="filter grayscale -hue-rotate-180 relative z-0 object-contain w-auto h-auto"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* medium and desktop design ends here */}

				{/* mobile screen design */}
				<div className="md:hidden">
					<div>
						<div
							data-aos="fade-right"
							className="flex py-6 text-[1.1rem] italic text-center justify-center font-bold"
						>
							<Typewriter
								words={["Igniting a Revolution in HR Innovation"]}
								loop={0}
								cursor
								cursorStyle="_"
								typeSpeed={70}
								deleteSpeed={50}
								delaySpeed={1000}
							/>
						</div>
						<div data-aos="fade-left" className="absolute">
							<Image
								src="/Vector 4.png"
								width={100}
								height={100}
								alt="pink line"
								className="relative w-[7rem] top-[-1.5rem] left-[14rem]"
							/>
						</div>
					</div>

					{/* background beautifications */}

					<div className="">
						<div className="absolute top-[4rem] left-[-6rem]">
							<Image
								src="/purpleLens.png"
								width={500}
								height={500}
								alt="purple lens"
								className="blur opacity-50 z-0 w-auto h-auto"
							/>
						</div>

						<div className="absolute top-[8.5rem] left-[9rem]">
							<Image
								src={"/star.png"}
								width={12}
								height={12}
								alt="star image"
							/>
						</div>

						<div className="absolute left-[22rem]">
							<Image
								src={"/stargray.png"}
								width={8}
								height={8}
								alt="star image"
							/>
						</div>
						<div className="hidden absolute top-[8.5rem] left-[22rem]">
							<Image
								src={"/stargray.png"}
								width={15}
								height={15}
								alt="star image"
							/>
						</div>

						<div className="md:hidden absolute top-[21.5rem] left-[22rem]">
							<Image
								src={"/stargray.png"}
								width={8}
								height={8}
								alt="star image"
							/>
						</div>
						<div className="hidden md:block absolute md:top-[33rem] md:left-[32rem]">
							<Image
								src={"/stargray.png"}
								width={15}
								height={15}
								alt="star image"
							/>
						</div>
					</div>

					{/* main content */}
					<div className="md:flex text-white">
						<div className="md:ml-28">
							<div className="justify-center mt-5">
								<div data-aos="flip-left" className="absolute">
									<Image
										src={"/Creative 1.png"}
										width={20}
										height={20}
										alt="idea"
										className="relative top-[-1.2rem] left-[17rem]"
									/>
								</div>
								<div
									data-aos="fade-up-right"
									className="text-4xl font font-bold flex justify-center"
								>
									getlinkedTech
								</div>
								<div className="flex items-center justify-center">
									<div
										data-aos="fade-up-right"
										className="text-4xl font font-bold"
									>
										Hackathon
									</div>
									<div
										data-aos="fade-up-right"
										className="text-4xl font font-bold"
									>
										1.0
									</div>
									<div data-aos="fade-up-left">
										<Image
											src={"/chain.png"}
											width={40}
											height={40}
											alt="chain"
											className="w-auto h-auto"
										/>
									</div>
									<div data-aos="fade-up-left">
										<Image
											src={"/banger.png"}
											width={40}
											height={40}
											alt="banger"
										/>
									</div>
								</div>
							</div>

							<div data-aos="fade-up" className="text-center px-10 mt-2">
								Participate in getlinked tech Hackathon 2023 stand a chance to
								win a Big prize
							</div>
							<div
								data-aos="fade-up"
								className="text-center mt-[1.6rem] justify-center md:text-start z-10 relative"
							>
								<Link href={"/register"}>
									<Button text={"Register"} />
								</Link>
							</div>
							<div
								data-aos="fade-up"
								className="flex py-[1.6rem] time justify-center text-center md:justify-normal gap-4"
							>
								<div className="text-6xl">
									00
									<span className="text-sm">H</span>
								</div>
								<div className="text-6xl">
									00
									<span className="text-sm">M</span>
								</div>
								<div className="text-6xl">
									00
									<span className="text-sm">S</span>
								</div>
							</div>

							<div data-aos="fade-right" className="absolute z-10">
								<Image
									src="/Image 1.png"
									width={350}
									height={350}
									alt="virtual reality"
									className="relative top-[0.5rem] z-10"
								/>
							</div>
						</div>

						{/* here */}
						<div data-aos="fade-left" className="mt-[1.7rem] z-0">
							<div className="mt-5">
								<div className="flex justify-center">
									<Image
										src={"/man.png"}
										width={500}
										height={500}
										alt="man in a virtual reality"
										className="filter grayscale -hue-rotate-180 relative z-0"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Landing;
