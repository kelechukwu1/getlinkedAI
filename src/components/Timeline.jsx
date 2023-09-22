import Image from "next/image";

const Timeline = () => {
	return (
		<div className="relative">
			{/* background stars and frames */}
			<div className=" md:hidden absolute top-[6.5rem] left-[4.5rem]">
				<Image src={"/star pu.png"} width={15} height={15} alt="star image" />
			</div>
			<div className=" md:hidden absolute top-[35.5rem] left-[17rem]">
				<Image src={"/star.png"} width={15} height={15} alt="star image" />
			</div>
			<div className=" md:hidden absolute top-[71rem] left-[2rem]">
				<Image src={"/stargray.png"} width={15} height={15} alt="star image" />
			</div>
			{/* background stars and frames end here*/}

			{/* large sceen design */}
			<div className="my-20 mx-10 text-white hidden md:block">
				<div className="font-bold text-2xl text-center">Timeline</div>
				<div className="text-center mt-5 mb-10 md:mx-[25rem]">
					Here is the breakdown of the time we anticipate using for the upcoming
					event.
				</div>

				<div>
					<div className="flex text-center justify-center items-center ">
						<div className="h-[6rem] w-1 text-color-2 bg-purple-400"></div>
					</div>
					<div className="flex items-center justify-center ml-[0.5rem] gap-10">
						<div className="w-[30rem] text-end">
							<div className="text-color-2 font-bold">
								Hackathon Announcement
							</div>
							<div>
								The getlinked tech hackathon 1.0 formally announced to the
								geneal public and teams begin to get ready to register
							</div>
						</div>

						<div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1">
							1
						</div>
						<div className="text-color-2 ml-2 w-[30rem] font-bold">
							November 18, 2023
						</div>
					</div>
				</div>

				<div>
					<div className="flex text-center justify-center items-center ">
						<div className="h-[6rem] w-1 text-color-2 bg-purple-400"></div>
					</div>
					<div className="flex items-center justify-center gap-10">
						<div className="text-color-2 text-end w-[30rem] font-bold">
							November 18, 2023
						</div>

						<div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1">
							2
						</div>

						<div className="w-[30rem] text-start">
							<div className="text-color-2 font-bold">
								Hackathon Announcement
							</div>
							<div>
								The getlinked tech hackathon 1.0 formally announced to the
								geneal public and teams begin to get ready to register
							</div>
						</div>
					</div>
				</div>

				<div>
					<div className="flex text-center justify-center items-center ">
						<div className="h-[6rem] w-1 text-color-2 bg-purple-400"></div>
					</div>
					<div className="flex items-center justify-center ml-[0.5rem] gap-10">
						<div className="w-[30rem] text-end">
							<div className="text-color-2 font-bold">
								Hackathon Announcement
							</div>
							<div>
								The getlinked tech hackathon 1.0 formally announced to the
								geneal public and teams begin to get ready to register
							</div>
						</div>

						<div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1">
							3
						</div>
						<div className="text-color-2 ml-2 w-[30rem] font-bold">
							November 18, 2023
						</div>
					</div>
				</div>

				<div>
					<div className="flex text-center justify-center items-center ">
						<div className="h-[6rem] w-1 text-color-2 bg-purple-400"></div>
					</div>
					<div className="flex items-center justify-center gap-10">
						<div className="text-color-2 text-end w-[30rem] font-bold">
							November 18, 2023
						</div>

						<div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1">
							4
						</div>

						<div className="w-[30rem] text-start">
							<div className="text-color-2 font-bold">
								Hackathon Announcement
							</div>
							<div>
								The getlinked tech hackathon 1.0 formally announced to the
								geneal public and teams begin to get ready to register
							</div>
						</div>
					</div>
				</div>

				<div>
					<div className="flex text-center justify-center items-center ">
						<div className="h-[6rem] w-1 text-color-2 bg-purple-400"></div>
					</div>
					<div className="flex items-center justify-center ml-[0.5rem] gap-10">
						<div className="w-[30rem] text-end">
							<div className="text-color-2 font-bold">
								Hackathon Announcement
							</div>
							<div>
								The getlinked tech hackathon 1.0 formally announced to the
								geneal public and teams begin to get ready to register
							</div>
						</div>

						<div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1">
							5
						</div>
						<div className="text-color-2 ml-2 w-[30rem] font-bold">
							November 18, 2023
						</div>
					</div>
				</div>

				<div>
					<div className="flex text-center justify-center items-center ">
						<div className="h-[6rem] w-1 text-color-2 bg-purple-400"></div>
					</div>
					<div className="flex items-center justify-center gap-10">
						<div className="text-color-2 text-end w-[30rem] font-bold">
							November 18, 2023
						</div>

						<div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1">
							6
						</div>

						<div className="w-[30rem] text-start">
							<div className="text-color-2 font-bold">
								Hackathon Announcement
							</div>
							<div>
								The getlinked tech hackathon 1.0 formally announced to the
								geneal public and teams begin to get ready to register
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* small screen design*/}
			<div className="my-20 mx-10 text-white md:hidden">
				<div className="font-bold text-2xl text-center">Timeline</div>
				<div className="text-center mt-5 md:mx-[25rem]">
					Here is the breakdown of the time we anticipate using for the upcoming
					event.
				</div>

				<div className="mt-5 space-y-10">
					<div>
						<div className="flex">
							<div className="h-[6rem] w-2 text-color-2 bg-purple-400"></div>
							<div className="ml-5">
								<div className="text-color-2 font-bold">
									Hackathon Announcement
								</div>
								<div>
									The getlinked tech hackathon 1.0 formally announced to the
									geneal public and teams begin to get ready to register
								</div>
							</div>
						</div>
						<div className="flex items-center ml-[-0.9em]">
							<div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1">
								2
							</div>
							<div className="text-color-2 ml-2">November 18, 2023</div>
						</div>
					</div>

					<div>
						<div className="flex">
							<div className="h-[6rem] w-2 text-color-2 bg-gradient-to-r from-pink-500 to-purple-500"></div>
							<div className="ml-5">
								<div className="text-color-2 font-bold">
									Hackathon Announcement
								</div>
								<div>
									The getlinked tech hackathon 1.0 formally announced to the
									geneal public and teams begin to get ready to register
								</div>
							</div>
						</div>
						<div className="flex items-center ml-[-0.9em]">
							<div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1">
								2
							</div>
							<div className="text-color-2 ml-2">November 18, 2023</div>
						</div>
					</div>

					<div>
						<div className="flex">
							<div className="h-[6rem] w-2 text-color-2 bg-gradient-to-r from-pink-500 to-purple-500"></div>
							<div className="ml-5">
								<div className="text-color-2 font-bold">
									Hackathon Announcement
								</div>
								<div>
									The getlinked tech hackathon 1.0 formally announced to the
									geneal public and teams begin to get ready to register
								</div>
							</div>
						</div>
						<div className="flex items-center ml-[-0.9em]">
							<div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1">
								3
							</div>
							<div className="text-color-2 ml-2">November 18, 2023</div>
						</div>
					</div>

					<div>
						<div className="flex">
							<div className="h-[6rem] w-2 text-color-2 bg-gradient-to-r from-pink-500 to-purple-500"></div>
							<div className="ml-5">
								<div className="text-color-2 font-bold">
									Hackathon Announcement
								</div>
								<div>
									The getlinked tech hackathon 1.0 formally announced to the
									geneal public and teams begin to get ready to register
								</div>
							</div>
						</div>
						<div className="flex items-center ml-[-0.9em]">
							<div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1">
								4
							</div>
							<div className="text-color-2 ml-2">November 18, 2023</div>
						</div>
					</div>

					<div>
						<div className="flex">
							<div className="h-[6rem] w-2 text-color-2 bg-gradient-to-r from-pink-500 to-purple-500"></div>
							<div className="ml-5">
								<div className="text-color-2 font-bold">
									Hackathon Announcement
								</div>
								<div>
									The getlinked tech hackathon 1.0 formally announced to the
									geneal public and teams begin to get ready to register
								</div>
							</div>
						</div>
						<div className="flex items-center ml-[-0.9em]">
							<div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1">
								5
							</div>
							<div className="text-color-2 ml-2">November 18, 2023</div>
						</div>
					</div>

					<div>
						<div className="flex">
							<div className="h-[6rem] w-2 text-color-2 bg-gradient-to-r from-pink-500 to-purple-500"></div>
							<div className="ml-5">
								<div className="text-color-2 font-bold">
									Hackathon Announcement
								</div>
								<div>
									The getlinked tech hackathon 1.0 formally announced to the
									geneal public and teams begin to get ready to register
								</div>
							</div>
						</div>
						<div className="flex items-center ml-[-0.9em]">
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
