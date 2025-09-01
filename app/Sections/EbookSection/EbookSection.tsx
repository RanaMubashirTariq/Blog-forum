import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";



export default function EbookSection() {
    const whitepaperUsers = [
        { src: "/img-6.png", alt: "Image" },
        { src: "/img-7.png", alt: "Image" },
        { src: "/img-8.png", alt: "Image" },
        { src: "/img-11.png", alt: "Image" },
      ];


    return(
        <div className="flex items-center  max-[1100px]:flex-col max-[1100px]:items-start gap-20 max-[1000px]:gap-15 max-[767px]:gap-10 px-[162px] max-[1700px]:px-[50px] max-[767px]:px-[25px] max-[1100px]:py-20 max-[1000px]:py-10 relative self-stretch w-full flex-[0_0_auto] border-t border-solid border-[#262626]">
        <article className="inline-flex flex-col  items-start justify-center gap-[60px] max-[1100px]:gap-[30px] relative flex-[0_0_auto]">
          <div className="flex flex-col items-start justify-center gap-[50px] max-[1100px]:gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
            <img className="relative w-20 h-20 max-[1000px]:w-15  max-[1000px]:h-15" alt="Icon" src="/whitewapper.png" />

            <div className="flex flex-col  w-[519px] max-[1300px]:w-[300px] max-[1100px]:w-[100%] items-start gap-4 relative flex-[0_0_auto]">
              <h2 className="font-Kumbh font-semibold text-white text-[40px] max-[1000px]:text-[36px] max-[767px]:text-[28px] max-[767px]:leading-[24px]tracking-[-3%] leading-[150%]">
                Whitepapers
              </h2>

              <p className="font-['Inter'] font-regular text-[#98989a] text-lg max-[1500px]:text-base max-[767px]:text-sm  max-[767px]:leading-[24px] tracking-[-0.54px] leading-[27px]">
                Dive into comprehensive reports and analyses with our collection
                of whitepapers.
              </p>
            </div>

            <Button className="w-full bg-[#a29bfe] hover:bg-[#a29bfe]/90 cursor-pointer transform transition-transform duration-300 hover:scale-90 text-white text-lg max-[1500px]:text-base max-[767px]:text-sm max-[767px]:leading-[24px] font-normal font-['Inter'] tracking-[-3%] leading-[27px] px-6 py-[18px] max-[1000px]:px-[15] max-[1000px]:py-[12px] rounded-xl border border-solid border-[#262626] h-auto">
                Download Whitepapers Now
                <img className="w-6 h-6  max-[767px]:w-4 max-[767px]:h-4  max-[1000px]:w-5 max-[1000px]:h-5" alt="Icon" src="/icon-arrow-white.png" />
            </Button>
          </div>

          <Card className="inline-flex items-center gap-[50px] max-[1300px]:gap-[20px] p-[30px] max-[1300px]:px-[20px] relative flex-[0_0_auto] bg-[#a29bfe2b] rounded-[13px] border border-solid border-[#262626]">
            <CardContent className="inline-flex flex-col gap-1 flex-[0_0_auto] items-start relative p-0">
              <span className="relative text-[#98989a] text-lg max-[1500px]:text-base max-[767px]:text-sm max-[767px]:leading-[24px] font-normal font-['Inter'] tracking-[-3%] leading-[27px] whitespace-nowrap">
                Downloaded By
              </span>
              <span className="relative  font-['Inter'] font-semibold text-white text-2xl max-[1500px]:text-xl max-[767px]:text-lg max-[767px]:leading-[24px] tracking-[-0.72px] leading-9 whitespace-nowrap">
                10k + Users
              </span>
            </CardContent>

            <div className="inline-flex items-start p-2.5 relative flex-[0_0_auto] rounded-xl">
              {whitepaperUsers.map((user, index) => (
                <img
                  key={index}
                  className={`w-[54px] h-[54px] max-[1300px]:w-12 max-[1300px]:h-12 mt-[-2.00px] mb-[-2.00px] relative object-cover ${
                    index === 0
                      ? "ml-[-2.00px]"
                      : index === whitepaperUsers.length - 1
                        ? "mr-[-2.00px] ml-[-9px]"
                        : "ml-[-9px]"
                  }`}
                  alt={user.alt}
                  src={user.src}
                />
              ))}
            </div>
          </Card>
        </article>

        <aside className="flex flex-col items-end gap-[30px] max-[1300px]:gap-[20px] max-[1300px]:pl-10  max-[1100px]:pl-0 pl-20 py-20  max-[1100px]:py-0 relative flex-1 grow border-l max-[1100px]:border-l-0 border-solid border-[#262626]">
          <div className="flex items-center max-[767px]:flex-col max-[767px]:items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <h3 className="relative w-[242.5px] text-white text-[24px] max-[1500px]:text-xl max-[767px]:text-lg  font-normal font-['Inter'] tracking-[-3%] leading-[27px]">
              Topics Coverage
            </h3>
            <p className="flex-1 text-[#98989a] text-lg max-[1500px]:text-base max-[767px]:text-sm max-[767px]:leading-[24px] font-normal font-['Inter'] tracking-[-3%] leading-[27px]">
              Whitepapers cover quantum computing (20%), AI ethics (15%), space
              mining prospects (20%), AI in healthcare (15%), and renewable
              energy strategies (30%).
            </p>
          </div>

          <img
            className="self-stretch w-full h-[332px] max-[767px]:h-[200px] relative object-cover rounded-[12px]"
            alt="Image"
            src='/main-img-2.png'
          />

          <div className="flex items-start max-[600px]:flex-col  gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <Card className="inline-flex max-[600px]:w-full flex-col items-start justify-center gap-1 p-[30px] max-[1300px]:p-5 relative flex-[0_0_auto] bg-[#a29bfe2b] rounded-[13px] border border-solid border-[#262626]">
              <CardContent className="p-0">
                <p className="relative text-[#98989a] text-lg max-[1500px]:text-base max-[767px]:text-sm max-[767px]:leading-[24px] font-regular font-['Inter'] tracking-[-3%] leading-[27px]">
                  Total Whitepapers
                </p>
                <p className="relative text-white  mt-2 text-[20px] max-[1500px]:text-lg max-[767px]:text-base max-[767px]:leading-[24px] font-normal font-['Inter'] tracking-[-3%] leading-[27px] whitespace-nowrap">
                  Over 50 whitepapers
                </p>
              </CardContent>
            </Card>

            <Card className="flex items-center max-[600px]:w-full max-[414px]:flex-col max-[414px]:items-start gap-5 p-[30px] max-[1300px]:p-5 relative flex-1 grow bg-[#a29bfe2b] rounded-[13px] border border-solid border-[#262626]">
              <CardContent className="flex flex-col justify-center gap-1 flex-1 grow items-start relative p-0">
                <p className="relative text-white text-lg max-[1500px]:text-base max-[767px]:text-sm max-[767px]:leading-[24px] font-normal font-['Inter'] tracking-[-3%] leading-[27px]">
                  Download Formats
                </p>
                <p className="relative text-white text-[20px] max-[1500px]:text-lg max-[767px]:text-base max-[767px]:leading-[24px] font-normal font-['Inter'] tracking-[-3%] leading-[27px]">
                  PDF format for access.
                </p>
              </CardContent>

              <Button className="z-11 cursor-pointer transform transition-transform duration-300 hover:scale-90 inline-flex max-[414px]:w-[100%] items-center gap-2.5 px-6 py-[18px]  relative flex-[0_0_auto] bg-[#a29bfe]/50 rounded-[10px] border border-solid border-[#262626] hover:bg-[#a29bfe50]/90 h-auto">
                <span className="relative text-white text-lg max-[1500px]:text-base max-[767px]:text-sm max-[767px]:leading-[24px] font-normal font-['Inter'] tracking-[-3%] leading-[27px] whitespace-nowrap">
                  Preview
                </span>
                <img className="w-6 h-6  max-[767px]:w-4 max-[767px]:h-4  max-[1000px]:w-5 max-[1000px]:h-5" alt="Icon" src="/icon-eye.png"/>
              </Button>
            </Card>
          </div>

          <Card className="flex flex-col justify-center gap-1 p-[30px] max-[1300px]:p-5 self-stretch w-full flex-[0_0_auto] bg-[#a29bfe2b] rounded-[13px] border border-solid border-[#262626] items-start relative">
            <CardContent className="p-0 w-full">
              <p className="relative text-white text-lg max-[1500px]:text-base max-[767px]:text-sm max-[767px]:leading-[24px] font-normal font-['Inter'] tracking-[-3%] leading-[27px]">
                Average Author Expertise
              </p>
              <p className="text-white text-[20px] max-[1500px]:text-lg max-[767px]:text-base max-[767px]:leading-[24px] font-normal font-['Inter'] tracking-[-3%] leading-[27px]">
                Whitepapers are authored by subject matter experts with an
                average of 20 years of experience.
              </p>
            </CardContent>
          </Card>
        </aside>
      </div>
    );
}