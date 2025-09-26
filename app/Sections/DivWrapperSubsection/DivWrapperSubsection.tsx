import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";

export default function DivWrapperSubsection  ()  {


  return (
    <section className="flex flex-col w-full items-start relative">
      <header className="flex items-center justify-between gap-[270px] max-[1100px]:gap-[150px]  max-[1000px]:gap-[50px] max-[800px]:flex-col max-[800px]:items-end max-[767px]:gap-[20px] px-[162px] max-[1700px]:px-[50px] max-[767px]:px-[25px] py-[120px] max-[1000px]:py-10 relative self-stretch w-full flex-[0_0_auto] bg-[#a29bfe]/24 border-t border-t border-b border-solid border-[#262626]">
        <div className="flex flex-col items-start justify-center gap-4 relative flex-1 self-stretch grow">
          <Badge className="bg-[#a29bfe]/50 text-white text-xl max-[1500px]:text-lg max-[1000px]:text-base max-[767px]:text-sm max-[767px]:leading-[24px] font-medium font-['Inter'] tracking-[-3%] leading-[30px] px-2.5 py-1.5 h-auto">
              Your Gateway to In-Depth Information
          </Badge>

          <h1 className="font-Kumbh font-medium text-white text-[58px] max-[1500px]:text-[40px] max-[1000px]:text-[36px] max-[767px]:text-[28px] tracking-[-3%] leading-[130%]">
            Unlock Valuable Knowledge with FutureTech&#39;s Resources
          </h1>
        </div>

        <Button className="bg-[#a29bfe] hover:bg-[#a29bfe]/90 cursor-pointer transform transition-transform duration-300 hover:scale-90 text-white text-lg max-[1500px]:text-base max-[767px]:text-sm max-[767px]:leading-[24px] font-regular font-['Inter'] tracking-[-3%] leading-[27px] px-6 py-[18px] max-[1000px]:px-[15] max-[1000px]:py-[12px] rounded-xl border border-solid border-[#262626] h-auto">
            View All Resources
            <img className="w-6 h-6  max-[767px]:w-4 max-[767px]:h-4  max-[1000px]:w-5 max-[1000px]:h-5" alt="Icon" src="/icon-arrow-white.png" />
        </Button>
      </header>
    </section>
  );
};
