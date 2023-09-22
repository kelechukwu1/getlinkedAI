"use client";

import React from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import Ellipse from "../../public/svg/Ellipse 4.svg";

const BackHome = () => {
  const router = useRouter();
  return (
    <div className="mb-14 relative md:hidden">
      <Image
        src={Ellipse}
        alt=""
        width={35}
        className="relative cursor-pointer"
      />
      <button
        onClick={() => router.push("/")}
        className="text-white absolute top-[9%] left-[3%] text-lg"
      >
        {"<"}
      </button>
    </div>
  );
};

export default BackHome;
