import Image from "next/image";
const Prizes = () => {
  return (
    <>
      <div className="relative bg-custom-color2">
        {/* background stars and frames */}
        <div className=" md:left-[30rem] md:top-[16rem] lg:top-[20rem] lg:left-[50rem] absolute top-[7rem] left-[19rem]">
          <Image src={"/star.png"} width={20} height={20} alt="star image" />
        </div>
        <div className="md:top-[6rem] md:left-[12rem] lg:left-[25rem] absolute top-[3rem] left-[2rem]">
          <Image src={"/star pu.png"} width={15} height={15} alt="star" />
        </div>

        <div className="md:left-[52rem] lg:left-[72rem] md:top-[20.5rem] absolute top-[33rem] left-[3rem]">
          <Image src={"/star.png"} width={15} height={15} alt="purple lens" />
        </div>
        <div className="md:top-[36rem] md:left-[44rem] lg:top-[37rem] lg:left-[51.2rem] absolute top-[38rem] left-[22rem]">
          <Image
            src={"/stargray.png"}
            width={20}
            height={20}
            alt="star image"
          />
        </div>
        <div className="md:top-[31rem] md:left-[13rem] lg:top-[36rem] lg:left-[20rem] absolute top-[55rem] left-[17rem]">
          <Image src={"/star.png"} width={15} height={15} alt="star" />
        </div>
        <div className=" md:hidden absolute top-[53rem] left-[20rem]">
          <Image
            src={"/purpleLens.png"}
            width={800}
            height={800}
            alt="purple lens"
            className="blur w-[30rem]"
          />
        </div>

        {/* background stars and frames end here*/}
        <div className="pt-20 pb-20 mx-10 text-white md:pt-0 md:flex md:justify-center md:text-center">
          <div className="md:hidden">
            <div className="text-center">
              <div my-5>
                <div className="text-2xl font-bold">Prizes and</div>
                <span className="text-2xl font-bold text-color-2">Rewards</span>
              </div>

              <div className="mt-5 mb-5">
                Hghlight of the prizes or rewards for winners and for
                participants.
              </div>
            </div>
          </div>

          <div className="absolute">
            <Image
              src="/purpleLens.png"
              width={300}
              height={300}
              alt="reward cup"
              className="relative blur top-[-3.5rem] md:top-[7rem] md:left-[-10rem] left-[-5rem] w-[30rem] opacity-40"
            />
          </div>

          <div className="justify-center mt-10 md:flex">
            <div className="md:mt-28">
              <Image
                src="/rewardCup.png"
                width={500}
                height={500}
                alt="reward cup"
              />
            </div>
            <div className="">
              <div className="hidden pb-10 md:block">
                <div className="text-start ">
                  <div>
                    <div className="text-2xl font-bold">Prizes and</div>
                    <span className="text-2xl font-bold text-color-2">
                      Rewards
                    </span>
                  </div>

                  <div className="mt-5 mb-5">
                    Hghlight of the prizes or rewards for winners and for
                    participants.
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Image
                  src="/Rewards.png"
                  width={500}
                  height={500}
                  alt="reward medals"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prizes;
