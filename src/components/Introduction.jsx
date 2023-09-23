"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Introduction = () => {
  const ideaRef = useRef();

  useEffect(() => {
    const ideaBulb = ideaRef.current;

    // Animate the introduction
    const tlIntro = gsap
      .timeline()
      .from(ideaBulb, {
        xPercent: -50,
        autoAlpha: 0,
        opacity: 0,
      })
      .from("#introText", {
        opacity: 0,
        y: -20,
      });

    ScrollTrigger.create({
      animation: tlIntro,
      trigger: "#introContainer",
      start: "top bottom",
      end: "top 300px",
      scrub: 1,
    });
  }, []);

  return (
    <div className="relative" id="introContainer">
      {/* background beautifications */}
      <div className="absolute top-[5rem] md:top-[6rem] left-[3rem] md:left-[9rem]">
        <Image src={"/sata gra.png"} width={15} height={15} alt="star image" />
      </div>

      <div className="hidden md:block absolute md:top-[3.5rem] md:left-[47rem] lg:left-[65rem]">
        <Image src={"/star pu.png"} width={20} height={20} alt="star image" />
      </div>

      <div className="md:hidden absolute top-[21rem] left-[23rem]">
        <Image src={"/star pu.png"} width={12} height={12} alt="star image" />
      </div>

      <div className="absolute top-[17rem] lg:top-[17rem] left-[12rem] lg:left-[29rem] md:left-[23rem] md:top-[17rem]">
        <Image src={"/arrow.png"} width={45} height={45} alt="star image" />
      </div>

      <div className="md:flex mx-10 md:mx-0 my-10 md:w-full md:my-32 items-center justify-center">
        <div
          className="flex justify-center md:w-full md:ml-10 invisible"
          ref={ideaRef}
        >
          <Image src={"/idea.png"} width={300} height={300} alt="big idea" />
        </div>
        <div className="text-center my-5 md:w-full md:text-start">
          <div className="text-2xl font-bold mt-5">
            Introduction to getlinked
          </div>
          <div className="text-color-2 text-2xl font-bold mb-5">
            tech Hackathon1.0
          </div>
          <div className="lg:pr-32 md:pr-24" id="introText">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
