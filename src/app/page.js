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

			{/* introduction to getlinked tech hackathon section*/}

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

			{/* rules and guidlines section*/}

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

			{/* judging Criteria key atributes section*/}

			<div className="md:flex mx-10 mt-10">
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

			{/* Faq section*/}

			<div className="mx-10 text-sm">
				<div className="md:flex w-full">
					<div className="w-full">
						<div className="text-center">
							<div className="text-2xl font-bold text-center">
								Frequently Ask
							</div>
							<span className="text-2xl font-bold text-color-2 text-center">
								Question
							</span>
						</div>
						<div className="text-center">
							We got answers to the questions that you might
							<div>
								want to ask about
								<span className="font-bold"> getlinked Hackathon 1.0</span>
							</div>
						</div>
						<div>
							<div className="flex">
								<div className="my-5">
									Can I work on a project I started before the hackathon?
								</div>
								<div className="text-color-2 mt-9 text-lg">+</div>
							</div>
							<div className="w-full h-5 bg-text-color-2">
								<hr className="bg-text-color-2 text-color-2" />
							</div>
						</div>

						<div>
							<div className="flex">
								<div className="my-5">
									What happens if I need help during the hackathon?{" "}
								</div>
								<div className="text-color-2 mt-9 text-lg">+</div>
							</div>
							<div className="w-full h-5 bg-text-color-2">
								<hr className="bg-text-color-2 text-color-2" />
							</div>
						</div>

						<div>
							<div className="flex">
								<div className="my-5">
									What happens if I don't have an idea for a project?{" "}
								</div>
								<div className="text-color-2 mt-9 text-lg">+</div>
							</div>
							<div className="w-full h-5 bg-text-color-2">
								<hr className="bg-text-color-2 text-color-2" />
							</div>
						</div>

						<div>
							<div className="flex">
								<div className="my-5">
									Can I join a team or do I have to come with one?{" "}
								</div>
								<div className="text-color-2 mt-9 text-lg">+</div>
							</div>
							<div className="w-full h-5 bg-text-color-2">
								<hr className="bg-text-color-2 text-color-2" />
							</div>
						</div>

						<div>
							<div className="flex">
								<div className="my-5">
									What happens after the hackathon ends?{" "}
								</div>
								<div className="text-color-2 mt-9 text-lg">+</div>
							</div>
							<div className="w-full h-5 bg-text-color-2">
								<hr className="bg-text-color-2 text-color-2" />
							</div>
						</div>

						<div>
							<div className="flex">
								<div className="my-5">
									Can I work on a project I started before the hackathon?{" "}
								</div>
								<div className="text-color-2 mt-9 text-lg">+</div>
							</div>
							<div className="w-full h-5 bg-text-color-2">
								<hr className="bg-text-color-2 text-color-2" />
							</div>
						</div>
					</div>
					<div className="w-full justify-center items-center mt-10">
						<div className="flex items-center justify-evenly mx-10 ml-[-2.5rem]">
							<div>
								<Image src={"/questionMark.png"} height={20} width={20} />
							</div>
							<div>
								<Image src={"/questionMark.png"} height={30} width={30} />
							</div>
							<div>
								<Image src={"/questionMark.png"} height={20} width={20} />
							</div>
						</div>
						<Image
							className="flex w-full justify-center items-center"
							src={"/think.png"}
							width={300}
							height={300}
							alt="thinking man"
						/>
					</div>
				</div>
			</div>
			{/* timeline section*/}
			<div className="mt-10 mx-10">
				<div className="font-bold text-2xl text-center">Timeline</div>
				<div className="text-center mt-5">
					Here is the breakdown of the time we anticipate using for the upcoming
					event.
				</div>

				<div className="mt-5 space-y-10">
					<div>
						<div className="flex">
							<div className="h-28 w-2 text-color-2 bg-gradient-to-b from-pink-500 via-purple-500"></div>
							<div className="ml-5">
								<div className="text-color-2 font-bold">
									Hackathon Announcement
								</div>
								<div>
									The getlinked tech hackathon 1.0 formally announced to the
									geneal public and teams begin to get ready to register
								</div>
							</div>
						</div>
						<div className="flex items-center ml-[-0.9em]">
							<div className="bg-gradient-to-r from-pink-500 via-purple-500 rounded-full py-1 px-3">
								1
							</div>
							<div className="text-color-2 ml-2">November 18, 2023</div>
						</div>
					</div>

					<div>
						<div className="flex">
							<div className="h-28 w-2 text-color-2 bg-gradient-to-b from-pink-500 via-purple-500"></div>
							<div className="ml-5">
								<div className="text-color-2 font-bold">
									Hackathon Announcement
								</div>
								<div>
									The getlinked tech hackathon 1.0 formally announced to the
									geneal public and teams begin to get ready to register
								</div>
							</div>
						</div>
						<div className="flex items-center ml-[-0.9em]">
							<div className="bg-gradient-to-r from-pink-500 via-purple-500 rounded-full py-1 px-3">
								2
							</div>
							<div className="text-color-2 ml-2">November 18, 2023</div>
						</div>
					</div>

					<div>
						<div className="flex">
							<div className="h-28 w-2 text-color-2 bg-gradient-to-b from-pink-500 via-purple-500"></div>
							<div className="ml-5">
								<div className="text-color-2 font-bold">
									Hackathon Announcement
								</div>
								<div>
									The getlinked tech hackathon 1.0 formally announced to the
									geneal public and teams begin to get ready to register
								</div>
							</div>
						</div>
						<div className="flex items-center ml-[-0.9em]">
							<div className="bg-gradient-to-r from-pink-500 via-purple-500 rounded-full py-1 px-3">
								3
							</div>
							<div className="text-color-2 ml-2">November 18, 2023</div>
						</div>
					</div>

					<div>
						<div className="flex">
							<div className="h-28 w-2 text-color-2 bg-gradient-to-b from-pink-500 via-purple-500"></div>
							<div className="ml-5">
								<div className="text-color-2 font-bold">
									Hackathon Announcement
								</div>
								<div>
									The getlinked tech hackathon 1.0 formally announced to the
									geneal public and teams begin to get ready to register
								</div>
							</div>
						</div>
						<div className="flex items-center ml-[-0.9em]">
							<div className="bg-gradient-to-r from-pink-500 via-purple-500 rounded-full py-1 px-3">
								4
							</div>
							<div className="text-color-2 ml-2">November 18, 2023</div>
						</div>
					</div>

					<div>
						<div className="flex">
							<div className="h-28 w-2 text-color-2 bg-gradient-to-b from-pink-500 via-purple-500"></div>
							<div className="ml-5">
								<div className="text-color-2 font-bold">
									Hackathon Announcement
								</div>
								<div>
									The getlinked tech hackathon 1.0 formally announced to the
									geneal public and teams begin to get ready to register
								</div>
							</div>
						</div>
						<div className="flex items-center ml-[-0.9em]">
							<div className="bg-gradient-to-r from-pink-500 via-purple-500 rounded-full py-1 px-3">
								5
							</div>
							<div className="text-color-2 ml-2">November 18, 2023</div>
						</div>
					</div>

					<div>
						<div className="flex">
							<div className="h-28 w-2 text-color-2 bg-gradient-to-b from-pink-500 via-purple-500"></div>
							<div className="ml-5">
								<div className="text-color-2 font-bold">
									Hackathon Announcement
								</div>
								<div>
									The getlinked tech hackathon 1.0 formally announced to the
									geneal public and teams begin to get ready to register
								</div>
							</div>
						</div>
						<div className="flex items-center ml-[-0.9em]">
							<div className="bg-gradient-to-r from-pink-500 via-purple-500 rounded-full py-1 px-3">
								6
							</div>
							<div className="text-color-2 ml-2">November 18, 2023</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mx-10 my-20">
				<div className="text-center">
					<div className="text-2xl font-bold my-5">Partners and Sponsors</div>
					<div className="mb-5">
						Getlinked Hackathon 1.0 is honored to have the following major
						companies as its partners and sponsors{" "}
					</div>
				</div>
				<div className="border-2 border-purple-500 rounded-lg mb-5 flex justify-center">
					<Image
						src={"/sponsors.png"}
						width={300}
						height={300}
						alt="sponsors"
						className="p-5"
					/>
				</div>
			</div>

			<div className="mx-10 my-20">
				<div className="text-center">
					<div my-5>
						<div className="text-2xl font-bold">Privacy Policy and</div>
						<span className="text-color-2 text-2xl font-bold">Terms</span>
					</div>
					<div className="mb-5">
						Getlinked Hackathon 1.0 is honored to have the following major
						companies as its partners and sponsors{" "}
					</div>
				</div>
				<div className="border-2 border-purple-500 rounded-lg mb-5 flex justify-center">
					<Image
						src={"/sponsors.png"}
						width={300}
						height={300}
						alt="sponsors"
						className="p-5"
					/>
				</div>
			</div>
		</main>
	);
}
