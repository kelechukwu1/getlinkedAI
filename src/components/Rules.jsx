"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const Rules = () => {
  const ruleTextRef = useRef();
  const ruleImgRef = useRef();

  useEffect(() => {
    const ruleText = ruleTextRef.current;
    const ruleImg = ruleImgRef.current;

    // Animate the introduction
    const tlRules = gsap
      .timeline()
      .from(ruleImg, {
        opacity: 0,
        autoAlpha: 0,
        duration: 1,
      })
      .from("#ruleText", {
        opacity: 0,
        autoAlpha: 0,
        yPercent: 30,
      });

    ScrollTrigger.create({
      animation: tlRules,
      trigger: "#rulesContainer",
      start: "top center",
      end: "top 300px",
      scrub: 1,
    });
  }, []);

  return (
    <>
      <div
        className="relative gap-10 mx-10 my-10 text-white md:grid md:grid-cols-2 md:mx-0 md:justify-center md:items-center md:my-24"
        id="rulesContainer"
      >
        {/* background beautifications */}
        <div className="absolute">
          <Image
            src="/purpleLens.png"
            width={900}
            height={900}
            alt="purple frame"
            className="relative blur top-[-3.5rem] left-[-11rem] opacity-30"
          />
        </div>

        <div className="md:hidden absolute top-[10rem] left-[2rem]">
          <Image src={"/star.png"} width={10} height={10} alt="star image" />
        </div>
        <div className="md:hidden absolute top-[39.5rem] md:top-[18rem] md:left-[30rem] left-[5rem]">
          <Image src={"/star.png"} width={20} height={20} alt="star image" />
        </div>
        <div className="md:hidden absolute top-[23rem] left-[17rem] md:top-[2rem] md:left-[20rem]">
          <Image
            src={"/stargray.png"}
            width={20}
            height={20}
            alt="star image"
          />
        </div>
        <div className="absolute md:top-[4rem] top-[8rem] left-[19rem]">
          <Image
            src={"/stargray.png"}
            width={20}
            height={20}
            alt="star image"
          />
        </div>
        <div className="hidden md:block absolute top-[22rem] left-[43rem] md:left-[40rem]">
          <Image src={"/star.png"} width={20} height={20} alt="star image" />
        </div>

        <div className="items-center justify-center hidden text-center md:block md:w-full md:text-start">
          <div className="md:pl-32">
            <div className="text-2xl font-bold">Rules and</div>
            <div className="text-2xl font-bold text-color-2">Guidelines</div>
          </div>
          <div className="md:pl-32">
            {`Rules and Guidelines Our tech hackathon is a melting pot of
            visionaries, and its purpose is as clear as day: to shape the
            future. Whether you're a coding genius, a design maverick, or a
            concept wizard, you'll have the chance to transform your ideas into
            reality. Solving real-world problems, pushing the boundaries of
            technology, and creating solutions that can change the world, that's
            what we're all about!`}
          </div>
        </div>
        <div className="flex justify-center md:hidden md:ml-10 md:w-full">
          <Image
            src={"/rulesImg.png"}
            width={500}
            height={500}
            alt="woman reading rules"
          />
        </div>
        <div className="items-center justify-center text-center md:hidden md:w-full md:text-start">
          <div>
            <div className="text-2xl font-bold">Rules and</div>
            <div className="text-2xl font-bold text-color-2">Guidelines</div>
          </div>
          <div className="md:pr-32 invisible" id="ruleText">
            {`Rules and Guidelines Our tech hackathon is a melting pot of
            visionaries, and its purpose is as clear as day: to shape the
            future. Whether you're a coding genius, a design maverick, or a
            concept wizard, you'll have the chance to transform your ideas into
            reality. Solving real-world problems, pushing the boundaries of
            technology, and creating solutions that can change the world, that's
            what we're all about!`}
          </div>
        </div>
        <div
          className="justify-center hidden md:flex md:w-full invisible"
          ref={ruleImgRef}
        >
          <Image
            src={"/rulesImg.png"}
            width={500}
            height={500}
            alt="woman reading rules"
          />
        </div>
      </div>
    </>
  );
};

export default Rules;
