import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import BorderButton from "./Button";

const Landing = () => {
	return (
		<>
			<div>
				{/* medium and desktop design */}
				<div className="hidden md:block">
					<div className="flex flex-col items-end w-full">
						<div className="py-6 text-xl font-bold px-7">
							Igniting a Revolution in HR Innovation
						</div>
						<div className="md:mt-[-1.5rem] md:mr-[1.7rem]">
							<Image
								src="/vector 4.png"
								width={100}
								height={100}
								alt="pink line"
								className="md:w-[8.5rem] lg:w-[8.8rem]"
							/>
						</div>
					</div>
					{/* <div className="flex flex-col items-end w-full">
						<Image src="/groupName.png" width={400} height={400} alt="text" />
					</div> */}

					{/* background beautifications */}
					<div className="">
						<div className="absolute top-[4rem] md:top-[3rem] left-[-6rem] md:left-[-1rem]">
							<Image
								src="/purpleLens.png"
								width={500}
								height={500}
								alt="purple lens"
								className="z-0 opacity-50 blur"
							/>
						</div>

						<div className="absolute top-[8.5rem] md:top-[8.5rem] left-[9rem]  md:left-[11rem]">
							<Image
								src={"/star.png"}
								width={12}
								height={12}
								alt="star image"
							/>
						</div>

						<div className="md:hidden absolute md:top-[12rem] left-[22rem]">
							<Image
								src={"/stargray.png"}
								width={8}
								height={8}
								alt="star image"
							/>
						</div>
						<div className="hidden md:block absolute top-[8.5rem] md:top-[12rem] left-[22rem] md:left-[50rem]">
							<Image
								src={"/stargray.png"}
								width={15}
								height={15}
								alt="star image"
							/>
						</div>

						<div className="md:hidden absolute top-[21.5rem] left-[22rem]">
							<Image
								src={"/stargray.png"}
								width={8}
								height={8}
								alt="star image"
							/>
						</div>
						<div className="hidden md:block absolute md:top-[33rem] md:left-[32rem]">
							<Image
								src={"/stargray.png"}
								width={15}
								height={15}
								alt="star image"
							/>
						</div>
					</div>
					{/* background styles ends here */}

					{/* main content */}
					<div className="relative text-white md:flex">
						<div className="md:ml-28">
							<div className="flex justify-center md:justify-start">
								<div className="py-3 mt-10 text-4xl font-bold text-center px-7">
									getlinkedTech
								</div>
								<div className="text-4xl font-bold text-center px-7">
									Hackathon <span className="text-color-2">1.0🔗💥</span>
								</div>
							</div>

							{/* <Image
								src="/bigTitle.png"
								width={300}
								height={300}
								alt="title"
								className="md:w-[25rem] lg:w-[40rem]"
							/> */}
							<div className="text-center mt-2 md:text-start md:mr-[10rem]">
								Participate in getlinked tech Hackathon 2023 stand a chance to
								win a Big prize
							</div>
							<div className="relative z-10 justify-center mt-10 text-center md:text-start">
								<Link href={"/register"}>
									<Button text={"Register"} />
								</Link>
							</div>
							<div className="flex py-[1.6rem] justify-center text-center md:justify-normal md:mt-2 gap-4">
								<div className="text-6xl">
									00<span className="text-sm">H</span>
								</div>
								<div className="text-6xl">
									00<span className="text-sm">M</span>
								</div>
								<div className="text-6xl">
									00<span className="text-sm">S</span>
								</div>
							</div>
						</div>

						<div className="absolute md:top-[-20rem] md:left-[30rem]">
							<Image src={"/mann.png"} width={600} height={300} />
						</div>

						{/* <div className="flex flex-col items-center">
							<div className="z-10 mr-5">
								<Image
									src="/image 1.png"
									width={500}
									height={500}
									alt="virtual reality"
									className=" md:w-full md:h-[27rem] z-10"
								/>
							</div>
							<div className="lg:mt-[-22.5rem] md:mt-[-20rem]  lg:mr-5  top-[-10rem]">
								<div className="justify-center md:flex">
									<Image
										src={"/man.png"}
										width={500}
										height={500}
										alt="man in a virtual reality"
										className="relative z-0 filter grayscale -hue-rotate-180"
									/>
								</div>
							</div>
						</div> */}
					</div>
				</div>
				{/* medium and desktop design ends here */}

				{/* mobile screen design */}
				<div className="md:hidden">
					<div>
						<div className="flex py-6 text-xl font-bold px-7">
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
					{/* <div className="flex flex-col items-end mx-7">
						<Image src="/groupName.png" width={400} height={400} alt="text" />
					</div> */}

					{/* background beautifications */}
					<div className="">
						<div className="absolute top-[4rem] md:top-[3rem] left-[-6rem] md:left-[-1rem]">
							<Image
								src="/purpleLens.png"
								width={500}
								height={500}
								alt="purple lens"
								className="z-0 opacity-50 blur"
							/>
						</div>

						<div className="absolute top-[8.5rem] md:top-[8.5rem] left-[9rem]  md:left-[11rem]">
							<Image
								src={"/star.png"}
								width={12}
								height={12}
								alt="star image"
							/>
						</div>

						<div className="md:hidden absolute md:top-[12rem] left-[22rem]">
							<Image
								src={"/stargray.png"}
								width={8}
								height={8}
								alt="star image"
							/>
						</div>
						<div className="hidden md:block absolute top-[8.5rem] md:top-[12rem] left-[22rem] md:left-[50rem]">
							<Image
								src={"/stargray.png"}
								width={15}
								height={15}
								alt="star image"
							/>
						</div>

						<div className="md:hidden absolute top-[21.5rem] left-[22rem]">
							<Image
								src={"/stargray.png"}
								width={8}
								height={8}
								alt="star image"
							/>
						</div>
						<div className="hidden md:block absolute md:top-[33rem] md:left-[32rem]">
							<Image
								src={"/stargray.png"}
								width={15}
								height={15}
								alt="star image"
							/>
						</div>
					</div>

					{/* main content */}

					<div className="text-white md:flex">
						<div className="md:ml-28">
							<div className="">
								<div className="py-3 mt-10 text-4xl font-bold text-center px-7">
									getlinkedTech
								</div>
								<div className="text-4xl font-bold text-center px-7">
									Hackathon <span className="text-color-2">1.0🔗💥</span>
								</div>
							</div>
							{/* </div> */}
							{/* <Image
									src="/title.png"
									width={300}
									height={300}
									alt="title"
									className="md:w-[40rem]"
								/> */}

							<div className="text-center px-16 md:px-0 mt-2 md:text-start md:mr-[6rem]">
								Participate in getlinked tech Hackathon 2023 stand a chance to
								win a Big prize
							</div>
							<div className="relative z-10 justify-center mt-10 text-center md:text-start">
								<Link href={"/register"}>
									<Button text={"Register"} />
								</Link>
							</div>
							{/* <div className="relative z-10 justify-center mt-10 text-center md:text-start">
								<Link href={"/register"}>
									<BorderButton text={"customized"} />
								</Link>
							</div> */}
							<div className="flex py-[1.6rem] justify-center text-center md:justify-normal md:mt-10 gap-4">
								<div className="text-6xl">
									00<span className="text-sm">H</span>
								</div>
								<div className="text-6xl">
									00<span className="text-sm">M</span>
								</div>
								<div className="text-6xl">
									00<span className="text-sm">S</span>
								</div>
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
						<div className="mt-[1.7rem]">
							<div className="md:hidden mt-5 md:mt-24 md:w-[60rem]">
								<div className="justify-center md:flex">
									<Image
										src={"/man.png"}
										width={500}
										height={500}
										alt="man in a virtual reality"
										className="relative z-0 filter grayscale -hue-rotate-180"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Landing;
{
	/* <div className="absolute  hidden md:block md:h-[27rem]">
						<Image
							src="/metrix.png"
							width={700}
							height={700}
							alt="metrix"
							className="relative md:top-[-5rem]"
						/>
					</div>

					<div className="absolute z-10 hidden md:block">
						<Image
							src="/image 1.png"
							width={400}
							height={400}
							alt="virtual reality"
							className="relative md:top-[2rem] md:left-[8rem] top-[-90rem] left-[-5rem]"
						/>
					</div>

					<div className="hidden mt-6 md:block">
						<div className="absolute justify-center md:flex">
							<Image
								src={"/man.png"}
								width={510}
								height={510}
								alt="man in a virtual reality"
								className="filter grayscale -hue-rotate-180 relative md:top-[0rem] top-[17rem] left-[0rem]"
							/>
						</div>
					</div> */
}
