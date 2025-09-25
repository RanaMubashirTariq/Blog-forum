import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";


export default function SectionComponentNodeSubsection  ()  {
  const profileImages = [
    {
      src: "/img-9.png",
      alt: "Profile 1",
    },
    {
      src: "/img-2.png",
      alt: "Profile 2",
    },
    {
      src: "/img-3.png",
      alt: "Profile 3",
    },
    {
      src: "/img-4.png",
      alt: "Profile 4",
    },
  ];

  const statisticsData = [
    {
      value: "300",
      suffix: "+",
      label: "Resources available",
    },
    {
      value: "12k",
      suffix: "+",
      label: "Total Downloads",
    },
    {
      value: "10k",
      suffix: "+",
      label: "Active Users",
    },
  ];

  return (
    <section className="w-full h-auto relative pl-[162px] max-[1700px]:pl-[50px] max-[767px]:px-[25px] pt-[110px] max-[1000px]:pt-[200px] max-[767px]:pt-[150px] max-[344px]:pt-[170px]">
    <div className="flex flex-col w-full max-w-[893px] max-[1500px]:max-w-[650px] max-[1100px]:max-w-[450px] max-[1000px]:max-w-[390px] max-[767px]:max-w-[100%]  items-start gap-[30px] max-[767px]:gap-5">
      <header className=" flex flex-col items-start gap-[27px] max-[767px]:gap-5 max-[500px]:gap-4 relative  z-11">
        <h1 className="w-full  font-Kumbh font-medium text-[#666666] text-[30px] max-[1500px]:text-[24px] max-[1000px]:text-[20px] max-[767px]:text-[16px]  tracking-[-3%] leading-[120%]">
          Your Journey to Tomorrow Begins Here
        </h1>

        <div className="flex flex-col gap-5   w-full items-start relative">
          <h2 className="w-full   font-Kumbh font-medium text-[#a29bfe] text-[70px] max-[1500px]:text-[58px] max-[1100px]:text-[40px] max-[1000px]:text-[36px] max-[767px]:text-[28px]  tracking-[-3%] leading-[120%]">
            Explore the Frontiers of Artificial Intelligence
          </h2>

          <p className="max-w-[725px] font-regular text-[#7e7e81] text-lg max-[1500px]:text-[16px] max-[767px]:text-[14px] max-[767px]:leading-[24px]    tracking-[-0.54px] leading-[27px] font-['Inter']">
            Welcome to the epicenter of AI innovation. FutureTech AI News is
            your passport to a world where machines think, learn, and reshape
            the future. Join us on this visionary expedition into the heart of
            AI.
          </p>
        </div>
      </header>

      <div className="flex flex-col max-w-[573px] items-start gap-[30px] max-[767px]:gap-5 relative z-10">
        <div className="flex flex-col items-start gap-[30px] max-[767px]:gap-5  relative w-full">
          <div className="inline-flex items-start p-2.5 relative rounded-[100px]">
            {profileImages.map((image, index) => (
              <img
                key={`profile-${index}`}
                className={`w-[60px] h-[60px] relative object-cover max-[1100px]:w-12 max-[1100px]:h-12 max-[767px]:w-10 max-[767px]:h-10 ${index > 0 ? "-ml-3.5" : ""}`}
                alt={image.alt}
                src={image.src}
              />
            ))}
          </div>

          <div className="flex flex-col gap-3.5 w-full items-start relative">
            <div className="flex flex-col items-start gap-3.5 relative w-full">
              <h3 className="w-full  font-['Inter'] font-medium text-white text-2xl max-[1500px]:text-[20px] max-[767px]:text-[16px]   tracking-[-0.72px] leading-9">
                Explore 1000+ resources
              </h3>

              <p className="w-full font[-Inter'] font-regular text-[#98989a] text-lg max-[1500px]:text-[16px]  max-[767px]:text-[14px] max-[767px]:leading-[24px]  tracking-[-0.54px] leading-[27px]">
                Over 1,000 articles on emerging tech trends and breakthroughs.
              </p>
            </div>
          </div>
        </div>

        <Button className="cursor-pointer transform transition-transform duration-300 hover:scale-90 inline-flex items-center gap-2.5 px-6 py-[18px] max-[767px]:px-[15px] max-[767px]:py-[12px] h-auto bg-[#a29bfe] rounded-xl border border-solid border-[#262626] hover:bg-[#a29bfe]/90 ">
          <span className=" font-['Inter'] font-regular text-white text-lg max-[1500px]:text-[16px] max-[767px]:text-[14px] max-[767px]:leading-[24px]  tracking-[-0.54px] leading-[27px] whitespace-nowrap">
            Explore Resources
          </span>
          <img className="w-6 h-6  max-[767px]:w-4 max-[767px]:h-4  max-[1000px]:w-5 max-[1000px]:h-5" alt="Icon" src="/icon-arrow-white.png" />
        </Button>
      </div>

      {/* Section two */}
    </div>
    <div className="w-[851px] max-[1300px]:w-[750px] max-[1100px]:w-[650px] max-[767px]:w-[500px] max-[550px]:w-full max-[500px]:mt-[10px] h-auto relative max-[1100px]:z-10">
          <Card className=" rounded-[29px] border border-solid border-[#4f4f4f80] bg-transparent">
            <CardContent className="inline-flex items-center  max-[550px]:flex max-[550px]:flex-col max-[550px]:items-center gap-[35px] max-[1300px]:gap-[20px] max-[1100px]:gap-5  max-[1500px]:px-[15px] px-[30px] py-0">
              {statisticsData.map((stat, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col w-[225px] max-[1300px]:w-[200px] max-[767px]:w-[150px] gap-2.5 px-0 py-[50px] max-[1100px]:py-[30px] max-[767px]:py-5 items-start relative">
                    <div className="relative font-['Inter'] font-semibold text-transparent text-[40px] max-[1500px]:text-[36px] max-[1000px]:text-[28px] max-[767px]:text-[24px] max-[767px]:leading-[24px]  text-center tracking-[-3%] leading-[150%]">
                      <span className="text-white ">
                        {stat.value}
                      </span>
                      <span className="text-[#a29bfe]">
                        {stat.suffix}
                      </span>
                    </div>
                    <div className="relative  font-['Inter'] font-regular text-[#98989a] text-lg max-[1500px]:text-[16px] max-[767px]:text-[14px] max-[767px]:leading-[24px]  text-center tracking-[-0.54px] leading-[27px]">
                      {stat.label}
                    </div>
                  </div>
                  {index < statisticsData.length - 1 && (
                    <Separator
                      orientation="vertical"
                      className="h-[197px] max-[1500px]:h-[139px] max-[767px]:h-[100px] max-[550px]:rotate-[90deg] max-[550px]:hidden  w-px bg-[#262626]"
                    />
                  )}
                  <div className="hidden max-[550px]:block w-[90%] h-px border-t "></div>
                </React.Fragment>
                
              ))}
            </CardContent>
          </Card>
          <div className="w-[145px] h-[525px] top-[561px] left-[1535px] rounded-[72.59px/262.64px] rotate-[90.14deg] blur-[212.6px] absolute bg-[#a29bfe]">
            <div className="w-[93px] h-[335px] top-32 left-[26px] rounded-[46.26px/167.71px] relative bg-[#ff30a0] blur-[212.6px]" />
          </div>
        </div>
            <img
              className="absolute w-[1070px] h-[965px] max-[1700px]:w-[850px] max-[1500px]:w-[725px] max-[1500px]:h-[932px] max-[1300px]:w-[650px] max-[1100px]:h-[862px]  max-[1000px]:w-[400px] max-[1000px]:h-[805px] max-[1000px]:top-[150px]  max-[800px]:h-[642px]  max-[767px]:hidden top-0 right-0 z-0"
              alt="Freepik assistant"
              src='/freepik-assistant.png'
            />
                   
   </section>         
  );
};
