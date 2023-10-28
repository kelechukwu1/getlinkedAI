"use client";
import NavBar from "@/components/NavBar";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

// export const metadata = {
// 	title: "getlinkedAI Hackathon",
// 	description: "A hackathon built by Ayoola and Kelechukwu",
// };

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<NavBar />
				{children}
				{/* footer section */}
				<Footer />
			</body>
		</html>
	);
}
