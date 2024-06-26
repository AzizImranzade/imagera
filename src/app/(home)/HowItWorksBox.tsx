"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { howItWork } from "@/types";
import Image from "next/image";
interface Props {
  blockData: howItWork;
  order: number;
}
const HowItWorksBox: React.FC<Props> = ({ blockData, order }) => {
  return (
    <BackgroundGradient className=" text-white rounded-lg h-full cursor-pointer ">
      <div className="w-full relative h-full md:py-0 py-4 rounded-[22px] bg-foreground flex flex-col gap-y-6 items-center justify-center px-6 text-center">
        <div className="absolute -top-4 -left-4 rounded-full bg-foreground h-14 w-14 flex items-center justify-center font-bold border-2 border-white/60">
          {order + 1}
        </div>
        <div className="h-[13rem] w-full relative flex-shrink-0">
          <Image src={blockData.image} alt={blockData.title} fill />
        </div>
        <h2 className="text-2xl">{blockData.title}</h2>
        <p className="text-white/70">{blockData.text}</p>
      </div>
    </BackgroundGradient>
  );
};
export default HowItWorksBox;
