import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export default function SubContainerSubsection  () {
  const features = [
    {
      title: "Quantity",
      description:
        "Over 1,000 articles on emerging tech trends and breakthroughs.",
    },
    {
      title: "Variety",
      description:
        "Articles cover fields like AI, robotics, biotechnology, and more.",
    },
    {
      title: "Frequency",
      description: "Fresh content added daily to keep you up to date.",
    },
    {
      title: "Authoritative",
      description:
        "Written by our team of tech experts and industry professionals.",
    },
  ];

  return (
    <section className="w-full max-[1050px]:py-[80px] max-[1000px]:py-[40px] px-[162px] max-[1000px]:py-[40px] max-[1700px]:px-[50px] max-[767px]:px-[25px] ">
      <div className="flex max-[1050px]:flex-col flex-row gap-20 max-[1500px]:gap-23 max-[1300px]:gap-[91.5px] justify-between max-[1050px]:gap-12 max-[767px]:gap-5 ">
        <div className="flex flex-col items-start justify-center gap-[50px] max-[1000px]:gap-[30px] max-[767px]:gap-[20px]">
          <img className="w-20 h-20 max-[1000px]:w-15  max-[1000px]:h-15" alt="Icon" src="/icon-5.png" />

          <div className="flex flex-col items-start gap-4 w-full max-w-[519px] max-[1050px]:max-w-full">
            <h2 className="font-Kumbh font-semibold text-white text-[40px] max-[1000px]:text-[36px] max-[767px]:text-[28px] max-[767px]:leading-[130%] tracking-[-3%] leading-[150%]">
              Future Technology Blog
            </h2>

            <p className="font-['Inter'] font-regular text-[#98989a] text-lg max-[1500px]:text-base max-[767px]:text-sm max-[767px]:leading-[24px] tracking-[-0.54px] leading-[27px]">
              Stay informed with our blog section dedicated to future
              technology.
            </p>
          </div>
        </div>

        <div className="flex-1 pl-20 max-[1050px]:pl-0 max-[1050px]:border-0 border-l border-[#262626] py-20 max-[1050px]:py-0  ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] h-full">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="z-11 bg-[#a29bfe2b] border-[#262626] rounded-xl hover:bg-[#a29bfe4b] transition-colors duration-300"
              >
                <CardContent className="p-10 max-[500px]:p-5 flex flex-col gap-5">
                  <h3 className="font-['Inter'] font-medium text-white text-2xl max-[1500px]:text-[20px] max-[767px]:text-lg max-[767px]:leading-[24px] tracking-[-3%] leading-[150%]">
                    {feature.title}
                  </h3>
                  <p className="font-['Inter'] font-regular text-[#98989a] text-lg  max-[1500px]:text-[16px] max-[767px]:text-sm max-[767px]:leading-[24px] tracking-[-0.54px] leading-[27px]">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
