import Image from "next/image";
import Link from "next/link";

const Privacy = () => {
	return (
		<>
			<div className="mx-10 my-20 md:flex text-white">
				<div>
					<div className="text-center">
						<div my-5>
							<div className="text-2xl font-bold">Privacy Policy and</div>
							<span className="text-color-2 text-2xl font-bold">Terms</span>
						</div>
						<div className="text-gray-300 mt-2">
							Last updated on september 12, 2023
						</div>
						<div className="mb-5 mt-10">
							Below are our privacy & policy, which outline a lot of goodies.
							It's our aim to always take of our participant.
						</div>
					</div>
					<div className="border-2 border-purple-500 rounded-lg mb-5 justify-center">
						<div className="m-5">
							At getlinked tech Hackathon 1.0, we value your privacy and are
							committed to protecting your personal information. This Privacy
							Policy outlines how we collect, use, discose, and safeguard your
							data when you participate in our tech hackathon event. By
							participating in our event, you consent to the practices described
							in this policy.
						</div>
						<div className="m-5 space-y-5">
							<div className="text-color-2">Licensing Policy</div>
							<div>
								{" "}
								The Standard License grants you a non-exclusive right to
								navigate and register for our event.
							</div>
							<div>
								You are licensed to use the item available at any free sites,
								for your project development.
							</div>
						</div>
						<div className="px-6 pt-2 mb-20 text-center mt-10">
							<Link
								href="/register"
								className="text-white text-xl bg-gradient-to-r from-pink-500 via-purple-500 py-4 px-12 text-center rounded-md hover:bg-pink-500 transition-all duration-500 "
							>
								Read More
							</Link>
						</div>
					</div>
				</div>
				<div className="flex justify-center mt-10 relative">
					<div className="relative z-10">
						<Image
							src="/privacy.png"
							width={300}
							height={300}
							alt="privacy padlock"
						/>
					</div>
					<div className="absolute top-0 left-0 flex justify-center w-full h-full">
						<Image
							src="/privacy1.png"
							width={300}
							height={300}
							alt="privacy padlock"
							className="absolute top-28 left-0"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Privacy;
