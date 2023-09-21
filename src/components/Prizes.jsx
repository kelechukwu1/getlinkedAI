import Image from "next/image";
const Prizes = () => {
	return (
		<>
			<div className="bg-custom-color2">
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
