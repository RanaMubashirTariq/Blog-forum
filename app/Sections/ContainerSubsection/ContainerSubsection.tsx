'use client'
import React, { useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const categories = [
  { id: "all", label: "All", active: true },
  { id: "quantum", label: "Quantum Computing", active: false },
  { id: "ai", label: "AI Ethics", active: false },
  { id: "space", label: "Space Exploration", active: false },
  { id: "biotech", label: "Biotechnology", active: false },
  { id: "energy", label: "Renewable Energy", active: false },
];

const blogPosts = [
  {
    id: 1,
    img:'/card-1.jpg',
    category: "Design",
    title: "The Quantum Leap in Computing",
    description:
      "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
    likes: "24.5k",
    comments: "50",
    shares: "20",
    author: {
      name: "Olivia Rhye",
      date: "20 Jan 2022",
      avatar: "/avater.png",
    },
  },
  {
    id: 2,
    img:'/card-2.png',
    category: "Design",
    title: "The Quantum Leap in Computing",
    description:
      "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
    likes: "24.5k",
    comments: "50",
    shares: "20",
    author: {
      name: "Olivia Rhye",
      date: "20 Jan 2022",
      avatar: "/avater.png",
    },
  },
  {
    id: 3,
    img:'/card-3.jpg',
    category: "Design",
    title: "The Quantum Leap in Computing",
    description:
      "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
    likes: "24.5k",
    comments: "50",
    shares: "20",
    author: {
      name: "Olivia Rhye",
      date: "20 Jan 2022",
      avatar: "/avater.png",
    },
  },
  {
    id: 4,
    img:'/card-1.jpg',
    category: "Design",
    title: "The Quantum Leap in Computing",
    description:
      "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
    likes: "24.5k",
    comments: "50",
    shares: "20",
    author: {
      name: "Olivia Rhye",
      date: "20 Jan 2022",
      avatar: "/avater.png",
    },
  },
  {
    id: 5,
    img:'/card-2.png',
    category: "Design",
    title: "The Quantum Leap in Computing",
    description:
      "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
    likes: "24.5k",
    comments: "50",
    shares: "20",
    author: {
      name: "Olivia Rhye",
      date: "20 Jan 2022",
      avatar: "/avater.png",
    },
  },
  {
    id: 6,
    img:'/card-3.jpg',
    category: "Design",
    title: "The Quantum Leap in Computing",
    description:
      "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
    likes: "24.5k",
    comments: "50",
    shares: "20",
    author: {
      name: "Olivia Rhye",
      date: "20 Jan 2022",
      avatar: "/avater.png",
    },
  },
];

export default function ContainerSubsection  (){
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <section className="w-full relative">
      {/* Header Section */}
      <div className="w-full bg-[#a29bfe]/14 py-[157px] max-[1700px]:py-[120px] max-[1500px]:py-[80px] max-[1000px]:py-10">
        <div className="mx-auto px-[162px]  max-[1700px]:px-[50px] max-[767px]:px-[25px] flex items-end justify-between max-[767px]:flex-col  gap-[150px]  max-[800px]:gap-[50px] max-[767px]:gap-[20px]">
          <div className="flex flex-col items-start justify-center gap-4 flex-1">
            <Badge className="bg-[#a29bfe]80 text-white text-xl max-[1500px]:text-lg max-[1000px]:text-base max-[767px]:text-sm max-[767px]:leading-[24px] font-medium font-['Inter'] tracking-[-3%] leading-[30px] px-2.5 py-1.5 h-auto">
              A Knowledge Treasure Trove
            </Badge>
            <h2 className="font-Kumbh font-medium text-white text-[58px] max-[1500px]:text-[40px] max-[1000px]:text-[36px] max-[767px]:text-[28px] tracking-[-3%] leading-[130%]">
              Explore FutureTech&#39;s In-Depth Blog Posts
            </h2>
          </div>
          <Button className="bg-[#a29bfe] hover:bg-[#a29bfe]/90 cursor-pointer transform transition-transform duration-300 hover:scale-90 text-white text-lg max-[1500px]:text-base max-[767px]:text-sm max-[767px]:leading-[24px] font-regular font-['Inter'] tracking-[-3%] leading-[27px] px-6 py-[18px] max-[1000px]:px-[15] max-[1000px]:py-[12px] rounded-xl border border-solid border-[#262626] h-auto">
            View All Blogs
            <img className="w-6 h-6  max-[767px]:w-4 max-[767px]:h-4  max-[1000px]:w-5 max-[1000px]:h-5" alt="Icon" src="/icon-arrow-white.png" />
          </Button>
        </div>
      </div>

      {/* Category Filter Section */}
      <div className="w-full border-b border-solid border-[#262626] px-[162px] max-[1700px]:px-[50px] max-[767px]:px-[25px] py-[50px]">
        <div className="flex items-center max-[1100px]:flex-wrap gap-5">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant="outline"
              onClick={() => setActiveCategory(category.id)}
              className={`flex-1 px-6 py-[30px] max-[767px]:px-4 max-[767px]:py-[15px] rounded-lg border border-solid border-[#262626] h-auto ${
                activeCategory === category.id
                  ? "bg-[#a29bfe]/80 hover:bg-[#a29bfe80]/90 cursor-pointer transform transition-transform duration-300 hover:scale-90 text-white font-medium"
                  : "bg-transparent text-[#98989a] cursor-pointer transform transition-transform duration-300 hover:scale-90 font-normal"
              } font-['Inter'] text-lg max-[1500px]:text-base max-[767px]:text-sm max-[767px]:leading-[24px] tracking-[-3%] leading-[150%]`}
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="w-full px-[162px] py-[50px] relative max-[1700px]:px-[50px] max-[767px]:px-[25px]">
        {/* Background blur elements */}
        <div className="absolute bottom-[173px] left-[0px] w-[161px] h-[373px] rounded-[80.5px/186.5px] blur-[212.6px] bg-[#a29bfe]">
          <div className="absolute top-[91px] left-[0px] w-[103px] h-[238px] rounded-[51.3px/119.09px] bg-[#ff30a0] blur-[212.6px]" />
        </div>

        <div className="w-full mx-auto">
          <div className="grid grid-cols-3 max-[1100px]:grid-cols-2 max-[767px]:grid-cols-1 gap-12 max-[1500px]:gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="cursor-pointer bg-[#a29bfe]/33 border-none rounded-[33px] max-[500px]:rounded-[20px] shadow-[0px_5.21px_7.81px_-2.6px_#10182808,0px_15.62px_20.83px_-5.21px_#10182814] overflow-hidden"
              >
                <CardContent className="p-[31.25px] max-[1300px]:p-[20px] flex flex-col gap-[41.67px] max-[1000px]:gap-[20px]">
                  {/* Image placeholder */}
                  <img src={post.img}  className="w-full h-[312.5px] max-[1500px]:h-[220px] max-[500px]:h-[180px] rounded-[26px] max-[500px]:rounded-[15px]  bg-cover bg-[50%_50%] " />

                  {/* Content */}
                  <div className="flex flex-col gap-[18px]">
                    <div className="flex flex-col gap-[15.62px]">
                      <Badge className="bg-transparent shadow-none text-[#a29bfe] text-[18.2px] max-[1500px]:text-[16px] max-[767px]:text-[14px] max-[767px]:leading-[24px] font-semibold font-['Inter'] leading-[26.0px] p-0 h-auto justify-start">
                        {post.category}
                      </Badge>

                      <div className="flex flex-col gap-[15px]">
                        <div className="flex items-start gap-[20.83px]">
                          <h3 className="flex-1 font-['Inter'] font-semibold text-white text-[31.2px] max-[1500px]:text-[24px] max-[1500px]:leading-[34px] max-[500px]:text-[20px] max-[500px]:leading-[30px]   leading-[41.7px]">
                            {post.title}
                          </h3>
                          <img
                            className="flex-shrink-0 w-[31.25px] h-[36.46px] cursor-pointer transform transition-transform duration-300 hover:scale-90"
                            alt="Icon wrap"
                            src="/icon-wrap.png"
                          />
                        </div>

                        <p className="font-['Inter'] font-regular text-[#c0c0c0] text-[20.8px] max-[1500px]:text-[16px] max-[1500px]:leading-[23px] max-[500px]:text-[14px] max-[767px]:leading-[24px]  leading-[31.2px]">
                          {post.description}
                        </p>

                        {/* Engagement metrics */}
                        <div className="flex items-start gap-[7.02px]">
                          <div className="cursor-pointer flex items-center justify-center gap-[2.81px] px-[11.23px] py-[5.61px] hover:bg-[#a29bfe]/24 transition-color duration-300 rounded-[70.18px] border-[0.7px] border-solid border-[#a29bfe]">
                            <img
                              className="w-[16.84px] h-[16.84px]"
                              alt="Icon"
                              src="/heart.png"
                            />
                            <span className="font-'Kumbh font-regular text-[#c7c7c8] text-[12.6px] tracking-[-3%] leading-[150%]">
                              {post.likes}
                            </span>
                          </div>

                          <div className="cursor-pointer flex items-center justify-center gap-[2.81px] px-[11.23px] py-[5.61px] hover:bg-[#a29bfe]/24 transition-color duration-300 rounded-[70.18px] border-[0.7px] border-solid border-[#a29bfe]">
                            <img
                              className="w-[16.84px] h-[16.84px]"
                              alt="Icon"
                              src="/sms.png"
                            />
                            <span className="font-kumbh font-regular text-[#c7c7c8] text-[12.6px] tracking-[-3%] leading-[150%]">
                              {post.comments}
                            </span>
                          </div>

                          <div className="cursor-pointer flex items-center justify-center gap-[2.81px] px-[11.23px] py-[5.61px] hover:bg-[#a29bfe]/24 transition-color duration-300 rounded-[70.18px] border-[0.7px] border-solid border-[#a29bfe]">
                            <img
                              className="w-[16.84px] h-[16.84px]"
                              alt="Icon"
                              src="/share.png"
                            />
                            <span className="font-kumbh font-regular text-[#c7c7c8] text-[12.6px] tracking-[-3%] leading-[150%]">
                              {post.shares}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Author info */}
                     
                    <div className="flex items-end justify-end gap-[13.26px]">
                    <div className="bg-[#c7b9da] w-[44.21px] h-[44.21px] rounded-[50%] max-[500px]:w-[35px] max-[500px]:h-[35px]">
                      <Avatar className="w-[44.21px] h-[44.21px] max-[500px]:w-[35px] max-[500px]:h-[35px]">
                        <AvatarImage
                          src={post.author.avatar}
                          alt={post.author.name}
                        />
                        <AvatarFallback className="bg-[#c7b9da] w-full h-full">
                          {post.author.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      </div>

                      <div className="flex flex-col items-start">
                        <div className="font-['Inter'] font-medium text-white text-[15.5px] max-[500px]:text-[13px] max-[500px]:leading-[18px]  leading-[22.1px]">
                          {post.author.name}
                        </div>
                        <div className="font-['Inter'] font-medium text-[#cfcfcf] text-[15.5px] max-[500px]:text-[13px] max-[500px]:leading-[18px] leading-[22.1px]">
                          {post.author.date}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
