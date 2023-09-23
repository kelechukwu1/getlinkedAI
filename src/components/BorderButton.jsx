import React from "react";

const BorderButton = React.forwardRef(
	({ text, type = "button", customClasses = "", onClick }, ref) => {
		const buttonProps = onClick ? { onClick } : {};

		return (
			<>
				{/* <div
					type={type}
					className={`text-white px-14 border-4 text-center py-4 hover:cursor-pointer transition-all duration-500 gradient-border ${customClasses}`}
					ref={ref}
					{...buttonProps}
				>
					{text}
				</div> */}
				<button
					class="bg-gradient-to-b from-purple-700 to-pink-600 text-white font-semibold rounded p-[0.17rem]"
					ref={ref}
					type={type}
					{...buttonProps}
				>
					<span class="flex w-full bg-custom-color text-white rounded py-4 px-14">
						{text}
					</span>
				</button>
			</>
		);
	}
);

export default BorderButton;
