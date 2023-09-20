import Image from "next/image";
import Button from "./Button";
const Landing = () => {
	return (
		<>
			<div className="md:flex text-white">
				<div>
					<div className="py-6 px-7 text-xl font-bold">
						Igniting a Revolution in HR Innovation
					</div>
					<div className="absolute">
						<Image
							src="/vector 4.png"
							width={100}
							height={100}
							alt="reward cup"
							className="relative w-[8.5rem] top-[-1.5rem] left-[16rem]"
						/>
					</div>
					{/* <div className="absolute">
						<Image
							src="/purpleLens.png"
							width={500}
							height={500}
							alt="reward cup"
							className="relative top-[-3rem] left-[-5rem] opacity-40"
						/>
					</div> */}

					<div className="flex justify-center">
						<Image
							src="/title.png"
							width={300}
							height={300}
							alt="title"
							className=" top-[-3rem] left-[-5rem]"
						/>
					</div>
					{/* <div className="text-center py-3 px-7 text-4xl font-bold mt-10">
						getlinkedTech
					</div>
					<div className="text-center px-7 text-4xl font-bold">
						Hackathon <span className="text-color-2">1.0🔗💥</span>
					</div> */}
					<div className="text-center px-16 mt-2">
						Participate in getlinked tech Hackathon 2023 stand a chance to win a
						Big prize
					</div>
					<div className="text-center mt-10 justify-center">
						<Button text={"Register"} />
					</div>
					<div className="flex pt-7 justify-center text-center">
						<Image
							src={"/time.png"}
							width={300}
							height={300}
							alt="countdown time"
						/>
					</div>

					<div className="absolute">
						<Image
							src="/image 1.png"
							width={350}
							height={350}
							alt="virtual reality"
							className="relative top-[1.7rem] left-[2.3rem]"
						/>
					</div>
				</div>
				<div className="mt-5">
					<div className="md:flex justify-center">
						<Image
							src={"/man.png"}
							width={500}
							height={500}
							alt="man in a virtual reality"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Landing;
