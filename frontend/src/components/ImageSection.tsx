import Image from "next/image";
import { Eclipse } from "@/Effects/BackgroundGradients";
import { LeftDesign, RightDesign } from "@/Effects/Design";
import { LeftShade, RightShade } from "@/Effects/Shades";

export default function ImageSection() {
  return (
    <div className="flex flex-col py-16 w-full mb-40 mt-10 justify-center items-center">
      <div className="relative flex items-center justify-center w-full max-w-7xl">
        <div className="absolute -left-30 2xl:-left-35 top-55 transform -translate-y-1/2 z-10 scale-95 2xl:scale-120">
          <LeftDesign />
        </div>
        <div className="absolute -left-40 2xl:-left-50 top-50 z-5 scale-75 2xl:scale-90 opacity-90">
          <LeftShade />
        </div>
        <div className="absolute -right-31 2xl:-right-40 top-55 transform -translate-y-1/2 z-10 scale-85 2xl:scale-110">
          <RightDesign />
        </div>
        <div className="absolute -right-40 2xl:-right-50 top-50 z-5 scale-75 2xl:scale-90 opacity-90">
          <RightShade />
        </div>
        <div className="relative z-20 w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl  pl-2 pr-2 md:px-2 bg-gradient-to-l from-[#999999]/8 from-80% via-black via-90% to-[#999999]/8 to-100% rounded-tl-[38.66px] rounded-tr-[38.66px] rounded-bl-[77.32px] rounded-br-[77.32px] ">
          <div
            className="absolute left-0 bottom-0 right-0 top-0 pointer-events-none z-20 rounded-tl-[38.66px] rounded-tr-[38.66px]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(153,153,153,0.08) 80%, rgba(0,0,0,1) 80%)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none z-40"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.9) 90%, rgba(0,0,0,1) 100%)",
            }}
          />
          <div className="relative">
            <div
              className="relative w-full h-[6.77px] blur-[4.83px] mx-auto z-20"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,32,29,0) 10%, rgba(2,242,242,1) 30%, rgba(2,242,242,1) 70%, rgba(0,32,29,0) 90%)",
              }}
            />
            <Eclipse />
          </div>
          <div className="relative z-30">
            <Image src="/Image.png" alt="Image" width={1000} height={1000} />
          </div>
        </div>
      </div>
    </div>
  );
}
