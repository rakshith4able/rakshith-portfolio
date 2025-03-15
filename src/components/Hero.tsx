import Image from "next/image";

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { TypewriterEffectLoop } from "./ui/TypewriterEffectLoop";
import IconButton from "./ui/IconButton";
import { portfolioContent } from "@/data";

const Hero = () => {
  const { name, description, titles, socialLinks } = portfolioContent;
  return (
    <div className="h-screen">
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="h-full flex justify-center relative z-10">
        <div className="max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <Image
            src="/me.png"
            className="object-cover my-10 rounded-full"
            width={100}
            height={100}
            alt="My Picture"
          />
          <p className="uppercase tracking-widest text-md text-center text-blue-100 max-w-80">
            Hello, I&apos;m
          </p>

          <TextGenerateEffect
            words={name}
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <TypewriterEffectLoop
            className="mb-5 text-center font-semibold text-xl sm:text-lg lg:text-4xl"
            words={[...titles]}
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            {description}
          </p>

          <div className="flex space-x-5 md:m-0 my-5 ">
            {socialLinks.map((socialLink) => (
              <a href={socialLink.link} target="_blank" key={socialLink.name}>
                <IconButton
                  icon={<socialLink.icon size={socialLink.iconSize} />}
                />
              </a>
            ))}
          </div>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Hero;
