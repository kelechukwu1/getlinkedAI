"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";

gsap.registerPlugin(ScrollTrigger);

import Image from "next/image";
import Button from "./Button";
const Judging = () => {
	useEffect(() => {
		const tl = gsap.timeline().from("#textContainer", { opacity: 0, y: 30 });

		ScrollTrigger.create({
			animation: tl,
			trigger: "#container",
			start: "top center",
			end: "top bottom",
			scrub: 1,
		});
	}, []);

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
			<div
				className="relative gap-10 mx-10 my-20 text-white md:grid md:grid-cols-2 lg:mx-20 md:justify-center md:items-center md:my-24"
				id="container"
			>
				{/* background beautifications */}
				<div className="absolute">
					<Image
						src="/purpleLens.png"
						width={500}
						height={500}
						alt="purple frame"
						className="relative blur top-[9rem] left-[-6rem] opacity-30"
					/>
				</div>
				<div className="absolute top-[-1rem] left-[3rem] md:top-[12rem] md:left-[3.5rem] lg:top-[5rem] lg:left-[7.5rem] z-0">
					<Image
						src={"/headCircle.png"}
						width={70}
						height={70}
						alt="star image"
					/>
				</div>

				<div className="absolute top-[9rem] left-[12rem] md:top-[24rem] md:left-[12rem] lg:top-[21rem] lg:left-[19rem]">
					<Image
						src={"/stargray.png"}
						width={20}
						height={20}
						alt="star image"
					/>
				</div>
				<div className="absolute top-[65rem]  md:top-[45rem] md:left-[25rem] left-[20rem] lg:top-[38rem] lg:left-[40rem] ">
					<Image src={"/star.png"} width={20} height={20} alt="star image" />
				</div>
				<div className="absolute top-[-3rem] left-[5rem] md:top-[7rem] md:left-[5rem] lg:top-[2rem] lg:left-[8rem] ">
					<Image
						src={"/sata gra.png"}
						width={20}
						height={20}
						alt="star image"
					/>
				</div>

				{/* background beautification ends here */}

				<div data-aos="fade-left" className="relative z-10 flex justify-center">
					<Image src={"/judges.png"} width={500} height={500} alt="judges" />
				</div>
				<div
					className="items-center justify-center my-5 text-center md:text-start"
					id="textContainer"
				>
					<div data-aos="fade-right" className="text-2xl font font-bold">
						Judging Criteria{" "}
						<span data-aos="fade-left" className="text-color-2">
							Key attributes
						</span>
					</div>
					<div data-aos="fade-up" className="mt-5 text-sm">
						<span className="font-bold text-pink-500">
							Innovation and Creativity:
						</span>
						Evaluate the uniqueness and creativity of the solution. Consider
						whether it addresses a real-world problem in a novel way or
						introduces innovative features.
					</div>
					<div data-aos="fade-up" className="pt-5 text-sm">
						<span className="font-bold text-pink-500"> Functionality:</span>
						Assess how well the solution works. Does it perform its intended
						functions effectively and without major issues? Judges would
						consider the completeness and robustness of the solution.
					</div>
					<div data-aos="fade-up" className="mt-5 text-sm">
						<span className="font-bold text-pink-500">
							{" "}
							Impact and Relevance:
						</span>
						Determine the potential impact of the solution in the real world.
						Does it address a significant problem, and is it relevant to the
						target audience? Judges would assess the potential social, economic,
						or environmental benefits.
					</div>
					<div data-aos="fade-up" className="mt-5 text-sm">
						<span className="font-bold text-pink-500">
							Technical Complexity:
						</span>
						Evaluate the technical sophistication of the solution. Judges would
						consider the complexity of the code, the use of advanced
						technologies or algorithms, and the scalability of the solution.
					</div>
					<div data-aos="fade-up" className="mt-5 text-sm">
						<span className="font-bold text-pink-500">
							Adherence to Hackathon Rules:
						</span>
						Adherence to Hackathon Rules: Judges will Ensure that the team
						adhered to the rules and guidelines of the hackathon, including
						deadlines, use of specific technologies or APIs, and any other
						competition-specific requirements.
					</div>

					<div data-aos="fade-up" className="relative z-10 mt-10">
						<Button text={"Read More"} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Judging;
