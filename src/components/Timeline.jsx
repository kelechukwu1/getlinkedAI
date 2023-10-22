import Image from "next/image";

const Timeline = () => {
	return (
		<div className="relative">
			{/* background stars and frames */}
			<div className="absolute top-[6.5rem] md:top-[12rem] md:left:-[9rem] left-[4.5rem] lg:left-[26rem]">
				<Image src={"/star pu.png"} width={15} height={15} alt="star image" />
			</div>
			<div
				data-aos="flip-left"
				className="absolute top-[35.5rem] md:top-[40rem] md:left-[45rem] left-[17rem] lg:left-[50rem]"
			>
				<Image src={"/star.png"} width={15} height={15} alt="star image" />
			</div>
			<div className="absolute top-[71rem] md:top-[75rem] md:left-[15rem] left-[2rem]">
				<Image src={"/stargray.png"} width={15} height={15} alt="star image" />
			</div>
			{/* background stars and frames end here*/}

			{/* large sceen design */}
			<div className="my-20 mx-10 text-white hidden md:block">
				<div data-aos="fade-down" className="font-bold text-2xl text-center">
					Timeline
				</div>
				<div
					data-aos="fade-up"
					className="text-center mt-5 mb-10 lg:mx-[27rem] md:mx-[13rem]"
				>
					Here is the breakdown of the time we anticipate using for the upcoming
					event.
				</div>

				<div>
					<div
						data-aos="fade-up"
						className="flex text-center justify-center items-center "
					>
						<div className="h-[6rem] w-1 text-color-2 bg-purple-400"></div>
					</div>
					<div className="flex items-center justify-center ml-[0.5rem] gap-10">
						<div data-aos="fade-right" className="w-[30rem] text-end">
							<div className="text-color-2 font-bold">
								Hackathon Announcement
							</div>
							<div>
								The getlinked tech hackathon 1.0 formally announced to the
								geneal public and teams begin to get ready to register
							</div>
						</div>

						<div
							data-aos="fade-up"
							className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1"
						>
							1
						</div>
						<div
							data-aos="fade-left"
							className="text-color-2 ml-2 w-[30rem] font-bold"
						>
							November 18, 2023
						</div>
					</div>
				</div>

				<div>
					<div
						data-aos="fade-up"
						className="flex text-center justify-center items-center "
					>
						<div className="h-[6rem] w-1 text-color-2 bg-purple-400"></div>
					</div>
					<div className="flex items-center justify-center gap-10">
						<div
							data-aos="fade-right"
							className="text-color-2 text-end w-[30rem] font-bold"
						>
							November 18, 2023
						</div>

						<div
							data-aos="fade-up"
							className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1"
						>
							2
						</div>

						<div data-aos="fade-left" className="w-[30rem] text-start">
							<div className="text-color-2 font-bold">
								Teams Registration begins
							</div>
							<div>
								Interested teams can now show their interest in the getlinked
								tech hackathon 1.0 by proceeding to register
							</div>
						</div>
					</div>
				</div>

				<div>
					<div
						data-aos="fade-up"
						className="flex text-center justify-center items-center "
					>
						<div className="h-[6rem] w-1 text-color-2 bg-purple-400"></div>
					</div>
					<div className="flex items-center justify-center ml-[0.5rem] gap-10">
						<div data-aos="fade-right" className="w-[30rem] text-end">
							<div className="text-color-2 font-bold">
								Teams Registration ends
							</div>
							<div>
								Interested Participants are no longer Allowed to register
							</div>
						</div>

						<div
							data-aos="fade-up"
							className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1"
						>
							3
						</div>
						<div
							data-aos="fade-left"
							className="text-color-2 ml-2 w-[30rem] font-bold"
						>
							November 18, 2023
						</div>
					</div>
				</div>

				<div>
					<div
						data-aos="fade-up"
						className="flex text-center justify-center items-center "
					>
						<div className="h-[6rem] w-1 text-color-2 bg-purple-400"></div>
					</div>
					<div className="flex items-center justify-center gap-10">
						<div
							data-aos="fade-right"
							className="text-color-2 text-end w-[30rem] font-bold"
						>
							November 18, 2023
						</div>

						<div
							data-aos="fade-up"
							className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1"
						>
							4
						</div>

						<div data-aos="fade-left" className="w-[30rem] text-start">
							<div className="text-color-2 font-bold">
								Announcement of the accepted teams and ideas
							</div>
							<div>
								All teams whom idea has been accepted into getlinked tech
								hackathon 1.0 2023 are formally announced
							</div>
						</div>
					</div>
				</div>

				<div>
					<div
						data-aos="fade-up"
						className="flex text-center justify-center items-center "
					>
						<div className="h-[6rem] w-1 text-color-2 bg-purple-400"></div>
					</div>
					<div className="flex items-center justify-center ml-[0.5rem] gap-10">
						<div data-aos="fade-right" className="w-[30rem] text-end">
							<div className="text-color-2 font-bold">
								Getlinked Hackathon 1.0 Officially Begins
							</div>
							<div>
								Accepted teams can now proceed to build their ground breaking
								skill driven solutions
							</div>
						</div>

						<div
							data-aos="fade-up"
							className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1"
						>
							5
						</div>
						<div
							data-aos="fade-left"
							className="text-color-2 ml-2 w-[30rem] font-bold"
						>
							November 18, 2023
						</div>
					</div>
				</div>

				<div>
					<div
						data-aos="fade-up"
						className="flex text-center justify-center items-center "
					>
						<div className="h-[6rem] w-1 text-color-2 bg-purple-400"></div>
					</div>
					<div className="flex items-center justify-center gap-10">
						<div
							data-aos="fade-right"
							className="text-color-2 text-end w-[30rem] font-bold"
						>
							November 18, 2023
						</div>

						<div
							data-aos="fade-up"
							className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1"
						>
							6
						</div>

						<div data-aos="fade-left" className="w-[30rem] text-start">
							<div className="text-color-2 font-bold">Demo Day</div>
							<div>
								Teams get the opportunity to pitch thier projects to judges. The
								winner of the hackathon will also be announced on this day
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* small screen design*/}
			<div className="my-20 mx-10 text-white md:hidden">
				<div className="font-bold text-2xl text-center">Timeline</div>
				<div data-aos="fade-up" className="text-center mt-5 md:mx-[20rem]">
					Here is the breakdown of the time we anticipate using for the upcoming
					event.
				</div>

				<div className="mt-5 space-y-10">
					<div>
						<div className="flex">
							<div
								data-aos="fade-down"
								className="h-[6rem] w-2 text-color-2 bg-purple-400"
							></div>
							<div data-aos="fade-up" className="ml-5">
								<div className="text-color-2 font-bold">
									Hackathon Announcement
								</div>
								<div>
									The getlinked tech hackathon 1.0 formally announced to the
									geneal public and teams begin to get ready to register
								</div>
							</div>
						</div>
						<div data-aos="fade-down" className="flex items-center ml-[-0.9em]">
							<div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1">
								1
							</div>
							<div className="text-color-2 ml-2">November 18, 2023</div>
						</div>
					</div>

					<div>
						<div className="flex">
							<div
								data-aos="fade-down"
								className="h-[6rem] w-2 text-color-2 bg-gradient-to-r from-pink-500 to-purple-500"
							></div>
							<div data-aos="fade-up" className="ml-5">
								<div className="text-color-2 font-bold">
									Hackathon Announcement
								</div>
								<div>
									The getlinked tech hackathon 1.0 formally announced to the
									geneal public and teams begin to get ready to register
								</div>
							</div>
						</div>
						<div data-aos="fade-down" className="flex items-center ml-[-0.9em]">
							<div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1">
								2
							</div>
							<div className="text-color-2 ml-2">November 18, 2023</div>
						</div>
					</div>

					<div>
						<div className="flex">
							<div
								data-aos="fade-down"
								className="h-[6rem] w-2 text-color-2 bg-gradient-to-r from-pink-500 to-purple-500"
							></div>
							<div data-aos="fade-up" className="ml-5">
								<div className="text-color-2 font-bold">
									Hackathon Announcement
								</div>
								<div>
									The getlinked tech hackathon 1.0 formally announced to the
									geneal public and teams begin to get ready to register
								</div>
							</div>
						</div>
						<div data-aos="fade-down" className="flex items-center ml-[-0.9em]">
							<div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1">
								3
							</div>
							<div className="text-color-2 ml-2">November 18, 2023</div>
						</div>
					</div>

					<div>
						<div className="flex">
							<div
								data-aos="fade-down"
								className="h-[6rem] w-2 text-color-2 bg-gradient-to-r from-pink-500 to-purple-500"
							></div>
							<div data-aos="fade-up" className="ml-5">
								<div className="text-color-2 font-bold">
									Hackathon Announcement
								</div>
								<div>
									The getlinked tech hackathon 1.0 formally announced to the
									geneal public and teams begin to get ready to register
								</div>
							</div>
						</div>
						<div data-aos="fade-down" className="flex items-center ml-[-0.9em]">
							<div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1">
								4
							</div>
							<div className="text-color-2 ml-2">November 18, 2023</div>
						</div>
					</div>

					<div>
						<div className="flex">
							<div
								data-aos="fade-down"
								className="h-[6rem] w-2 text-color-2 bg-gradient-to-r from-pink-500 to-purple-500"
							></div>
							<div data-aos="fade-up" className="ml-5">
								<div className="text-color-2 font-bold">
									Hackathon Announcement
								</div>
								<div>
									The getlinked tech hackathon 1.0 formally announced to the
									geneal public and teams begin to get ready to register
								</div>
							</div>
						</div>
						<div data-aos="fade-down" className="flex items-center ml-[-0.9em]">
							<div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1">
								5
							</div>
							<div className="text-color-2 ml-2">November 18, 2023</div>
						</div>
					</div>

					<div>
						<div className="flex">
							<div
								data-aos="fade-down"
								className="h-[6rem] w-2 text-color-2 bg-gradient-to-r from-pink-500 to-purple-500"
							></div>
							<div data-aos="fade-up" className="ml-5">
								<div className="text-color-2 font-bold">
									Hackathon Announcement
								</div>
								<div>
									The getlinked tech hackathon 1.0 formally announced to the
									geneal public and teams begin to get ready to register
								</div>
							</div>
						</div>
						<div data-aos="fade-down" className="flex items-center ml-[-0.9em]">
							<div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1">
								6
							</div>
							<div className="text-color-2 ml-2">November 18, 2023</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Timeline;
