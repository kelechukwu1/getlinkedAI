"use client";
import React from "react";
import winkEmoji from "../../public/svg/wink-emoji.svg";
import successfulMan from "../../public/svg/successful-man.svg";
import successfullyDone from "../../public/svg/successfully-done.svg";

import stargray from "../../public/stargray.png";
import star from "../../public/star pu.png";
import Image from "next/image";

const Modal = () => {
  return (
    <>
      <aside
        className="fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10"
        id="wrapper"
        // onClick={(e) => handleClose(e)}
      >
        <div className="relative">
          <div className="w-[400px] md:w-[600px] flex flex-col border border-[#D434FE] rounded relative">
            <div className="bg-transparent p-2 rounded text-white text-center mt-7 mb-7 md:mb-14">
              <div className="space-y-5">
                <div className="flex items-center justify-center relative">
                  <Image
                    src={successfullyDone}
                    alt="Successfully done SVG"
                    width={190}
                    height={190}
                    className="absolute -top-0 left-10 md:left-[9.7rem]"
                  />
                  <Image
                    src={successfulMan}
                    alt="Successful man rejoicing"
                    width={220}
                    height={220}
                    className="ml-16 md:ml-24 z-10"
                  />
                </div>

                <div className="font-semibold text-xl md:text-2xl">
                  <p>Congratulations</p>
                  <div className="md:flex justify-center space-x-1">
                    <p>you have successfully</p>
                    <p>Registered!</p>
                  </div>
                </div>

                <div className="text-sm md:text-base">
                  <p>Yes, it was easy and you did it!</p>
                  <div className="flex justify-center space-x-1">
                    <p>check your mail box for next step</p>
                    <Image src={winkEmoji} alt="wink emoji" />
                  </div>
                </div>

                <div className="px-9 md:px-20">
                  <button
                    type="submit"
                    className="text-white text-lg bg-gradient-to-r from-pink-500 via-purple-500 py-3 text-center rounded-md hover:bg-pink-500 transition-all duration-500 w-full"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>

            <Image
              src={stargray}
              alt="Gray star"
              width={15}
              height={15}
              className="absolute top-52 left-14"
            />
          </div>

          <Image
            src={star}
            alt="Purple star"
            width={15}
            height={15}
            className="absolute -top-8 -right-1"
          />

          <Image
            src={star}
            alt="Purple star"
            width={15}
            height={15}
            className="absolute -bottom-11 md:bottom-5 right-10 md:right-14"
          />
        </div>
      </aside>
    </>
  );
};

export default Modal;
