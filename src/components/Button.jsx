import Link from "next/link";

const Button = ({ text }) => {
	return (
		<div className="transition-all duration-500">
			<Link
				href="/register"
				className="text-white text-xl px-14 text-center rounded-md bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 py-4 mt-5 hover:cursor-pointer"
			>
				{text}
			</Link>
		</div>
	);
};

export default Button;
