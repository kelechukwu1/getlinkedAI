"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

import graphicsDesginer from "../../../public/svg/3d-graphic-designer.svg";
import movingLady from "../../../public/moving-lady.png";
import movingMan from "../../../public/moving-man.png";
import starpu from "../../../public/star pu.png";
import star from "../../../public/star.png";
import stargray from "../../../public/stargray.png";

import Modal from "@/components/Modal";
import Button from "@/components/Button";

const Page = () => {
  const [openModal, setOpenModal] = useState(false);
  const imageRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    setOpenModal(true);
  };

  useEffect(() => {}, []);

  return (
    <>
      <main className="w-[70%] md:w-[95%] mx-auto">
        <h2 className="md:hidden text-color-2 font-bold text-xl mt-5">
          Register
        </h2>
        <section className="md:flex items-center ">
          <div className="md:flex-0 lg:flex-1 mt-12 flex justify-center">
            <div
              className="relative w-52 h-52 md:w-80 md:h-80 lg:w-96 lg:h-96 "
              ref={imageRef}
            >
              <Image
                src={graphicsDesginer}
                alt="3D Graphics Designer Showing Thumbs Up"
                fill={true}
                className="object-cover"
              />
              <Image
                src={starpu}
                alt=""
                width={12}
                className="absolute bottom-20 -right-10 md:bottom-0 md:right-0 md:top-3 md:left-12"
              />
              <Image
                src={stargray}
                alt=""
                width={12}
                className="absolute hidden md:block md:bottom-0 md:left-[4.3rem]"
              />
              <Image
                src={starpu}
                alt=""
                width={12}
                className="absolute hidden md:block md:bottom-20 md:right-10"
              />
            </div>
          </div>

          <div className="md:flex-1 mt-8 text-white">
            <div className="md:border md:p-14 lg:p-10 md:rounded-md md:border-[#FFFFFF08] md:shadow-2xl md:bg-[#FFFFFF08] relative">
              <Image
                src={stargray}
                alt=""
                width={17}
                className="absolute hidden md:block top-4 right-28"
              />
              <Image
                src={star}
                alt=""
                width={10}
                className="absolute hidden md:block -bottom-4 right-16"
              />
              <h2 className="hidded md:block font-bold text-2xl text-color-2 mb-9">
                Register
              </h2>
              <div className="flex items-center">
                <p className="mb-2">Be part of this movement!</p>

                <div className="flex border-b border-dashed border-purple-800 ">
                  <Image
                    src={movingLady}
                    alt="moving lady"
                    className="object-contain"
                  />
                  <Image
                    src={movingMan}
                    alt="moving man"
                    className="object-contain"
                  />
                </div>
              </div>
              <h2 className="text-2xl mt-2 mb-7">CREATE YOUR ACCOUNT</h2>

              <form
                onSubmit={submitHandler}
                action=""
                method="post"
                className="relative"
              >
                <Image
                  src={stargray}
                  alt=""
                  width={15}
                  className="absolute top-5 -left-7 md:hidden"
                />

                <Image
                  src={starpu}
                  alt=""
                  width={10}
                  className="absolute bottom-[15.5rem] -right-5 md:hidden"
                />
                <div className="flex flex-col gap-5 md:gap-3 md:grid grid-cols-2 grid-rows-2">
                  <div className="space-y-2 col-span-1">
                    <label htmlFor="teamName">{"Team's Name"}</label>
                    <input
                      type="text"
                      name="teamName"
                      placeholder="Enter the name of your group"
                      className="w-full h-[47px] rounded-md pl-7 md:pl-2 border-2 border-[rgba(255, 255, 255, 1)] bg-transparent drop-shadow-[0px_4px_4px_0px rgba(0, 0, 0, 0.25)] text-white md:placeholder:text-xs xl:placeholder:text-base"
                    />
                  </div>

                  <div className="space-y-2 col-span-1">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="phone"
                      name="phone"
                      placeholder="Enter your phone number "
                      className="w-full h-[47px] rounded-md pl-7 md:pl-2 border-2 border-[rgba(255, 255, 255, 1)] bg-transparent drop-shadow-[0px_4px_4px_0px rgba(0, 0, 0, 0.25)] text-white md:placeholder:text-xs xl:placeholder:text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email address "
                      className="w-full h-[47px] rounded-md pl-7 md:pl-2 border-2 border-[rgba(255, 255, 255, 1)] bg-transparent drop-shadow-[0px_4px_4px_0px rgba(0, 0, 0, 0.25)] text-white md:placeholder:text-xs xl:placeholder:text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="projectTopic">Project Topic</label>
                    <input
                      type="text"
                      name="projectTopic"
                      placeholder="What is your group project topic "
                      className="w-full h-[47px] rounded-md pl-7 md:pl-2 border-2 border-[rgba(255, 255, 255, 1)] bg-transparent drop-shadow-[0px_4px_4px_0px rgba(0, 0, 0, 0.25)] text-white md:placeholder:text-xs xl:placeholder:text-base"
                    />
                  </div>

                  <div className="flex gap-8 md:gap-2">
                    <div className="flex flex-col flex-1 md:flex-0 space-y-1">
                      <label htmlFor="category">Category</label>
                      <select
                        name="category"
                        id="category"
                        className="outline-white h-[2.7rem] rounded-md bg-transparent border-2 border-white text-white px-3 "
                      >
                        <option className="text-black md:text-base" value="">
                          Select
                        </option>
                        <option className="text-black" value="entertainment">
                          Business
                        </option>
                        <option className="text-black" value="technology">
                          Technology
                        </option>
                      </select>
                    </div>

                    <div className="md:hidden flex flex-col flex-0 md:flex-1 space-y-1">
                      <label htmlFor="groupSize">Group Size</label>
                      <select
                        name="groupSize"
                        id="groupSize"
                        className="outline-white h-[2.7rem] rounded-md bg-transparent border-2 border-white text-white px-4"
                      >
                        <option className="text-black" value="">
                          Select
                        </option>
                        <option className="text-black" value="1-5">
                          1-5
                        </option>
                        <option className="text-black" value="6-20">
                          6-20
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="hidden md:flex flex-col space-y-1">
                    <label htmlFor="groupSize">Group Size</label>
                    <select
                      name="groupSize"
                      id="groupSize"
                      className="outline-white h-[2.7rem] rounded-md bg-transparent border-2 border-white text-white px-4"
                    >
                      <option className="text-black" value="">
                        Select
                      </option>
                      <option className="text-black" value="1-5">
                        1-5
                      </option>
                      <option className="text-black" value="6-20">
                        6-20
                      </option>
                    </select>
                  </div>
                </div>

                <p className="text-xs italic text-[#FF26B9] my-5">
                  Please review your registration details before submitting
                </p>

                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="privacyPolicy"
                    id="privacyPolicy"
                    className="bg-transparent cursor-pointer"
                  />
                  <p className="text-xs">
                    I agreed with the event terms and conditions and privacy
                    policy
                  </p>
                </div>

                <div className="flex justify-center mt-5">
                  <Button
                    text={"Register Now"}
                    type="submit"
                    customClasses="md:w-full"
                  />
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Modal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default Page;
