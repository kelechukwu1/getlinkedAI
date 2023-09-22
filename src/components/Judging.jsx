import Image from "next/image";
import Button from "./Button";
const Judging = () => {
	return (
		<>
			<div className="md:flex mx-10 my-20 text-white  lg:mx-20 md:justify-center md:items-center md:my-24 relative">
				{/* background beautifications */}
				<div className="absolute blur top-[6rem] md:top-[20rem] left-[-5rem] opacity-50 z-10">
					<Image
						src="/purpleLens.png"
						width={500}
						height={500}
						alt="purple frame"
					/>
				</div>

				<div className="absolute">
					<div className="relative top-[-3rem] md:top[-3rem] md:left-[-25rem] left-[9rem]">
						<Image
							src={"/star pu.png"}
							width={20}
							height={20}
							alt="star image"
						/>
					</div>
					<div className=" md:hidden relative top-[8rem] left-[11rem]">
						<Image
							src={"/stargray.png"}
							width={15}
							height={15}
							alt="star image"
						/>
					</div>
					<div className="md:hidden relative top-[65rem] left-[17rem] z-10">
						<Image src={"/star.png"} width={20} height={20} alt="star image" />
					</div>
				</div>
				{/* background beautification ends here */}
				<div className="flex justify-center md:w-full z-0">
					<Image src={"/judges.png"} width={500} height={500} alt="judges" />
				</div>
				<div className="md:mx-20 text-center my-5 justify-center items-center md:w-full md:text-start lg:pr-32">
					<div className="text-2xl font-bold">
						Judging Criteria{" "}
						<span className="text-color-2">Key attributes</span>
					</div>
					<div className="mt-5 text-sm">
						<span className="text-pink-500 font-bold">
							Innovation and Creativity:
						</span>
						Evaluate the uniqueness and creativity of the solution. Consider
						whether it addresses a real-world problem in a novel way or
						introduces innovative features.
					</div>
					<div className="pt-5 text-sm">
						<span className="text-pink-500 font-bold"> Functionality:</span>
						Assess how well the solution works. Does it perform its intended
						functions effectively and without major issues? Judges would
						consider the completeness and robustness of the solution.
					</div>
					<div className="mt-5 text-sm">
						<span className="text-pink-500 font-bold">
							{" "}
							Impact and Relevance:
						</span>
						Determine the potential impact of the solution in the real world.
						Does it address a significant problem, and is it relevant to the
						target audience? Judges would assess the potential social, economic,
						or environmental benefits.
					</div>
					<div className="mt-5 text-sm">
						<span className="text-pink-500 font-bold">
							Technical Complexity:
						</span>
						Evaluate the technical sophistication of the solution. Judges would
						consider the complexity of the code, the use of advanced
						technologies or algorithms, and the scalability of the solution.
					</div>
					<div className="mt-5 text-sm">
						<span className="text-pink-500 font-bold">
							Adherence to Hackathon Rules:
						</span>
						Adherence to Hackathon Rules: Judges will Ensure that the team
						adhered to the rules and guidelines of the hackathon, including
						deadlines, use of specific technologies or APIs, and any other
						competition-specific requirements.
					</div>

					{/* <div className="absolute">
						<Image
							src="/purpleLens.png"
							width={500}
							height={500}
							alt="reward cup"
							className="relative top-[-15rem] left-[7rem] opacity-40"
						/>
					</div> */}
					<div className="mt-10 relative z-10">
						<Button text={"Read More"} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Judging;
