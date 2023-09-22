import Image from "next/image";

const Sponsor = () => {
	return (
		<div className="relative">
			{/* background stars and frames */}
			<div className="absolute top-[9rem] md:top-[7rem] left-[5rem]">
				<Image src={"/sata gra.png"} width={15} height={15} alt="star image" />
			</div>
			<div className="absolute top-[15.5rem] md:top-[29rem] md:left-[23rem] left-[21rem]">
				<Image src={"/star.png"} width={15} height={15} alt="star" />
			</div>

			<div className="absolute top-[-4rem] md:top-[5rem] left-[-3rem]">
				<Image
					src={"/purpleLens.png"}
					width={300}
					height={300}
					alt="purple lens"
					className="blur"
				/>
			</div>
			<div className="absolute top-[18rem] md:top-[28rem] md:left-[45rem] left-[22rem]">
				<Image
					src={"/purpleLens.png"}
					width={300}
					height={300}
					alt="purple lens"
					className="blur"
				/>
			</div>

			{/* background stars and frames end here*/}
			<div className="mx-10 my-20 text-white">
				<div className="text-center lg:px-[24rem] md:px-[10rem]">
					<div className="text-2xl font-bold my-5">Partners and Sponsors</div>
					<div className="mb-5">
						Getlinked Hackathon 1.0 is honored to have the following major
						companies as its partners and sponsors{" "}
					</div>
				</div>
				<div className="border-2 border-purple-500 rounded-lg mb-5 flex justify-center items-center md:mt-10 lg:mx-[10rem] md:h-[25rem] h-[10rem]">
					<Image
						src={"/partner and sponsors.png"}
						width={700}
						height={100}
						alt="sponsors"
						className="h-[5rem] w-[15rem] md:w-[40rem] md:h-[15rem]"
					/>
				</div>
			</div>
		</div>
	);
};

export default Sponsor;
