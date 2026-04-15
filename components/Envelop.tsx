"use client";
import { useState } from "react";

export function Envelop({ openEnvelope, setOpenEnvelope }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`${openEnvelope ? "hidden" : ""} bg-[#EFCCC8] w-screen h-dvh overflow-hidden flex py-50 `}
    >
      <div className=" m-auto mt-10 relative w-75 h-25 md:w-150 md:h-50">
        <div className="TopBlack absolute z-5 md:-top-100 md:w-400 md:h-100 -top-50 w-200 h-50 bg-[#EFCCC8]"></div>
        <div className="BottomBlack absolute z-10 md:top-100 md:-right-50 md:w-400 md:h-100 top-50 -right-25 w-200 h-200 bg-[#EFCCC8]"></div>
        <div className="LeftBlack absolute z-10 md:-left-100 md:-top-50 md:w-100 md:h-300 -left-50 -top-25 w-50 h-150 bg-[#EFCCC8]"></div>
        <div className="RightBlack absolute z-10 md:-right-100 md:-top-50 md:w-100 md:h-300 -right-50 -top-25 w-50 h-150 bg-[#EFCCC8]"></div>

        {/* <div className=" absolute z-0 md:top-0 md:w-150 md:h-100  top-0 w-75 h-50 bg-[#ffffff]"></div> */}

        <div
          
          className={`rounded-xs absolute ${open ? " animate-bounceY z-50 w-70 h-45 " : ""} bg-[#ffffff] grid content-center gap-3 md:top-5 md:w-140 md:h-90 md:left-5 top-2.5 left-2.5  text-vrayi text-center text-base`}
        >
          <p className="FontArmDecorativeU">
           Բացիր այս փոքրիկ ծրարը․․․<br />
          </p>
          <button
            onClick={() => setOpenEnvelope(true)}
            className="FontArmDecorativeU cursor-pointer bg-[#EFCCC8] py-1 px-2 rounded-xs w-max m-auto"
          >
            Բացել
          </button>
        </div>

        <div
          className={`absolute ${open ? "z-5" : "z-1"} transition-all duration-100 md:-top-54 md:left-22 md:w-106 md:h-106 -top-27 left-11 w-53 h-53 rotate-45`}
          style={{ background: "linear-gradient(125deg, #ffffff, #edcec6)" }}
        ></div>
        <div
          className={`RightGreen  ${open ? "z-6" : "z-1"} absolute z-2 md:top-16 md:left-85 md:w-106 md:h-140 top-8 left-42.5 w-53 h-70 rotate-45`}
          style={{ background: "linear-gradient(-90deg, #ffffff, #edcec6)" }}
        ></div>
        <div
          className={`LeftGreen  ${open ? "z-6" : "z-1"} absolute z-2 md:top-11 md:right-90 md:w-140 md:h-106 top-5.5 right-45 w-70 h-53  rotate-45`}
          style={{ background: "linear-gradient(90deg, #ffffff, #edcec6)" }}
        ></div>

        <img
          src="/forenvelope.png"
          alt="envelop"
          onClick={() => setOpen(!open)}
          className={` ${open ? "opacity-0" : "opacity-100"} transition-all duration-100  absolute cursor-pointer md:top-50 md:left-60 md:w-30 md:h-30 top-25 left-30 z-20 w-15 h-15 `}
        />
      </div>
    </div>
  );
}
