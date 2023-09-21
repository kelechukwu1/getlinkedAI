"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { RiMenu4Line } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";
import Button from "./Button";

const NavBar = () => {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const navbarRef = useRef(null);

	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (navbarRef.current && !navbarRef.current.contains(event.target)) {
				setOpen(false);
			}
		};

		if (open) {
			document.addEventListener("click", handleOutsideClick);
		}

		return () => {
			document.removeEventListener("click", handleOutsideClick);
		};
	}, [open]);

	const navLinks = [
		{
			name: "Timeline",
			link: "/",
		},
		{
			name: "Overview",
			link: "overview",
		},
		{
			name: "FAQs",
			link: "faq",
		},
		{
			name: "Contact",
			link: "contact",
		},
	];
	return (
		<div className="md:flex md:p-5 md:px-24 md:justify-between items-center shadow bg-custom-color">
			<div className="flex justify-between md:justify-normal items-center p-4">
				<div>
					<Link
						href="/"
						onClick={() => {
							open ? setOpen(!open) : !open;
						}}
					>
						<div className="relative z-10">
							<span className="text-white font-bold text-3xl">get</span>
							<span className="text-color-2 font-bold text-3xl">linked</span>
						</div>
					</Link>
				</div>
				<div
					className="md:hidden cursor-pointer text-white"
					onClick={() => {
						setOpen(!open);
					}}
				>
					{!open ? (
						<RiMenu4Line className="w-6 h-6" />
					) : (
						<RiCloseLine className="w-6 h-6" />
					)}
				</div>
			</div>

			<div
				ref={navbarRef}
				className="hidden md:flex md:items-center pb-5 md:pb-0  md:z-auto left-0 w-full md:w-auto md:pl-40 pl-9 transition-all duration-500 ease-in text-white"
			>
				<div className="flex items-center">
					<div
						onClick={() => {
							setOpen(!open);
						}}
						className="md:flex"
					>
						{navLinks.map(({ link, name }) => (
							<Link href={link} key={name} className="mx-2 text-center">
								<div
									className={`md:px-4 my-5 md:my-0 ${
										pathname.startsWith(link) ? "" : ""
									}`}
								>
									{name}
								</div>
							</Link>
						))}
					</div>
					<div className="ml-20">
						<Button text={"register"} />
					</div>
				</div>
			</div>
			{/* mobile screen navbar  */}
			<div
				className={`fixed top-0 left-0 w-full h-screen z-50 ${
					!open ? "hidden" : ""
				}`}
			>
				<div className="flex w-full bg-custom-color h-screen">
					<div className="absolute top-5 right-1 p-4">
						<button onClick={() => setOpen(!open)}>
							<div className="relative w-12 h-12 top-[1rem] right-[1rem]">
								<div className="absolute w-12 h-12 top-[-0.6rem] left-[-0.7rem]">
									<svg
										width="40"
										height="40"
										viewBox="0 0 23 23"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle
											cx="11.5"
											cy="11.5"
											r="11"
											stroke="url(#paint0_linear_181_74)"
										/>
										<defs>
											<linearGradient
												id="paint0_linear_181_74"
												x1="11.5"
												y1="0"
												x2="11.5"
												y2="23"
												gradientUnits="userSpaceOnUse"
											>
												<stop stop-color="#903AFF" />
												<stop offset="1" stop-color="#FF26B9" />
											</linearGradient>
										</defs>
									</svg>
								</div>
								{/* Close icon */}
								<svg
									width="20"
									height="20"
									viewBox="0 0 11 11"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M0.307505 10.6925C0.504459 10.8894 0.771552 11 1.05005 11C1.32854 11 1.59563 10.8894 1.79259 10.6925L5.50634 6.97874L9.22009 10.6925C9.41818 10.8838 9.68348 10.9897 9.95886 10.9873C10.2342 10.9849 10.4977 10.8744 10.6924 10.6797C10.8871 10.485 10.9976 10.2216 11 9.94617C11.0024 9.6708 10.8965 9.4055 10.7052 9.20741L6.99142 5.49366L10.7052 1.77991C10.8965 1.58182 11.0024 1.31652 11 1.04114C10.9976 0.765767 10.8871 0.502346 10.6924 0.307617C10.4977 0.112889 10.2342 0.00243378 9.95886 4.1008e-05C9.68348 -0.00235271 9.41818 0.103509 9.22009 0.294824L5.50634 4.00858L1.79259 0.294824C1.5945 0.103509 1.3292 -0.00235271 1.05383 4.1008e-05C0.778448 0.00243378 0.515027 0.112889 0.320299 0.307617C0.12557 0.502346 0.0151142 0.765767 0.0127213 1.04114C0.0103283 1.31652 0.11619 1.58182 0.307505 1.77991L4.02126 5.49366L0.307505 9.20741C0.110609 9.40437 0 9.67146 0 9.94995C0 10.2284 0.110609 10.4955 0.307505 10.6925Z"
										fill="#F8F8F8"
									/>
								</svg>
							</div>
						</button>
					</div>
					<div
						onClick={() => {
							setOpen(!open);
						}}
						className="w-full mx-5 my-5 py-24 space-y-5 transition-all duration-500 text-white"
					>
						{navLinks.map(({ link, name }) => (
							<Link
								href={link}
								key={name}
								className="justify-center items-center flex"
							>
								<div
									className={`hover:bg-pink-600 px-6 py-3 rounded-sm w-full transition-all duration-500 ${
										pathname.startsWith(link) ? "" : ""
									}`}
								>
									{name}
								</div>
							</Link>
						))}
						<div className="mx-5 py-9">
							<Button text={"register"} />
						</div>
					</div>
				</div>
			</div>
			<hr className="opacity-20" />
		</div>
	);
};

export default NavBar;
