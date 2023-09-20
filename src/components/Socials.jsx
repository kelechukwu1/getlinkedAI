import React from "react";
import { RiInstagramLine, RiTwitterXLine } from "react-icons/ri";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex justify-center items-center space-x-4">
      <RiInstagramLine className="w-6 h-6 text-white" />
      <RiTwitterXLine className="w-6 h-6 text-white" />
      <FaFacebookF className="w-6 h-6 text-white " />
      <FaLinkedinIn className="w-6 h-6 text-white" />
    </div>
  );
};

export default Socials;
