"use client";

import React, { useEffect } from "react";
import gsap from "gsap";

import { RiInstagramLine, RiTwitterXLine } from "react-icons/ri";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Socials = ({ id }) => {
  useEffect(() => {
    gsap.timeline({ delay: 1 }).fromTo(
      "#share",
      {
        opacity: 0,
        stagger: 0.2,
      },
      { opacity: 1, duration: 1 }
    );
  }, []);

  return (
    <div className="flex justify-center items-center space-x-4">
      <RiInstagramLine id="share" className="w-6 h-6 text-white" />
      <RiTwitterXLine id="share" className="w-6 h-6 text-white" />
      <FaFacebookF id="share" className="w-6 h-6 text-white " />
      <FaLinkedinIn id="share" className="w-6 h-6 text-white" />
    </div>
  );
};

export default Socials;
