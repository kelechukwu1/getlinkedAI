import Image from "next/image";

const Faq = () => {
	return (
		<div>
			<div className="mx-10 text-sm my-10">
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
		</div>
	);
};

export default Faq;
