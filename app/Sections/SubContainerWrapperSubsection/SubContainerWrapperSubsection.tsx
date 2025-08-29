import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

export default function SubContainerWrapperSubsection  () {
  const features = [
    {
      icon: "/icon.png",
      title: "Latest News Updates",
      subtitle: "Stay Current",
      description: "Over 1,000 articles published monthly",
    },
    {
      icon: "/icon-2.png",
      title: "Expert Contributors",
      subtitle: "Trusted Insights",
      description: "50+ renowned AI experts on our team",
    },
    {
      icon: "/icon-12.png",
      title: "Global Readership",
      subtitle: "Worldwide Impact",
      description: "2 million monthly readers",
    },
  ];

  return (
    <section className="w-full border-solid border-t border-b border-[#262626] px-[162px] max-[1700px]:px-[50px] max-[767px]:px-[25px] mt-[23px] relative z-10">
      <div className="flex items-start max-[767px]:flex-col  gap-20 max-[1100px]:gap-5">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <Card className="flex-1 bg-transparent border-0 shadow-none max-[767px]:w-[80%] max-[500px]:w-[90%]">
              <CardContent className="flex flex-col items-start gap-[30px] px-0 pt-[50px] max-[1000px]:pt-5">
                <div className="flex flex-col items-start gap-[30px] max-[1000px]:gap-5 w-full">
                  <img
                    className="w-[50px] h-[50px] max-[1000px]:w-10 max-[1000px]:h-10"
                    alt="Icon"
                    src={feature.icon}
                  />

                  <div className="flex items-center max-[767px]:between gap-5 max-[860px]:gap-2 max-[830px]:gap-10 max-[800px]:gap-6 w-full">
                    <div className="flex flex-col gap-1 flex-1">
                      <h3 className="font-['Inter'] font-medium text-white text-xl max-[1500px]:text-lg tracking-[-0.60px] leading-[30px]">
                        {feature.title}
                      </h3>
                      <p className="font-['Inter'] font-regular text-[#7e7e81] text-lg max-[1500px]:text-base tracking-[-0.54px] leading-[27px]">
                        {feature.subtitle}
                      </p>
                    </div>

                    <Button variant="ghost" size="icon" className="cursor-pointer transform transition-transform duration-300 hover:scale-90 w-13 h-13 max-[1000px]:w-10 max-[1000px]:h-10 rounded-[50%] bg-[#a29bfe]">
                      <img alt="Button" src="/icon-arrow-black.png" className="w-6 h-6 max-[1000px]:w-5 max-[1000px]:h-5" />
                    </Button>
                  </div>
                </div>

                <p className="font-Kumbh font-regular text-[#98989a] text-xl max-[1500px]:text-lg tracking-[-0.60px] leading-[30px] w-full">
                  {feature.description}
                </p>
              </CardContent>
            </Card>

            {index < features.length - 1 && (
              <Separator orientation="vertical" className="h-[301px] max-[1000px]:h-[269px] w-px bg-[#262626] max-[767px]:hidden" />
            )}
            <div className="hidden max-[767px]:block w-[90%] h-px bg-[#262626]"></div>
          </React.Fragment>
          
        ))}
      </div>
    </section>
  );
};
