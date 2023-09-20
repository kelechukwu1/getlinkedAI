import React from "react";
import Socials from "@/components/Socials";

import BackHome from "@/components/BackHome";
import star from "../../../public/star.png";
import stargray from "../../../public/stargray.png";
import sataGra from "../../../public/sata gra.png";
import Image from "next/image";

const page = () => {
  return (
    <main className=" w-[80%] mx-auto">
      <section className="md:flex items-center gap-10">
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

        <div className="w-[85%] md:w-full md:flex-1 mx-auto mt-10 md:border md:p-14 lg:p-10 md:rounded-md md:border-transparent md:shadow-2xl md:shadow-[0px_4px_4px_0px rgba(0, 0, 0, 0.25)]">
          <BackHome />
          <div className="text-color-2 text-2xl md:text-lg font-semibold ">
            <h2>Questions or need assistance?</h2>
            <h2>Let us know about it</h2>
          </div>
          <p className="text-white my-7">
            Email us below to any question related to our event
          </p>

          <form action="" method="post" className="flex flex-col gap-y-5">
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
          </form>

          <div className="md:hidden">
            <p className="text-color-2 text-center mt-10 mb-2">Share on</p>
            <div className="mb-10">
              <Socials />
            </div>
          </div>
        </div>
      </section>

      {/* <Image
        src={star}
        alt=""
        width={20}
        className="absolute right-10 bottom-[19vh] md:right-14 md:bottom-[8vh] lg:bottom-[13vh]"
      />

      <Image
        src={stargray}
        alt=""
        width={20}
        className="absolute top-[23vh] right-12"
      />
      <Image
        src={sataGra}
        alt=""
        width={15}
        className="absolute top-[12vh] left-[35vh]"
      />

      <Image
        src={sataGra}
        alt=""
        width={15}
        className="absolute bottom-[6vh] left-[10vh] md:bottom-[30px] md:left-[64vh]"
      /> */}
    </main>
  );
};

export default page;
