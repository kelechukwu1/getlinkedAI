import React from "react";

// eslint-disable-next-line react/display-name
const BorderButton = React.forwardRef(
	({ text, type = "button", customClasses = "", onClick }, ref) => {
		const buttonProps = onClick ? { onClick } : {};

		return (
			<>
				<button
					className="bg-gradient-to-b from-purple-700 to-pink-600 text-white font-semibold rounded p-[0.17rem]"
					ref={ref}
					type={type}
					{...buttonProps}
				>
					<span className="flex w-full bg-custom-color text-white rounded py-4 px-14">
						{text}
					</span>
				</button>
			</>
		);
	}
);

export default BorderButton;
