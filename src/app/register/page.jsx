"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useFormik } from "formik";
import { registerSchema } from "@/schemas/schema";

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

  const formCardRef = useRef();
  const imageRef = useRef();
  // const user = useSelector((state) => state.user);
  // console.log(user);

  //using formik to get form values and yup for validation
  const { touched, handleBlur, handleChange, handleSubmit, values, errors } =
    useFormik({
      initialValues: {
        teamName: "",
        phone: "",
        email: "",
        projectTopic: "",
        category: "",
        groupSize: 0,
        privacyPolicy: 0,
      },
      //validations
      validationSchema: registerSchema,

      //form submit
      onSubmit: (values, actions) => {
        actions.resetForm();
        console.log(values);
        alert(JSON.stringify(values));

        setOpenModal(true);
      },
    });
  console.log(errors);

  useEffect(() => {
    const image = imageRef.current;
    const form = formCardRef.current;

    const matchMedia = gsap.matchMedia();

    let conditions = {
      isMobile: "(min-width: 300px)",
      isDesktop: "(min-width: 768px)",
    };

    matchMedia.add(conditions, (context) => {
      let { isMobile, isDesktop } = context.conditions;

      gsap
        .timeline()
        .from(image, {
          xPercent: -100,
          autoAlpha: 0,
        })
        .from(form, {
          yPercent: isDesktop ? -100 : 0,
          xPercent: isMobile ? -100 : 0,
          autoAlpha: 0,
        })
        .from("#img", {
          opacity: 0,
          duration: 1,
          stagger: 0.2,
        });
    });
  }, []);

  return (
    <>
      <main className="w-[70%] md:w-[95%] mx-auto">
        <h2 className="md:hidden text-color-2 font-bold text-xl mt-5">
          Register
        </h2>
        <section className="md:flex items-center ">
          <div className="md:flex-0 lg:flex-1 mt-12 flex justify-center">
            <div
              className="relative w-52 h-52 md:w-80 md:h-80 lg:w-96 lg:h-96 invisible"
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
                className=" absolute bottom-20 -right-10 md:bottom-0 md:right-0 md:top-3 md:left-12"
                id="img"
              />

              <Image
                src={stargray}
                alt=""
                width={12}
                className=" absolute hidden md:block md:bottom-0 md:left-[4.3rem]"
                id="img"
              />

              <Image
                src={starpu}
                alt=""
                width={12}
                className="absolute hidden md:block md:bottom-20 md:right-10"
                id="img"
              />
            </div>
          </div>

          <div
            className="md:flex-1 mt-8 text-white invisible"
            ref={formCardRef}
          >
            <div className="md:border md:p-5 lg:p-10 md:rounded-md md:border-[#FFFFFF08] md:shadow-2xl md:bg-[#FFFFFF08] relative">
              <Image
                src={stargray}
                alt=""
                width={17}
                className="absolute hidden md:block top-4 right-28"
                id="img"
              />
              <Image
                src={star}
                alt=""
                width={10}
                className="absolute hidden md:block -bottom-4 right-16"
                id="img"
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
                onSubmit={handleSubmit}
                action=""
                method="post"
                className="relative"
              >
                <Image
                  src={stargray}
                  alt=""
                  width={15}
                  className="absolute top-5 -left-7 md:hidden"
                  id="img"
                />

                <Image
                  src={starpu}
                  alt=""
                  width={10}
                  className="absolute bottom-[15.5rem] -right-5 md:hidden"
                  id="img"
                />
                <div className="flex flex-col gap-5 md:gap-3 md:grid grid-cols-2 grid-rows-2">
                  <div className="space-y-2 col-span-1">
                    <label htmlFor="teamName">{"Team's Name"}</label>
                    <input
                      value={values.teamName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      name="teamName"
                      required
                      placeholder="Enter the name of your group"
                      className="w-full h-[47px] rounded-md pl-7 md:pl-2 border-2 border-[rgba(255, 255, 255, 1)] bg-transparent  text-white md:placeholder:text-xs xl:placeholder:text-base focus:outline-fuchsia-900 outline-2 focus:outline focus:border-none"
                    />
                    {errors.teamName && touched.teamName && (
                      <div className="text-red-500">{errors.teamName}</div>
                    )}
                  </div>

                  <div className="space-y-2 col-span-1">
                    <label htmlFor="phone">Phone</label>
                    <input
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="phone"
                      name="phone"
                      required
                      placeholder="Enter your phone number "
                      className="w-full h-[47px] rounded-md pl-7 md:pl-2 border-2 border-[rgba(255, 255, 255, 1)] bg-transparent  text-white md:placeholder:text-xs xl:placeholder:text-base focus:outline-fuchsia-900 outline-2 focus:outline focus:border-none"
                    />
                    {errors.phone && touched.phone && (
                      <div className="text-red-500">{errors.phone}</div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email">Email</label>
                    <input
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="email"
                      name="email"
                      required
                      placeholder="Enter your email address "
                      className="w-full h-[47px] rounded-md pl-7 md:pl-2 border-2 border-[rgba(255, 255, 255, 1)] bg-transparent text-white md:placeholder:text-xs xl:placeholder:text-base focus:outline-fuchsia-900 outline-2 focus:outline focus:border-none"
                    />
                    {errors.email && touched.email && (
                      <div className="text-red-500">{errors.email}</div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="projectTopic">Project Topic</label>
                    <input
                      value={values.projectTopic}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      name="projectTopic"
                      required
                      placeholder="What is your group project topic "
                      className="w-full h-[47px] rounded-md pl-7 md:pl-2 border-2 border-[rgba(255, 255, 255, 1)] bg-transparent text-white md:placeholder:text-xs xl:placeholder:text-base focus:outline-fuchsia-900 outline-2 focus:outline focus:border-none"
                    />
                    {errors.projectTopic && touched.projectTopic && (
                      <div className="text-red-500">{errors.projectTopic}</div>
                    )}
                  </div>

                  <div className="flex gap-8 md:gap-2">
                    <div className="flex flex-col flex-1 md:flex-0 space-y-1">
                      <label htmlFor="category">Category</label>
                      <select
                        value={values.category}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="category"
                        id="category"
                        required
                        className="outline-white h-[2.7rem] rounded-md bg-transparent border-2 border-white text-white px-3 text-sm md:text-xs xl:text-base focus:outline-fuchsia-900 outline-2 focus:outline focus:border-none cursor-pointer"
                      >
                        <option className="text-white bg-[#150e28]" value="">
                          Select your category
                        </option>
                        <option
                          className="text-white bg-[#150e28]"
                          value="entertainment"
                        >
                          Business
                        </option>
                        <option
                          className="text-white bg-[#150e28]"
                          value="technology"
                        >
                          Technology
                        </option>
                      </select>
                      {errors.category && touched.category && (
                        <div className="text-red-500">{errors.category}</div>
                      )}
                    </div>

                    <div className="md:hidden flex flex-col flex-0 md:flex-1 space-y-1">
                      <label htmlFor="groupSize">Group Size</label>
                      <select
                        value={values.groupSize}
                        onChange={handleChange}
                        name="groupSize"
                        id="groupSize"
                        required
                        className={`${
                          errors.groupSize ? "border-red-500" : ""
                        }"outline-white h-[2.7rem] rounded-md bg-transparent border-2 border-white text-white px-4 md:text-xs xl:text-base focus:outline-fuchsia-900 outline-2 focus:outline focus:border-none cursor-pointer`}
                      >
                        <option className="text-white bg-[#150e28]" value="">
                          Select
                        </option>
                        <option className="text-white bg-[#150e28]" value="1-5">
                          1-5
                        </option>
                        <option
                          className="text-white bg-[#150e28]"
                          value="6-20"
                        >
                          6-20
                        </option>
                      </select>
                      {errors.groupSize && touched.groupSize && (
                        <div className="text-red-500">{errors.groupSize}</div>
                      )}
                    </div>
                  </div>

                  <div className="hidden md:flex flex-col space-y-1">
                    <label htmlFor="groupSize">Group Size</label>
                    <select
                      value={values.groupSize}
                      placeholder={values.groupSize}
                      onChange={handleChange}
                      name="groupSize"
                      id="groupSize"
                      required
                      className={`${
                        errors.groupSize && touched.groupSize
                          ? "border-red-500 outline-white h-[2.7rem] rounded-md bg-transparent border-2 text-white px-4 md:text-xs xl:text-base focus:outline-fuchsia-900 outline-2 focus:outline focus:border-none cursor-pointer"
                          : "outline-white h-[2.7rem] rounded-md bg-transparent border-2 border-white text-white px-4 md:text-xs xl:text-base focus:outline-fuchsia-900 outline-2 focus:outline focus:border-none cursor-pointer"
                      }`}
                    >
                      <option className="text-white bg-[#150e28]" value="">
                        Select
                      </option>
                      <option className="text-white bg-[#150e28]" value="1-5">
                        1-5
                      </option>
                      <option className="text-white bg-[#150e28]" value="6-20">
                        6-20
                      </option>
                    </select>
                    {errors.groupSize && touched.groupSize && (
                      <div className="text-red-500">{errors.groupSize}</div>
                    )}
                  </div>
                </div>

                <p className="text-xs italic text-[#FF26B9] my-5">
                  Please review your registration details before submitting
                </p>

                <div className="flex gap-1">
                  <input
                    onChange={handleChange}
                    type="checkbox"
                    name="privacyPolicy"
                    required
                    id="privacyPolicy"
                    className="bg-transparent cursor-pointer w-4 accent-[#150e28]"
                  />
                  <p className="text-xs">
                    I agreed with the event terms and conditions and privacy
                    policy
                  </p>
                </div>
                {errors.privacyPolicy && touched.privacyPolicy && (
                  <div className="text-red-500">{errors.privacyPolicy}</div>
                )}

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
