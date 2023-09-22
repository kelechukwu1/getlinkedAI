import React from "react";
import Socials from "@/components/Socials";

import BackHome from "@/components/BackHome";
import star from "../../../public/star.png";
import stargray from "../../../public/stargray.png";
import sataGra from "../../../public/sata gra.png";
import Image from "next/image";

const page = () => {
  return (
    <main className=" w-[80%] mx-auto md:mt-10">
      <section className="md:flex items-center gap-10">
        <div className="relative md:flex-1">
          <Image
            src={sataGra}
            alt=""
            width={15}
            className="absolute -top-[5.5rem] left-4"
          />
          <div className="hidden md:block md:flex-1">
            <h2 className="text-[32px] font-semibold text-color-2">
              Get in touch
            </h2>
            <div className="text-white space-y-5">
              <p>Contact information</p>
              <div>
                <p>27, Alara Street</p>
                <p>Yaba 100012</p>
                <p>Lagos State</p>
              </div>
              <p>Call Us : 07067981819</p>
              <p>we are open from Monday-Friday 08:00am - 05:00pm</p>
            </div>

            <p className="text-color-2 mt-10 mb-2">Share on</p>
            <div className="mb-10 flex">
              <Socials />
            </div>
          </div>
        </div>

        <div className="w-[95%] md:w-full md:flex-1 mx-auto mt-10 md:border md:p-14 lg:p-10 md:rounded-md md:border-[#FFFFFF08] md:shadow-2xl md:bg-[#FFFFFF08]">
          <BackHome />
          <div className="text-color-2 text-2xl md:text-lg font-semibold relative">
            <h2>Questions or need assistance?</h2>
            <h2>Let us know about it</h2>
            <Image
              src={stargray}
              alt=""
              width={15}
              className="absolute top-9 right-4 md:-top-28 md:-right-9 "
            />
            <Image
              src={sataGra}
              alt=""
              width={15}
              className="absolute -top-10 right-[9.5rem] md:hidden"
            />
          </div>
          <p className="text-white my-7 md:hidden">
            Email us below to any question related to our event
          </p>

          <form
            action=""
            method="post"
            className="flex flex-col gap-y-5 md:mt-8 relative"
          >
            <input
              type="text"
              placeholder="First Name"
              className="w-full h-[47px] rounded-md pl-7 border border-[rgba(255, 255, 255, 1)] bg-transparent placeholder:text-white drop-shadow-[0px_4px_4px_0px rgba(0, 0, 0, 0.25)] text-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full h-[47px] rounded-md pl-7 border border-[rgba(255, 255, 255, 1)] bg-transparent placeholder:text-white drop-shadow-[0px_4px_4px_0px rgba(0, 0, 0, 0.25)] text-white"
            />

            <textarea
              name="message"
              id=""
              cols="30"
              rows="5"
              placeholder="Message"
              className="w-full rounded-md pl-7 pt-7 border border-[rgba(255, 255, 255, 1)] bg-transparent placeholder:text-white text-white drop-shadow-[0px_4px_4px_0px rgba(0, 0, 0, 0.25)]"
            />

            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white text-xl bg-gradient-to-r from-pink-500 via-purple-500 py-4 px-16 text-center rounded-md hover:bg-pink-500 transition-all duration-500 w-fit"
              >
                Submit
              </button>
            </div>

            <Image
              src={sataGra}
              alt=""
              width={12}
              className="absolute bottom-5 -left-3 md:-left-16 lg:-left-[3.2rem] md:w-[18px]"
            />

            <Image
              src={star}
              alt=""
              width={12}
              className="absolute bottom-[5.5rem] -right-4 md:-bottom-10 md:-right-24 md:w-[15px]"
            />
          </form>

          <div className="md:hidden">
            <p className="text-color-2 text-center mt-10 mb-2">Share on</p>
            <div className="mb-10">
              <Socials />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
