import Image from "next/image";
import Button from "./Button";

const Landing = () => {
	return (
		<>
			<div>
				<div className="flex md:justify-end md:mr-28 py-6 px-7 text-xl font-bold">
					Igniting a Revolution in HR Innovation
				</div>
				<div className="absolute">
					<Image
						src="/vector 4.png"
						width={100}
						height={100}
						alt="pink line"
						className="relative w-[8.5rem] top-[-1.5rem] md:left-[67rem] left-[16rem]"
					/>
				</div>
			</div>

			{/* background beautifications */}
			<div>
				<div className="absolute top-[4rem] md:top-[3rem] left-[-6rem] md:left-[-1rem]">
					<Image
						src="/purpleLens.png"
						width={500}
						height={500}
						alt="purple lens"
						className="blur opacity-50 z-0"
					/>
				</div>
			</div>

			{/* main content */}
			<div className="md:flex text-white">
				<div className="md:ml-28">
					<div className="flex justify-center md:justify-start">
						<Image
							src="/title.png"
							width={300}
							height={300}
							alt="title"
							className="md:w-[40rem]"
						/>
					</div>

					{/* <div className="text-center py-3 px-7 text-4xl font-bold mt-10">
						getlinkedTech
					</div>
					<div className="text-center px-7 text-4xl font-bold">
						Hackathon <span className="text-color-2">1.0🔗💥</span>
					</div> */}
					<div className="text-center px-16 md:px-0 mt-2 md:text-start md:mr-[6rem]">
						Participate in getlinked tech Hackathon 2023 stand a chance to win a
						Big prize
					</div>
					<div className="text-center mt-10 justify-center md:text-start z-10 relative">
						<Button text={"Register"} />
					</div>
					<div className="flex py-[1.6rem] justify-center text-center md:justify-normal md:mt-10">
						<Image
							src={"/time.png"}
							width={300}
							height={300}
							alt="countdown time"
						/>
					</div>

					<div className="md:hidden absolute md:top-[10rem] md:left-[45rem]">
						<Image
							src="/image 1.png"
							width={350}
							height={350}
							alt="virtual reality"
							className=" md:w-[27rem] md:h-[27rem] relative top-[1.7rem] left-[2.3rem] z-10"
						/>
					</div>
				</div>
				<div>
					<div className="md:hidden mt-5 md:mt-24 md:w-[60rem]">
						<div className="md:flex justify-center">
							<Image
								src={"/man.png"}
								width={500}
								height={500}
								alt="man in a virtual reality"
								className="filter grayscale -hue-rotate-180 relative z-0"
							/>
						</div>
					</div>
					<div className="absolute  hidden md:block md:h-[27rem]">
						<Image
							src="/metrix.png"
							width={700}
							height={700}
							alt="metrix"
							className="relative md:top-[-5rem]"
						/>
					</div>

					<div className="hidden md:block absolute z-10">
						<Image
							src="/image 1.png"
							width={400}
							height={400}
							alt="virtual reality"
							className="relative md:top-[2rem] md:left-[8rem] top-[-90rem] left-[-5rem]"
						/>
					</div>

					<div className="mt-6 hidden md:block">
						<div className="md:flex justify-center absolute">
							<Image
								src={"/man.png"}
								width={510}
								height={510}
								alt="man in a virtual reality"
								className="filter grayscale -hue-rotate-180 relative md:top-[0rem] top-[17rem] left-[0rem]"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Landing;
