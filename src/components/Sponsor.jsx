import Image from "next/image";

const Sponsor = () => {
	return (
		<>
			<div className="mx-10 my-20 text-white">
				<div className="text-center md:px-[24rem]">
					<div className="text-2xl font-bold my-5">Partners and Sponsors</div>
					<div className="mb-5">
						Getlinked Hackathon 1.0 is honored to have the following major
						companies as its partners and sponsors{" "}
					</div>
				</div>
				<div className="border-2 border-purple-500 rounded-lg mb-5 flex justify-center md:mt-10 lg:mx-[10rem] md:h-[25rem]">
					<Image
						src={"/sponsors.png"}
						width={300}
						height={300}
						alt="sponsors"
						className="p-5 md:p-0 md:w-[60rem]"
					/>
				</div>
			</div>
		</>
	);
};

export default Sponsor;
