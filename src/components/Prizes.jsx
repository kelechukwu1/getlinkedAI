import Image from "next/image";
const Prizes = () => {
	return (
		<>
			<div className="bg-custom-color2 py-5">
				<div className="mx-10 my-20 md:flex text-white">
					<div>
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
							className="relative top-[-3.5rem] left-[-5rem]"
						/>
					</div>

					{/* <div className="absolute">
						<Image
							src="/purpleLens.png"
							width={300}
							height={300}
							alt="reward cup"
							className="relative top-[26.5rem] left-[18rem]"
						/>
					</div> */}

					<div className="md:flex justify-center mt-10">
						<div>
							<Image
								src="/rewardCup.png"
								width={500}
								height={500}
								alt="reward cup"
							/>
						</div>
						<div className="mt-10">
							<Image
								src="/rewards.png"
								width={500}
								height={500}
								alt="reward cup"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Prizes;
