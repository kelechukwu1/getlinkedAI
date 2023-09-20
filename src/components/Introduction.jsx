import Image from "next/image";

const Introduction = () => {
	return (
		<div>
			<div className="md:flex mx-10 my-10">
				<div className="flex justify-center">
					<Image src={"/idea.png"} width={300} height={300} alt="big idea" />
				</div>
				<div className="text-center my-5">
					<div className="text-2xl font-bold mt-5">
						Introduction to getlinked
					</div>
					<div className="text-color-2 text-2xl font-bold mb-5">
						tech Hackathon1.0
					</div>
					<div>
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
