"use client";

import { Description } from "@radix-ui/react-dialog";
import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {SiTailwindcss, SiNextdotjs} from "react-icons/si";

// about data
const about = {
  title : "About me",
  description:
   "Meet Dua Majeed, a talented Full-Stack Web Developer with a passion for innovative solutions.Skilled in HTML5, CSS3, TypeScript, Tailwind CSS, React.js, and Next.js, I create dynamic web experiences. I'm committed to expanding my expertise in Generative AI and Cloud Computing, ensuring cutting-edge solutions that meet the highest standards.",
   info: [
    {
      fieldName: "Name",
      fieldValue: "Dua Majeed"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+92) 334 3788150"
    },
    {
      fieldName: "Experience",
      fieldValue: "2 Years"
    },
    {
      fieldName: "Twitter",
      fieldValue: "@majeed_dua91585"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pakistani"
    },
    {
      fieldName: "Email",
      fieldValue: "mduaa0976@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Language",
      fieldValue: "English"
    },
   ],
};

// experience data 
const experience = {
  icon : '/assets/resume/badge.svg',
  title: 'My Experience',
  description: 'With extensive experience in web development, I have built a strong portfolio of personal projects showcasing my proficiency in HTML, CSS, React.js, Next.js, and Tailwind CSS. My expertise spans responsive design, UI/UX, accessibility, and integration of third-party APIs. Through continuous learning and self-led projects, I have developed a solid understanding of full-stack development, authentication, routing, and state management. I excel in delivering high-quality web applications that exceed expectations.',
  items: [
    {
      company: "Devblits",
      position: "Front-end Developer",
      duration: "2024 - present",
    },
    {
      company: "Tech Solutions Inc",
      position: "Front-end Developer Intern",
      duration: "winter - 2023",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "present"
    },
    {
      company : "Governor House",
      position: "Senior Student",
      duration: "2024"
    },
  ],
};

// education data 
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "My educational journey began in the sciences, with a Foundation in Science (FSc Pre-Medical).Yet, I soon discovered my true calling in the dynamic field of IT. I'm now dedicated to leveraging my problem-solving skills and technical expertise to create impactful digital solutions, pursuing a Bachelor's degree in Computer Science (Web Engineering).",
  items : [
    {
      institution: "GIAIC",
      degree: "Cloud Applied Generative AI Engineer",
      duration: "2 years",
    },
    {
      institution: " NITSEP (Online Course Platform)",
      degree: "Full Stack Web Engineer",
      duration: "1 year",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2023",
    },
    {
    institution: "M-Tech",
    degree: "Amazon VA",
    duration: "2022-2023",
    },
    {
      institution: "Government Degree College",
      degree:"FSc in Pre-Medical",
    },
    {
      institution: "Karachi University",
      degree: "Computer Science",
    },
  ],
};

const skills = {
  title: "My Skills",
  description : "Key Skills: I possess expertise in a range of technologies, including: - Front-end development: HTML, CSS, React.js, Next.js  - Back-end development: Node.js- Programming language: JavaScript ,With a strong foundation in these technologies, I create scalable, efficient, and user-friendly web applications that meet the highest standards.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
  ],
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import {motion} from "framer-motion"

const Resume = () => {
    return (

    <motion.div 
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
     <div className="container mx-auto">
      <Tabs
       defaultValue="experience"
       className="flex flex-col xl:flex-row gap-[60px]"
      >
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About Me</TabsTrigger>
        </TabsList>
        {/* Content */}
        <div className="min-h-[70vh] w-full">
          {/* experience */}
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
              <ScrollArea  className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index) => {
                    return (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
            </TabsContent>

          {/* education */}
          <TabsContent value="education" className="w-full">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
              <ScrollArea  className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => {
                    return (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
            </TabsContent>

          {/* skills */}
          <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.skillList.map((skill, index) =>{
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  )
                })}
              </ul>
            </div>
            </TabsContent>

          {/* about */}
          <TabsContent value="about" className="w-full text-center xl:text-left">
             <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  )
                })}
              </ul>
             </div>
            </TabsContent>

          </div>
      </Tabs>
     </div>
      </motion.div>
  )
}

export default Resume;