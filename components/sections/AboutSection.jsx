// eslint-disable-next-line react/display-name
import { forwardRef } from "react";
import YouTube from "react-youtube";
import { RiYoutubeFill, RiMailFill } from "react-icons/ri";
import Link from "next/link";

const AboutSection = forwardRef((props, ref) => {
  const opts1 = {
    height: "360",
    width: "600",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const opts2 = {
    height: "200",
    width: "448",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return (
    <div
      ref={ref}
      className="md:block md:container md:mx-auto bg-grayBg md:pb-20 md:px-12 md:pt-24 pt-12 px-4"
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-5xl text-sideBarText font-sofia font-extrabold">
          ABOUT ME
        </h1>
        <p className="text-base mb-18 text-textGray justify-center">
          Welcome to my world! If you're reading this, chances are you're
          wondering who I am and what makes me tick. Well, I'm glad you asked!
        </p>
        <div className="border-b-8 border-zinc-400 w-28 text-sideBarBg">.</div>
      </div>
      <div className="flex md:mt-20 flex-col-reverse space-y-4 md:flex-row">
        <div className="flex flex-1 flex-col md:pr-8 space-y-8 md:mt-0">
          <h1 className="text-sideBarText text-2xl font-sofia font-extrabold">
            Who am I?
          </h1>
          <p className="text-textGray">
            As a highly motivated and skilled software developer, I have a
            passion for creating efficient and effective solutions to complex
            problems. I am confident in my ability to deliver high-quality
            results on time and within budget.
          </p>
          <p className="text-textGray">
            My love for technology and programming drives me to continuously
            learn and stay up to date with the latest industry trends and
            developments. I also like to share my knowledge through video
            tutorials on my YouTube channel.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="mailto:abuathman83@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex space-x-2 items-center cursor-pointer text-white p-2 px-auto bg-emerald-500 md:px-8 rounded-lg hover:bg-emerald-600"
            >
              {/* <RiMailFill size={25} className="text-mailBlue" /> */}
              <p className="">Contact me</p>
            </Link>
            <a
              href="https://www.youtube.com/@programwithabu"
              target="_blank"
              rel="noreferrer"
              className="flex space-x-2 items-center cursor-pointer text-white p-2 px-auto bg-sideBarHighlight md:px-8 px-6 rounded-lg hover:bg-zinc-700"
            >
              {/* <RiYoutubeFill size={25} className="text-youtubeRed" /> */}
              <p className="">Subscribe</p>
            </a>
          </div>
        </div>
        <div className="flex flex-1 flex-col space-y-8">
          <h1 className="text-sideBarText text-2xl font-sofia font-extrabold">
            One of my many tutorials
          </h1>
          <YouTube
            className="md:hidden rounded-lg overflow-hidden w-full"
            videoId="_G5RxzxJz4A"
            opts={opts2}
          />
          <YouTube
            className="hidden md:block rounded-lg overflow-hidden w-full"
            videoId="_G5RxzxJz4A"
            opts={opts1}
          />
        </div>
      </div>
    </div>
  );
});

export default AboutSection;
