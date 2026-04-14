import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MusicPlayer } from "./music";
import { Footer } from "./footer";
import { TimeBox } from "./TimeBox";
import { first } from "@/data/data";

export function Event({ openEnvelope }: any) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (openEnvelope) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [openEnvelope]);
  
  return (
    <div
      className={`${openEnvelope ? "block" : "hidden"}`}
    >
      <div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={` ${openEnvelope ? "block" : "hidden"} fixed z-100 text-2xl  rounded-2xl bg-[#c5a7a773] right-7 top-7 w-15  h-15 flex justify-center items-center `}
        >
          <Image
            src="/formusic.png"
            alt="music"
            width={20}
            height={20}
            className="w-full p-3"
          />
        </button>

        <MusicPlayer isPlaying={isPlaying} />
      </div>

      <div>
        <div
          style={{ backgroundImage: 'url("/first.png")' }}
          className={` overflow-hidden rounded-xs h-screen bg-cover bg-center content-center  bg-[#ffffff] text-center text-base`}
        >
          <div className=" text-center flex flex-col gap-3  py-10 px-5">
            <h3 className="FontArmDecorativeU z-0 relative text-3xl text-vrayi">
              {first.txt1}
              <p className="FontArmDecorativeU absolute -z-1 text-4xl top-3 left-1/2 -translate-x-1/2 text-hetevi">
                {first.txt1}
              </p>
            </h3>
            <h3 className="FontArmDecorativeU relative z-0 text-2xl text-vrayi">
              {first.txt2}
              <p className="FontArmDecorativeU text-nowrap absolute -z-1 text-4xl top-3 left-1/2 -translate-x-1/2 text-hetevi">
                {first.txt2}
              </p>
            </h3>
            <h3 className="FontArmDecorativeU bold text-vrayi relative z-0 my-4 text-8xl">
              {first.age}
            </h3>
            <h3 className="FontArmDecorativeU relative z-0 text-xl text-vrayi">
              {first.txt3}
              <p className="FontArmDecorativeU absolute -z-1 text-4xl top-0 left-1/2 -translate-x-1/2 text-hetevi">
                {first.txt3}
              </p>
            </h3>
          </div>
          <TimeBox />
          <div className="mt-20 flex flex-col gap-3 text-vrayi px-4">
            <h2 className="FontArmDecorativeU w-max mx-auto text-4xl tracking-[13%]">
              {first.amis}
            </h2>
            <p className="FontArmDecorativeU w-max mx-auto text-4xl">
              {first.or} <span className="text-hetevi">|</span> {first.jam}
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
