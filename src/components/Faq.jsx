import Image from "next/image";

const Faq = () => {
	return (
		<div>
			<div className="mx-10 text-sm md:mx-auto text-white md:justify-center md:items-center md:w-full md:my-24 my-20">
				<div className="md:flex w-full md:w-full md:text-start md:justify-center md:items-center md:space-x-20">
					<div className="w-[21.5rem] md:pl-52 md:w-[50rem] ">
						<div className="text-center md:text-start mb-6">
							<div className="text-2xl font-bold text-center mb-2 md:text-start">
								Frequently Ask
							</div>
							<span className="text-2xl font-bold text-color-2 text-center">
								Question
							</span>
						</div>
						<div className="text-center mb-6 md:text-start">
							We got answers to the questions that you might
							<div>
								want to ask about
								<span className="font-bold"> getlinked Hackathon 1.0</span>
							</div>
						</div>
						<div className="md:space-y-[-2rem]">
							<div>
								<div className="flex text-sm justify-between">
									<div className="my-5">
										Can I work on a project I started before the hackathon?
									</div>
									<div className="text-color-2 mt-5 md:mt-5 text-lg">+</div>
								</div>
								<div className="w-full h-5 bg-text-color-2">
									<hr className="bg-text-color-2 text-color-2" />
								</div>
							</div>

							<div>
								<div className="flex text-sm justify-between">
									<div className="my-5">
										What happens if I need help during the hackathon?{" "}
									</div>
									<div className="text-color-2 mt-5 text-lg">+</div>
								</div>
								<div className="w-full h-5 bg-text-color-2">
									<hr className="bg-text-color-2 text-color-2" />
								</div>
							</div>

							<div>
								<div className="flex text-sm justify-between">
									<div className="my-5">
										What happens if I don't have an idea for a project?{" "}
									</div>
									<div className="text-color-2 mt-5 text-lg">+</div>
								</div>
								<div className="w-full h-5 bg-text-color-2">
									<hr className="bg-text-color-2 text-color-2" />
								</div>
							</div>

							<div>
								<div className="flex text-sm justify-between">
									<div className="my-5">
										Can I join a team or do I have to come with one?{" "}
									</div>
									<div className="text-color-2 mt-5 text-lg">+</div>
								</div>
								<div className="w-full h-5 bg-text-color-2">
									<hr className="bg-text-color-2 text-color-2" />
								</div>
							</div>

							<div>
								<div className="flex text-sm justify-between">
									<div className="my-5">
										What happens after the hackathon ends?{" "}
									</div>
									<div className="text-color-2 mt-5 text-lg">+</div>
								</div>
								<div className="w-full h-5 bg-text-color-2">
									<hr className="bg-text-color-2 text-color-2" />
								</div>
							</div>

							<div>
								<div className="flex text-sm justify-between">
									<div className="my-5">
										Can I work on a project I started before the hackathon?{" "}
									</div>
									<div className="text-color-2 mt-5 text-lg">+</div>
								</div>
								<div className="w-full h-5 bg-text-color-2">
									<hr className="bg-text-color-2 text-color-2" />
								</div>
							</div>
						</div>
					</div>
					<div className="w-full justify-center items-center mt-10 md:w-full">
						<div className="md:relative flex items-center justify-evenly md:left-[-7rem] md:top-3">
							<div className="absolute">
								<Image
									src={"/questionMark.png"}
									height={20}
									width={20}
									className="relative top-[0.5rem] left-[-8rem] md:left-[-7rem]"
								/>
							</div>
							<div className="absolute">
								<Image
									src={"/questionMark.png"}
									height={30}
									width={30}
									className="relative top-[-1rem]  left-[-3rem] md:left-0"
								/>
							</div>
							<div className="absolute">
								<Image
									src={"/questionMark.png"}
									height={20}
									width={20}
									className="relative top-[0.5rem] right-[-2rem] md:right-[-7rem]"
								/>
							</div>
						</div>
						<div className="md:w-full md:pl-16">
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
