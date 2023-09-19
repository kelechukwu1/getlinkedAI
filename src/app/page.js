import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="text-white">
			<div className="md:flex">
				<div>
					<div className="py-6 px-7 text-xl font-bold">
						Igniting a Revolution in HR Innovation
					</div>
					<div className="text-center py-3 px-7 text-4xl font-bold">
						getlinkedTech
					</div>
					<div className="text-center px-7 text-4xl font-bold">
						Hackathon <span className="text-color-2">1.0🔗💥</span>
					</div>
					<div className="text-center px-16 mt-2">
						Participate in getlinked tech Hackathon 2023 stand a chance to win a
						Big prize
					</div>
					<div className="px-6 pt-2 text-center mt-5">
						<Link
							href="/register"
							className="text-white text-xl bg-gradient-to-r from-pink-500 via-purple-500 py-5 px-16 text-center rounded-md hover:bg-pink-500 transition-all duration-500 "
						>
							Register
						</Link>
					</div>
					<div className="flex pt-7 justify-center text-center">
						<Image
							src={"/time.png"}
							width={300}
							height={300}
							alt="countdown time"
						/>
					</div>
				</div>
				<div className="mt-5">
					<div className="md:flex justify-center">
						<Image
							src={"/man.png"}
							width={500}
							height={500}
							alt="man in a virtual reality"
						/>
					</div>
					{/* <div className="relative top-[-390px] left-[-6px] flex justify-center">
						<Image src={"/image 1.png"} width={370} height={350} />
					</div> */}
				</div>
			</div>

			<div className="md:flex mx-10 mt-10">
				<div className="flex justify-center">
					<Image src={"/idea.png"} width={300} height={300} alt="big idea" />
				</div>
				<div className="text-center my-5">
					<div className="text-2xl font-bold mt-5">
						Introduction to getlinked
					</div>
					<div className="text-color-2 text-2xl font-bold">
						tech Hackathon1.0
					</div>
					<div>
						Our tech hackathon is a melting pot of visionaries, and its purpose
						is as clear as day: to shape the future. Whether you're a coding
						genius, a design maverick, or a concept wizard, you'll have the
						chance to transform your ideas into reality. Solving real-world
						problems, pushing the boundaries of technology, and creating
						solutions that can change the world, that's what we're all about!{" "}
					</div>
				</div>
			</div>

			<div className="md:flex mx-10 mt-10">
				<div className="flex justify-center">
					<Image
						src={"/rulesImg.png"}
						width={300}
						height={300}
						alt="woman reading rules and regulations"
					/>
				</div>
				<div className="text-center my-5">
					<div className="text-2xl font-bold">
						Rules and <span className="text-color-2">Guidelines</span>
					</div>
					<div>
						Rules and Guidelines Our tech hackathon is a melting pot of
						visionaries, and its purpose is as clear as day: to shape the
						future. Whether you're a coding genius, a design maverick, or a
						concept wizard, you'll have the chance to transform your ideas into
						reality. Solving real-world problems, pushing the boundaries of
						technology, and creating solutions that can change the world, that's
						what we're all about!
					</div>
				</div>
			</div>

			<div className="md:flex mx-10 mt-10">
				<div className="flex justify-center">
					<Image src={"/judges.png"} width={300} height={300} alt="judges" />
				</div>
				<div className="text-center my-5">
					<div className="text-2xl font-bold">
						Judging Criteria{" "}
						<span className="text-color-2">Key attributes</span>
					</div>
					<div className="mt-10">
						<span className="text-pink-500 font-bold">
							Innovation and Creativity:
						</span>
						Evaluate the uniqueness and creativity of the solution. Consider
						whether it addresses a real-world problem in a novel way or
						introduces innovative features.
					</div>
					<div className="pt-10">
						<span className="text-pink-500 font-bold"> Functionality:</span>
						Assess how well the solution works. Does it perform its intended
						functions effectively and without major issues? Judges would
						consider the completeness and robustness of the solution.
					</div>
					<div className="">
						<span className="text-pink-500 font-bold">
							{" "}
							Impact and Relevance:
						</span>
						Determine the potential impact of the solution in the real world.
						Does it address a significant problem, and is it relevant to the
						target audience? Judges would assess the potential social, economic,
						or environmental benefits.
					</div>
					<div>
						<span className="text-pink-500 font-bold">
							Technical Complexity:
						</span>
						Evaluate the technical sophistication of the solution. Judges would
						consider the complexity of the code, the use of advanced
						technologies or algorithms, and the scalability of the solution.
					</div>
					<div>
						<span className="text-pink-500 font-bold">
							Adherence to Hackathon Rules:
						</span>
						Adherence to Hackathon Rules: Judges will Ensure that the team
						adhered to the rules and guidelines of the hackathon, including
						deadlines, use of specific technologies or APIs, and any other
						competition-specific requirements.
					</div>
					<div className="px-6 pt-2 mb-20 text-center mt-5">
						<Link
							href="/register"
							className="text-white text-xl bg-gradient-to-r from-pink-500 via-purple-500 py-4 px-12 text-center rounded-md hover:bg-pink-500 transition-all duration-500 "
						>
							Read More
						</Link>
					</div>
				</div>
			</div>

			<div>
				<div>
					Frequently Ask<span className="text-color-2">Question</span>
				</div>
			</div>
		</main>
	);
}
