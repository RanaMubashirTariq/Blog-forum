'use client'
import React from "react";
import Link from "next/link"; // Import Next.js Link component
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const featureCards = [
  {
    title: "Resource Access",
    description:
      "Visitors can access a wide range of resources, including ebooks, whitepapers, reports.",
    path: "/resources", // Add path for each feature card
  },
  {
    title: "Community Forum",
    description:
      "Join our active community forum to discuss industry trends, share insights, and collaborate with peers.",
    path: "/forum",
  },
  {
    title: "Tech Events",
    description:
      "Stay updated on upcoming tech events, webinars, and conferences to enhance your knowledge.",
    path: "/events",
  },
];

const footerSections = [
  {
    title: "Home",
    links: [
      { text: "Features", id: "features", path: "/#features", hasNew: false },
      { text: "Blogs", id: "podcasts", path: "/#podcasts", hasNew: false },
      { text: "Resources", id: "resources", path: "/#resources", hasNew: true },
      { text: "Testimonials", id: "testimonials", path: "/#testimonials", hasNew: false },
      { text: "Contact Us", id: "contact", path: "/#contact", hasNew: false },
      { text: "Newsletter", id: "news", path: "/#newsletter", hasNew: false },
    ],
  },
  {
    title: "News",
    links: [
      { text: "Trending Stories", path: "/news/trending", hasNew: false },
      { text: "Featured Videos", path: "/news/videos", hasNew: false },
      { text: "Technology", path: "/news/technology", hasNew: false },
      { text: "Health", path: "/news/health", hasNew: false },
      { text: "Politics", path: "/news/politics", hasNew: false },
      { text: "Environment", path: "/news/environment", hasNew: false },
    ],
  },
  {
    title: "Blogs",
    links: [
      { text: "Quantum Computing", path: "/blogs/quantum-computing", hasNew: false },
      { text: "AI Ethics", path: "/blogs/ai-ethics", hasNew: false },
      { text: "Space Exploration", path: "/blogs/space-exploration", hasNew: false },
      { text: "Biotechnology", path: "/blogs/biotechnology", hasNew: true },
      { text: "Renewable Energy", path: "/blogs/renewable-energy", hasNew: false },
      { text: "Biohacking", path: "/blogs/biohacking", hasNew: false },
    ],
  },
  {
    title: "Podcasts",
    links: [
      { text: "AI Revolution", path: "/podcasts/ai-revolution", hasNew: false },
      { text: "TechTalk AI", path: "/podcasts/techtalk-ai", hasNew: true },
      { text: "AI Conversations", path: "/podcasts/ai-conversations", hasNew: false },
    ],
  },
];

const resourceItems = [
  { name: "Whitepapers", path: "/#whitepaper" },
  { name: "Ebooks", path: "/#ebooks" },
  { name: "Reports", path: "/#reports" },
  { name: "Research Papers", path: "/#research" },
];

