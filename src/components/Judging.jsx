import Image from "next/image";
import Link from "next/link";
const Judging = () => {
	return (
		<>
			<div className="md:flex mx-10 mt-10 text-white">
				<div className="absolute">
					<Image
						src="/purpleLens.png"
						width={500}
						height={500}
						alt="reward cup"
						className="relative top-[6rem] left-[-5rem] opacity-50"
					/>
				</div>
				<div className="flex justify-center">
					<Image src={"/judges.png"} width={300} height={300} alt="judges" />
				</div>
				<div className="text-center my-5">
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

					<div className="absolute">
						<Image
							src="/purpleLens.png"
							width={500}
							height={500}
							alt="reward cup"
							className="relative top-[-15rem] left-[7rem] opacity-40"
						/>
					</div>
					<div className="px-6 pt-2 mb-20 text-center mt-10">
						<Link
							href="/register"
							className="text-white text-xl bg-gradient-to-r from-pink-500 via-purple-500 py-4 px-12 text-center rounded-md hover:bg-pink-500 transition-all duration-500 "
						>
							Read More
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Judging;
