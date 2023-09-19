import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="text-white">
			<div className="py-6 px-7 text-xl font-bold">
				Igniting a Revolution in HR Innovation
			</div>
			<div className="text-center py-6 px-7 text-4xl font-bold">
				getlinkedTech
			</div>
			<div className="text-center px-7 text-4xl font-bold">
				Hackathon <span>1.0🔗💥</span>
			</div>
			<div className="text-center px-16 mt-5">
				Participate in getlinked tech Hackathon 2023 stand a chance to win a Big
				prize
			</div>
			<div className="px-6 pt-5 text-center mt-5">
				<Link
					href="/register"
					className="text-white text-xl bg-gradient-to-r from-pink-500 via-purple-500 py-5 px-16 text-center rounded-sm hover:bg-pink-500 transition-all duration-500 "
				>
					Register
				</Link>
			</div>
			<div className="flex pt-7 justify-center text-center">
				<Image
					src={"/time.png"}
					width={300}
					height={300}
					alt="countdown time"
				/>
			</div>
		</main>
	);
}
