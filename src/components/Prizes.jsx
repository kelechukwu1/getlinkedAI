import Image from "next/image";
const Prizes = () => {
	return (
		<>
			<div className="bg-custom-color2 relative">
				{/* background stars and frames */}
				<div className=" md:hidden absolute top-[7rem] left-[19rem]">
					<Image src={"/star pu.png"} width={10} height={10} alt="star image" />
				</div>
				<div className="md:hidden absolute top-[3rem] left-[2rem]">
					<Image src={"/star pu.png"} width={15} height={15} alt="star" />
				</div>

				<div className="md:hidden absolute top-[33rem] left-[3rem]">
					<Image src={"/star.png"} width={15} height={15} alt="purple lens" />
				</div>
				<div className=" md:hidden absolute top-[38rem] left-[22rem]">
					<Image src={"/star.png"} width={15} height={15} alt="star image" />
				</div>
				<div className="md:hidden absolute top-[55rem] left-[17rem]">
					<Image src={"/stargray.png"} width={15} height={15} alt="star" />
				</div>
				<div className=" md:hidden absolute top-[53rem] left-[20rem]">
					<Image
						src={"/purpleLens.png"}
						width={800}
						height={800}
						alt="purple lens"
						className="blur w-[30rem]"
					/>
				</div>

				{/* background stars and frames end here*/}
				<div className="mx-10 pb-20 pt-20 md:pt-0 md:flex text-white md:justify-center md:text-center">
					<div className="md:hidden">
						<div className="text-center">
							<div my-5>
								<div className="text-2xl font-bold">Prizes and</div>
								<span className="text-color-2 text-2xl font-bold">Rewards</span>
							</div>

							<div className="mb-5 mt-5">
								Hghlight of the prizes or rewards for winners and for
								participants.
							</div>
						</div>
					</div>

					<div className="absolute">
						<Image
							src="/purpleLens.png"
							width={300}
							height={300}
							alt="reward cup"
							className="relative blur top-[-3.5rem] md:top-[7rem] md:left-[-10rem] left-[-5rem] w-[30rem] opacity-40"
						/>
					</div>
					<div className="absolute">
						<Image
							src="/rightPurpleLens.png"
							width={200}
							height={200}
							alt="reward cup"
							className="relative blur top-[-3.5rem] md:top-[18rem] md:left-[35.5rem] left-[-5rem]"
						/>
					</div>

					<div className="md:flex justify-center mt-10">
						<div className="md:mt-28">
							<Image
								src="/rewardCup.png"
								width={500}
								height={500}
								alt="reward cup"
							/>
						</div>
						<div className="">
							<div className="pb-10 hidden md:block">
								<div className="text-start ">
									<div>
										<div className="text-2xl font-bold">Prizes and</div>
										<span className="text-color-2 text-2xl font-bold">
											Rewards
										</span>
									</div>

									<div className="mb-5 mt-5">
										Hghlight of the prizes or rewards for winners and for
										participants.
									</div>
								</div>
							</div>

							<div className="mt-10">
								<Image
									src="/rewards.png"
									width={500}
									height={500}
									alt="reward medals"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Prizes;
