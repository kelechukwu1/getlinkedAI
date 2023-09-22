import Image from "next/image";

const Introduction = () => {
	return (
		<div className="relative">
			{/* background beautifications */}
			<div className="absolute top-[5rem] md:top-[6rem] left-[3rem] md:left-[9rem]">
				<Image src={"/sata gra.png"} width={15} height={15} alt="star image" />
			</div>

			<div className="hidden md:block absolute md:top-[3.5rem] md:left-[47rem] lg:left-[65rem]">
				<Image src={"/star pu.png"} width={20} height={20} alt="star image" />
			</div>

			<div className="md:hidden absolute top-[21rem] left-[23rem]">
				<Image src={"/star pu.png"} width={12} height={12} alt="star image" />
			</div>

			<div className="absolute top-[17rem] lg:top-[17rem] left-[12rem] lg:left-[29rem] md:left-[23rem] md:top-[17rem]">
				<Image src={"/arrow.png"} width={45} height={45} alt="star image" />
			</div>

			<div className="md:flex mx-10 md:mx-0 my-10 md:w-full md:my-32 items-center justify-center">
				<div className="flex justify-center md:w-full md:ml-10">
					<Image src={"/idea.png"} width={300} height={300} alt="big idea" />
				</div>
				<div className="text-center my-5 md:w-full md:text-start">
					<div className="text-2xl font-bold mt-5">
						Introduction to getlinked
					</div>
					<div className="text-color-2 text-2xl font-bold mb-5">
						tech Hackathon1.0
					</div>
					<div className="lg:pr-32 md:pr-24">
						Our tech hackathon is a melting pot of visionaries, and its purpose
						is as clear as day: to shape the future. Whether you're a coding
						genius, a design maverick, or a concept wizard, you'll have the
						chance to transform your ideas into reality. Solving real-world
						problems, pushing the boundaries of technology, and creating
						solutions that can change the world, that's what we're all about!{" "}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Introduction;
