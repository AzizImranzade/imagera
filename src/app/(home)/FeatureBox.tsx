import { Meteors } from "@/components/ui/meteors";
import { feature } from "@/types";
import React from "react";
interface Props {
  feature: feature;
}
const FeatureBox: React.FC<Props> = ({ feature }) => {
  return (
    <div className="text-white group cursor-pointer hover:scale-[1.01] h-auto  hover:-translate-y-3 transition-all rounded-lg relative overflow-hidden shadow-xl p-6 flex gap-y-8  flex-col shadow-cyan-500/10">
      <Meteors />
      <div className="flex  w-full justify-between items-center h-10">
        <h2 className="text-xl font-bold">{feature.title}</h2>
        <div className="  bg-white/20  group-hover:text-cyan-500 transition-all flex-shrink-0 backdrop-blur-sm flex items-center justify-center rounded-lg h-12 w-12 text-xl">
          {feature.icon}
        </div>
      </div>
      <p className="text-white/70 group-hover:text-white transition-all">
        {feature.text}
      </p>
    </div>
  );
};
export default FeatureBox;
