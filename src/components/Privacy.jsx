import Image from "next/image";
import Button from "./Button";

const Privacy = () => {
	return (
		<div className="relative">
			{/* background stars and frames */}
			<div className=" md:hidden absolute top-[-2rem] left-[19rem]">
				<Image src={"/stargray.png"} width={10} height={10} alt="star image" />
			</div>
			<div className=" md:hidden absolute top-[11rem] left-[21rem]">
				<Image src={"/star pu.png"} width={20} height={20} alt="star" />
			</div>

			<div className=" md:hidden absolute top-[32rem] left-[-7rem]">
				<Image
					src={"/purpleLens.png"}
					width={300}
					height={300}
					alt="purple lens"
					className="blur"
				/>
			</div>
			<div className=" md:hidden absolute top-[36rem] left-[1rem]">
				<Image src={"/star pu.png"} width={20} height={20} alt="star image" />
			</div>
			<div className=" md:hidden absolute top-[58rem] left-[2rem]">
				<Image src={"/sata gra.png"} width={20} height={20} alt="star" />
			</div>
			<div className=" md:hidden absolute top-[60rem] left-[17rem]">
				<Image src={"/star.png"} width={10} height={10} alt="star" />
			</div>
			{/* <div className=" md:hidden absolute top-[90rem] left-[7rem]">
				<Image src={"/star.png"} width={10} height={10} alt="star" />
			</div>
			<div className=" md:hidden absolute top-[60rem] left-[17rem]">
				<Image src={"/star.png"} width={10} height={10} alt="star" />
			</div> */}
			{/* <div className=" md:hidden absolute top-[-4rem] left-[-3rem]">
				<Image
					src={"/purpleLens.png"}
					width={300}
					height={300}
					alt="purple lens"
					className="blur"
				/>
			</div> */}
			{/* <div className=" md:hidden absolute top-[18rem] left-[22rem]">
				<Image
					src={"/purpleLens.png"}
					width={300}
					height={300}
					alt="purple lens"
					className="blur"
				/>
			</div> */}

			{/* background stars and frames end here*/}

			<div className="mx-10 my-28 md:flex text-white">
				<div className="lg:text-start lg:w-full md:mx-32">
					<div className="text-center lg:text-start">
						<div my-5>
							<div className="text-2xl font-bold">Privacy Policy and</div>
							<span className="text-color-2 text-2xl font-bold">Terms</span>
						</div>
						<div className="text-gray-300 mt-2">
							Last updated on september 12, 2023
						</div>
						<div className="mb-5 mt-7">
							Below are our privacy & policy, which outline a lot of goodies.
							It's our aim to always take of our participant.
						</div>
					</div>
					<div className="border-2 border-purple-500 rounded-lg pb-10 lg:pt-5 lg:px-5 justify-center">
						<div className="m-5 text-center lg:text-start">
							At getlinked tech Hackathon 1.0, we value your privacy and are
							committed to protecting your personal information. This Privacy
							Policy outlines how we collect, use, discose, and safeguard your
							data when you participate in our tech hackathon event. By
							participating in our event, you consent to the practices described
							in this policy.
						</div>
						<div className="m-5">
							<div className="text-color-2 mt-4 font-semibold">
								Licensing Policy
							</div>
							<div className="mt-1 mb-4">
								Here are terms of our Standard License:
							</div>
							<div className="flex">
								<div className="mr-2 mt-2">
									<svg
										width="17"
										height="17"
										viewBox="0 0 17 17"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
										<path
											d="M5 8L7 10.5L13.5 6"
											stroke="white"
											stroke-width="2"
										/>
									</svg>
								</div>
								<div>
									{" "}
									The Standard License grants you a non-exclusive right to
									navigate and register for our event.
								</div>
							</div>
							<div className="flex">
								<div className="mr-2 mt-2">
									<svg
										width="17"
										height="17"
										viewBox="0 0 17 17"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
										<path
											d="M5 8L7 10.5L13.5 6"
											stroke="white"
											stroke-width="2"
										/>
									</svg>
								</div>
								<div>
									You are licensed to use the item available at any free sites,
									for your project development.
								</div>
							</div>
							<div className="flex mt-10 justify-center">
								<Button text={"Read More"} />
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-center mt-10 md:pt-16 pb-10 md:pb-0 lg:mt-5 relative lg:w-full">
					<div className="relative z-10">
						<Image
							src="/privacy.png"
							width={300}
							height={300}
							alt="privacy shield"
							className="lg:h-[25rem]"
						/>
					</div>
					<div className="absolute top-0 left-0 flex justify-center w-full h-full">
						<Image
							src="/privacy1.png"
							width={300}
							height={300}
							alt="privacy padlock guard"
							className="absolute md:h-[30rem] md:w-[20rem] top-28 left-0 lg:left-16 lg:top-44"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Privacy;