export default function ContainerWrapperSubsection() {
  // Function to handle smooth scrolling for anchor links
  const handleScrollToSection = (id: string) => {
    const sectionId = id.startsWith('#') ? id : `#${id}`;
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    <div className="flex flex-col w-full items-start relative z-20">
      <div className="flex flex-col items-start justify-center gap-[100px] max-[767px]:gap-10 px-[162px] max-[1700px]:px-[50px] max-[767px]:px-[25px] py-[120px] max-[1000px]:py-10 relative self-stretch w-full flex-[0_0_auto] bg-[#a29bfe2b] border-t border-solid border-b border-solid border-[#262626]">
        <div className="flex items-center max-[767px]:flex-col gap-20 max-[1000px]:gap-10 max-[767px]:gap-8 relative self-stretch w-full flex-[0_0_auto]">
          <Link href="/">
            <img 
              className="relative w-[150px] h-[150px] max-[767px]:w-[100px] max-[767px]:h-[100px] cursor-pointer" 
              src='/logo-1.png' 
              alt="Logo" 
            />
          </Link>

          <div className="flex flex-col items-start justify-center gap-[30px] relative flex-1 grow">
            <div className="flex flex-col items-start justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <Badge className="bg-[#a29bfe]/50 text-white text-xl max-[1500px]:text-lg max-[1000px]:text-base max-[767px]:text-sm max-[767px]:leading-[24px] font-medium font-['Inter'] tracking-[-0.60px] leading-[30px] px-2.5 py-1.5 h-auto">
                Learn, Connect, and Innovate
              </Badge>

              <h1 className="relative self-stretch font-Kumbh font-medium text-white text-[58px] max-[1500px]:text-[40px] max-[1000px]:text-[36px] max-[767px]:text-[28px] max-[767px]:leading-[130%] tracking-[-3%] leading-[150%]">
                Be Part of the Future Tech Revolution
              </h1>
            </div>

            <p className="self-stretch font-regular text-[#7e7e81] text-lg max-[1500px]:text-base max-[767px]:text-sm max-[767px]:leading-[24px] tracking-[-3%] leading-[150%] relative font-['Inter']">
              Immerse yourself in the world of future technology. Explore our
              comprehensive resources, connect with fellow tech enthusiasts, and
              drive innovation in the industry. Join a dynamic community of
              forward-thinkers.
            </p>
          </div>
        </div>

        <div className="flex items-start max-[1000px]:flex-wrap gap-5 p-5 relative self-stretch w-full flex-[0_0_auto] rounded-xl border border-solid border-[#262626]">
          {featureCards.map((card, index) => (
            <Card
              key={index}
              className="flex-1 bg-[#a29bfe2b] rounded-xl border border-solid border-[#262626] hover:bg-[#a29bfe4b] transition-colors duration-300"
            >
              <CardContent className="flex flex-col items-start gap-5 p-10">
                <div className="flex items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
                  <h3 className="relative flex-1 font-['Inter'] font-semibold text-white text-[22px] max-[1000px]:text-xl max-[767px]:text-lg max-[767px]:leading-[120%] tracking-[-3%] leading-[150%]">
                    {card.title}
                  </h3>

                  <Link href={card.path} passHref>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="relative flex-[0_0_auto] p-0 w-13 h-13 max-[1500px]:w-10 max-[1500px]:h-10 bg-[#a29bfe]/50 rounded-[50%] hover:bg-[#a29bfe]/80 transition-colors duration-300"
                    >
                      <img
                        className="relative flex-[0_0_auto] w-6 h-6 max-[1500px]:w-5 max-[1500px]:h-5"
                        alt="Button"
                        src="/icon-arrow-white.png"
                      />
                    </Button>
                  </Link>
                </div>

                <p className="relative self-stretch font-['Inter'] font-normal text-[#98989a] text-lg max-[1500px]:text-base max-[767px]:text-sm max-[767px]:leading-[24px] tracking-[-0.54px] leading-[27px] overflow-hidden text-ellipsis  line-clamp-2 max-[1100px]:line-clamp-3 max-[767px]:line-clamp-5">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <footer className="flex flex-col items-start px-[162px] max-[1700px]:px-[50px] max-[767px]:px-[25px] py-0 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
        <div className="flex items-start gap-20 max-[1500px]:gap-10 max-[1100px]:flex-wrap px-0 py-20 max-[1000px]:py-10 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-neutral-800">
          {footerSections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-9 max-[767px]:gap-5 relative flex-1 grow"
            >
              <h4 className="relative self-stretch  font-['Inter'] font-medium text-white text-xl max-[1500px]:text-lg tracking-[-0.60px] leading-[26px]">
                {section.title}
              </h4>

              <nav className="flex flex-col items-start gap-[18px] max-[767px]:gap-3 relative max-[1000px]:w-[200px] max-[800px]:w-[150px] max-[767px]:w-[100px] max-[350px]:w-[130px] max-[500px]:whitespace-nowrap h w-full flex-[0_0_auto]">
                {section.links.map((link, linkIndex) => (
                  <div
                    key={linkIndex}
                    className={
                      link.hasNew
                        ? "flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]"
                        : ""
                    }
                  >
                    {link.path.startsWith('/#') && 'id' in link ? (
                      <a
                        onClick={() => handleScrollToSection(link.id)}
                        className={`${link.hasNew ? "w-fit whitespace-nowrap" : "self-stretch"} text-[#666666] tracking-[-0.54px] leading-[23.4px] relative font-['Inter'] font-normal text-lg max-[1500px]:text-base max-[767px]:text-sm max-[767px]:leading-[24px] hover:text-white transition-colors cursor-pointer`}
                      >
                        {link.text}
                      </a>
                    ) : (
                      <Link
                        href={link.path}
                        className={`${link.hasNew ? "w-fit whitespace-nowrap" : "self-stretch"} text-[#666666] tracking-[-0.54px] leading-[23.4px] relative font-['Inter'] font-normal text-lg max-[1500px]:text-base max-[767px]:text-sm max-[767px]:leading-[24px] hover:text-white transition-colors`}
                      >
                        {link.text}
                      </Link>
                    )}

                    {link.hasNew && (
                      <img src="/new-btn.png" className="w-[58px] h-[32px]" alt="New" />
                    )}
                  </div>
                ))}
              </nav>
            </div>
          ))}

          <div className="flex flex-col items-start gap-9 max-[767px]:gap-5 relative flex-1 grow">
            <h4 className="relative  font-['Inter'] font-medium text-white text-xl max-[1500px]:text-lg max-[767px]:text-base  tracking-[-0.60px] leading-[26px]">
              Resources
            </h4>

            <nav className="flex flex-col items-start gap-[18px] max-[767px]:gap-3 relative self-stretch w-full flex-[0_0_auto]">
              {resourceItems.map((item, index) => (
                <Link href={item.path} key={index} passHref>
                  <Button
                    variant="outline"
                    className="cursor-pointer transform transition-transform duration-300 hover:scale-90 inline-flex items-center gap-2.5 px-4 py-2.5 relative cursor-pointer flex-[0_0_auto] bg-[#141414] rounded-lg border border-solid border-[#262626] h-auto hover:bg-dark-15"
                  >
                    <span className="relative  font-'Inter'] font-regular text-[#98989a] text-lg max-[1500px]:text-base max-[767px]:text-sm max-[767px]:leading-[24px] tracking-[-0.54px] leading-[27px] whitespace-nowrap">
                      {item.name}
                    </span>

                    <img
                      className="relative w-5 h-5 max-[767px]:w-4 max-[767px]:h-4"
                      alt="Icon"
                      src="/icon-arrow.png"
                    />
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex items-start justify-between max-[767px]:flex-wrap max-[500px]:gap-4 px-0 py-10 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center gap-[11px] relative flex-[0_0_auto]">
            <Link
              href="/terms"
              className="relative cursor-pointer transform transition-transform duration-300 hover:scale-90 font-['Inter'] font-normal text-[#666666] text-lg max-[1500px]:text-base max-[767px]:text-sm max-[767px]:leading-[24px] tracking-[-0.54px] leading-[23.4px] whitespace-nowrap hover:text-white transition-colors"
            >
              Terms &amp; Conditions
            </Link>

            <img
              className="relative self-stretch w-px object-cover "
              alt="Line"
              src="/line-3.png"
            />

            <Link
              href="/privacy"
              className="relative cursor-pointer transform transition-transform duration-300 hover:scale-90 font-['Inter'] font-normal text-[#666666] text-lg max-[1500px]:text-base max-[767px]:text-sm max-[767px]:leading-[24px] tracking-[-0.54px] leading-[23.4px] whitespace-nowrap hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>

          <div className=" w-28 h-6  flex items-center justify-between">
            <Link href="https://twitter.com" target="_blank">
              <img src="/twitter.png" className="w-6 h-6 max-[767px]:w-4 max-[767px]:h-4 cursor-pointer transform transition-transform duration-300 hover:scale-90" alt="Twitter" />
            </Link>
            <Link href="https://example.com" target="_blank">
              <img src="/dots.png" className="w-6 h-6 max-[767px]:w-4 max-[767px]:h-4 cursor-pointer transform transition-transform duration-300 hover:scale-90" alt="Other" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <img src="/linkedin.png" className="w-6 h-6 max-[767px]:w-4 max-[767px]:h-4 cursor-pointer transform transition-transform duration-300 hover:scale-90" alt="LinkedIn" />
            </Link>
          </div>

          <div className="relative font-['Inter'] font-normal text-[#666666] text-lg max-[1500px]:text-base max-[767px]:text-sm max-[767px]:leading-[24px] tracking-[-0.54px] leading-[23.4px] whitespace-nowrap">
            © 2024 FutureTech. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};