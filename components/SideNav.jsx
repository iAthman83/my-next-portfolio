"use client";
import { useState } from "react";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineCube,
  HiOutlineDesktopComputer,
  HiOutlineDocumentText,
} from "react-icons/hi";
import {
  RiLinkedinFill,
  RiTwitterFill,
  RiYoutubeFill,
  RiGithubFill,
  RiMailFill,
} from "react-icons/ri";
import Image from "next/image";
import portrait from "@/assets/portrait-rounded-webp.webp";
// import portrait from "../assets/portrait-rounded-webp.webp";
// import { Link } from "react-router-dom";

function SideNav({ aboutRef, homeRef, projectsRef, workflowRef }) {
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);
  const [portfolio, setPortfolio] = useState(false);

  // change home nav design
  const handleClickHome = () => {
    if (!about && !portfolio) {
      setHome(home);
    } else {
      setHome(!home);
      setAbout(false);
      setPortfolio(false);
    }
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  // change about nav design
  const handleClickAbout = () => {
    if (!home && !portfolio) {
      setAbout(about);
    } else {
      setAbout(!about);
      setHome(false);
      setPortfolio(false);
    }
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  // change projects nav design
  const handleClickProjects = () => {
    if (!about && !home) {
      setPortfolio(portfolio);
    } else {
      setPortfolio(!portfolio);
      setHome(false);
      setAbout(false);
    }
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="fixed w-full bottom-0 z-10 md:fixed md:flex flex-row md:flex-col  px-4 md:top-0 md:left-0 bg-sideBarBg md:h-screen md:w-80 md:flex-none py-2 md:py-2">
      {/* logo */}
      <div className="hidden md:flex md:flex-col md:items-center md:justify-center md:my-2 py-2 space-y-4 px-auto">
        <Image
          className=" border-8 border-gray-700 rounded-full"
          src={portrait}
          alt="portrait"
        />
        <h1 className="hidden md:block text-3xl font-semibold text-white">
          Abu Athman
        </h1>
      </div>
      {/* socials */}
      <div className="flex first:p-2 justify-between md:justify-center space-x-3 my-2">
        {/* Email */}
        <a
          href="mailto:abuathman83@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="flex space-x-2 items-center cursor-pointer text-white px-4 md:px-2 p-2 px-auto bg-zinc-700 rounded-lg md:rounded-full hover:bg-mailBlue"
        >
          <RiMailFill size={20} className="text-mailBlue md:text-white" />
          <h1 className="hidden">Email Me</h1>
        </a>
        {/* YouTube */}
        <a
          href="https://www.youtube.com/@programwithabu"
          target="_blank"
          rel="noreferrer"
          className="flex space-x-2 items-center cursor-pointer text-white px-4 md:px-2 p-2 px-auto bg-zinc-700 rounded-lg md:rounded-full hover:bg-youtubeRed"
        >
          <RiYoutubeFill size={20} className="text-youtubeRed md:text-white" />
          <h1 className="hidden">YouTube</h1>
        </a>
        {/* Linkedin */}
        <a
          href="https://www.linkedin.com/in/abubakar-athman/"
          target="_blank"
          rel="noreferrer"
          className="flex space-x-2 items-center cursor-pointer text-white px-4 md:px-2 p-2 px-auto bg-zinc-700 rounded-lg md:rounded-full hover:bg-linkedinBlue"
        >
          <RiLinkedinFill
            size={20}
            className="text-linkedinBlue md:text-white"
          />
          <h1 className="hidden">LinkedIn</h1>
        </a>
        {/* Github */}
        <a
          href="https://github.com/iAthman83"
          target="_blank"
          rel="noreferrer"
          className="flex space-x-2 items-center cursor-pointer text-white px-4 md:px-2 p-2 px-auto bg-zinc-700 rounded-lg md:rounded-full hover:bg-black"
        >
          <RiGithubFill size={20} className="text-sideBarText md:text-white" />
          <h1 className="hidden">GitHub</h1>
        </a>
        {/* Twitter */}
        <a
          href="https://twitter.com/iathman83"
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex space-x-2 items-center cursor-pointer text-white px-4 md:px-2 p-2 px-auto bg-zinc-700 rounded-lg md:rounded-full hover:bg-twitterBlue"
        >
          <RiTwitterFill size={20} className="text-twitterBlue md:text-white" />
          <h1 className="hidden">Twitter</h1>
        </a>
        {/* blog button on mobile view */}
        <div
          to="/blog"
          className="flex md:hidden space-x-2 items-center cursor-pointer text-white px-4 md:px-2 p-2 px-auto bg-zinc-700 rounded-lg md:rounded-full hover:bg-twitterBlue"
        >
          <HiOutlineDocumentText
            size={20}
            className="text-yellow-500 md:text-white"
          />
          <h1 className="hidden">Twitter</h1>
        </div>
      </div>
      {/* nav */}
      <nav className="hidden md:flex md:flex-col md:justify-center space-x-1 md:space-x-0 md:space-y-2 md:ml-6 mt-12">
        {/* home */}
        <section
          onClick={handleClickHome}
          // onClick={() => homeRef.current.scrollIntoView({ behavior: "smooth" })}
          className="group flex space-x-4 items-center cursor-pointer text-white p-2 px-auto rounded-lg hover:bg-zinc-700"
        >
          <HiOutlineHome
            size={24}
            className={home ? "text-blue-400" : "text-zinc-400"}
          />
          <h1
            className={
              home
                ? "hidden md:block text-white text-lg"
                : "hidden md:block text-zinc-400 text-lg"
            }
          >
            Home
          </h1>
        </section>
        {/* about */}
        <section
          onClick={handleClickAbout}
          // onClick={() =>
          //   aboutRef.current.scrollIntoView({ behavior: "smooth" })
          // }
          className="flex space-x-4 items-center cursor-pointer text-zinc-400 p-2 px-auto rounded-lg hover:bg-zinc-700"
        >
          <HiOutlineUser
            size={24}
            className={about ? "text-blue-400" : "text-zinc-400"}
          />
          <h1
            className={
              about
                ? "hidden md:block text-white text-lg"
                : "hidden md:block text-zinc-400 text-lg"
            }
          >
            About
          </h1>
        </section>

        {/* portfolio */}
        <section
          onClick={handleClickProjects}
          // onClick={() =>
          //   projectsRef.current.scrollIntoView({ behavior: "smooth" })
          // }
          className="flex space-x-4 items-center cursor-pointer text-white p-2 px-auto rounded-lg hover:bg-zinc-700"
        >
          <HiOutlineCube
            size={24}
            className={portfolio ? "text-blue-400" : "text-zinc-400"}
          />
          <h1
            className={
              portfolio
                ? "hidden md:block text-white text-lg"
                : "hidden md:block text-zinc-400 text-lg"
            }
          >
            Portfolio
          </h1>
        </section>
        {/* workflow */}
        {/* <section
          onClick={() =>
            workflowRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="flex space-x-4 items-center cursor-pointer text-white p-2 px-auto rounded-lg hover:bg-zinc-700"
        >
          <HiOutlineDesktopComputer size={24} className="text-zinc-400" />
          <h1 className="hidden md:block text-zinc-400">Workflow</h1>
        </section> */}
        {/* blog */}
        <div className="flex space-x-4 items-center cursor-pointer text-white p-2 px-auto rounded-lg hover:bg-zinc-700">
          <HiOutlineDocumentText size={24} className="text-zinc-400" />
          <h1 className="hidden md:block text-zinc-400">Blog</h1>
        </div>
      </nav>
    </div>
  );
}

export default SideNav;
