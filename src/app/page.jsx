import Image from "next/image";
import React from "react";
import {Button} from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  return (
   <section className="h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        {/* text */}
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Software Developer</span>
          <h1 className="h1 mb-6">
            Hey! I'm <br /> <span className="text-accent">Dua Majeed</span>
            </h1>
          <p className="max-w-[500px] mb-9 text-white/80">
          
"As a passionate front-end developer with a keen interest in full-stack development,
 I specialize in crafting visually stunning and user-friendly interfaces that seamlessly integrate with robust back-end solutions.
  With expertise in HTML, CSS, JavaScript, and frameworks like React and Angular, I bring websites and applications to life.
   My proficiency in responsive design, UI/UX, and accessibility ensures an exceptional user experience.
    I'm well-versed in collaborative development, version control systems like Git, and agile methodologies.
     Currently, I'm expanding my skill set to include back-end technologies like Node.js, Express, and MongoDB, with a goal to become a proficient full-stack developer.
 I'm excited to showcase my projects and collaborate on innovative solutions."
          </p>
          {/* btn and socials */}
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button variant="outline"
                   size="lg"
                  className="uppercase flex items-center gap-2">
              <span>Download CV</span>
              <FiDownload  className="text-xl" />
            </Button>
            <div className="mb-8 xl:mb-0">
              <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center 
              text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
          </div>
        </div>
        {/* photo */}
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
          </div>
      </div>
    </div>
    <Stats />
    </section>
  );
}
