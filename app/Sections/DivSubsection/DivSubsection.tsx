import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

export default function DivSubsection () {
  const testimonials = [
    {
      name: "Sarah Thompson",
      location: "San Francisco, USA",
      testimonial:
        "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.",
      profileImage: "/test-1.png",
    },
    {
      name: "Raj Patel",
      location: "Mumbai, India",
      testimonial:
        "The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions.",
      profileImage: "/test-2.png",
    },
    {
      name: "Emily Adams",
      location: "London, UK",
      testimonial:
        "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.",
      profileImage: "/test-3.png",
    },
    {
      name: "Alan Jackson",
      location: "Houston, USA",
      testimonial:
        "The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view of what lies beyond Earth.",
      profileImage: "/test-4.png",
    },
    {
      name: "Jessica Miller",
      location: "Boston, USA",
      testimonial:
        "The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics.",
      profileImage: "/test-5.png",
    },
    {
      name: "Diego Lopez",
      location: "Barcelona, Spain",
      testimonial:
        "The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability.",
      profileImage: "/test-6.png",
    },
  ];

  const stars = Array(5).fill(null);

  const TestimonialCard = ({
    testimonial,
    index,
  }: { testimonial: (typeof testimonials)[0]; index: number }) => (
    <div className="flex flex-col items-center gap-10 max-[767px]:gap-[25px] px-0 py-20 max-[1500px]:py-15 max-[1100px]:py-10 max-[900px]:py-5 relative flex-1 grow">
      <div className="flex items-center justify-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
        <Avatar className="w-[60px] h-[60px] max-[1500px]:w-12 max-[1500px]:h-12">
          <AvatarImage src={testimonial.profileImage} alt="Profile" />
          <AvatarFallback className="bg-[#a29bfe]/80 text-white">
            {testimonial.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>

        <div className="inline-flex flex-col gap-0.5 flex-[0_0_auto] items-start relative">
          <div className="relative text-white text-xl max-[1500px]:text-lg max-[1000px]:text-base max-[767px]:text-sm max-[767px]:leading-[24px] font-medium font-['Inter'] tracking-[-3%] leading-[30px] ">
            {testimonial.name}
          </div>
          <div className="relative text-[#666666] text-lg  max-[1500px]:text-base max-[767px]:text-sm max-[767px]:leading-[24px] font-regular font-['Inter'] tracking-[0] leading-[27px] ">
            {testimonial.location}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-start gap-[7px] px-4 py-2.5 relative flex-[0_0_auto] z-[1] bg-[#a29bfe80] rounded-[100px] border border-solid border-[#262626]">
          {stars.map((_, starIndex) => (
            <img
              key={starIndex}
              className="relative w-[19.31px] h-[18.56px] max-[767px]:w-[15px] max-[767px]:h-[15px]"
              alt="Shape"
              src="/star.png"
            />
          ))}
        </div>

        <Card className="flex gap-2.5 pt-[50px] pb-[30px] px-[30px] max-[1100px]:pb-5 max-[1100px]:px-5 self-stretch w-full flex-[0_0_auto] mt-[-23px] z-0 bg-[#a29bfe2b] rounded-xl border border-solid border-[#262626] items-start relative">
          <CardContent className="p-0">
            <div className="text-center relative text-white text-lg  max-[1500px]:text-base  max-[767px]:text-sm max-[767px]:leading-[24px] font-regular font-['Inter'] tracking-[0] leading-[27px] overflow-hidden text-ellipsis line-clamp-4">
              {testimonial.testimonial}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <section className="flex flex-col w-full items-start relative ">
      <header className="flex items-end  max-[767px]:flex-col  gap-[150px]  max-[800px]:gap-[50px] max-[767px]:gap-[20px] px-[162px] max-[1700px]:px-[50px] max-[767px]:px-[25px] py-20 max-[1000px]:py-10 py-[120px] max-[1000px]:py-[40px] relative self-stretch w-full flex-[0_0_auto] bg-[#a29bfe24] border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-neutral-800">
        <div className="flex flex-col items-start justify-center gap-4 flex-1">
          <Badge className="bg-[#a29bfe]/80 text-white text-xl max-[1500px]:text-lg max-[1000px]:text-base max-[767px]:text-sm max-[767px]:leading-[24px] font-medium font-['Inter'] tracking-[-3%] leading-[30px] px-2.5 py-1.5 h-auto">
              What Our Readers Say
          </Badge>

          <h2 className="font-Kumbh font-medium text-white text-[58px] max-[1500px]:text-[40px] max-[1000px]:text-[36px] max-[767px]:text-[28px] tracking-[-3%] leading-[130%]">
            Real Words from Real Readers
          </h2>
        </div>

        <Button className="bg-[#a29bfe] hover:bg-[#a29bfe]/90 cursor-pointer transform transition-transform duration-300 hover:scale-90 text-white text-lg max-[1500px]:text-base max-[767px]:text-sm max-[767px]:leading-[24px] font-regular font-['Inter'] tracking-[-3%] leading-[27px] px-6 py-[18px] max-[1000px]:px-[15] max-[1000px]:py-[12px] rounded-xl border border-solid border-[#262626] h-auto">
            View All Testimonials
          <img className="w-6 h-6  max-[767px]:w-4 max-[767px]:h-4  max-[1000px]:w-5 max-[1000px]:h-5" alt="Icon" src="/icon-arrow-white.png" />
        </Button>
      </header>

      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex item-start max-[500px]:flex-col  max-[900px]:hidden max-[500px]:block    gap-[50px] max-[1300px]:gap-[30px] max-[1100px]:gap-[30px] px-[162px]  max-[1700px]:px-[50px] max-[767px]:px-[25px]  py-0 relative self-stretch w-full flex-[0_0_auto] max-[500px]:border-b-0 border-b bordersolid border-[#262626]">
          {testimonials.slice(0,3).map((testimonial, index) => (
            <React.Fragment key={index + 3}>
              <TestimonialCard testimonial={testimonial} index={index + 3} />
              {index < 2 && (
                <Separator
                  orientation="vertical"
                  className="relative h-[469px] max-[1100px]:h-[369px] w-px bg-[#262626] max-[900px]:hidden"
                />
              )}
              <div className="w-full h-px bg-[#262626]"></div>
            </React.Fragment>
          ))}
        </div>

        {/* part-2 */}
        <div className="flex item-start max-[500px]:flex-col  max-[900px]:hidden max-[500px]:block  gap-[50px] max-[1300px]:gap-[30px] max-[1100px]:gap-[30px] px-[162px]  max-[1700px]:px-[50px] max-[767px]:px-[25px]  py-0 relative self-stretch w-full flex-[0_0_auto] max-[500px]:border-b-0 border-b border-solid border-[#262626]">
          {testimonials.slice(3,6).map((testimonial, index) => (
            <React.Fragment key={index+3}>
              <TestimonialCard testimonial={testimonial} index={index + 3} />
              {index < 2 && (
                <Separator
                  orientation="vertical"
                  className="relative h-[469px] max-[1100px]:h-[369px] w-px bg-[#262626] max-[900px]:hidden"
                />
              )}
              <div className="w-full h-px bg-[#262626]"></div>
            </React.Fragment>
          ))}
        </div>


        {/* This part for mobile section */}

        <div className="grid grid-cols-2  block min-[900px]:hidden max-[500px]:hidden  gap-[50px] max-[1300px]:gap-[30px] max-[1100px]:gap-[30px] px-[162px]  max-[1700px]:px-[50px] max-[767px]:px-[25px]  py-0 relative self-stretch w-full flex-[0_0_auto] border-b bordersolid border-[#262626]">
          {testimonials.map((testimonial, index) => (
            <React.Fragment key={index}>
              <TestimonialCard testimonial={testimonial} index={index} />
              {index < 2 && (
                <Separator
                  orientation="vertical"
                  className="relative h-[469px] max-[1100px]:h-[369px]  w-px bg-[#262626] rotate-[90deg] max-[900px]:hidden"
                />
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};
