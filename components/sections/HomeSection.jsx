// eslint-disable-next-line react/display-name
import { forwardRef } from "react";
import Image from "next/image";
// import heroImg from "../assets/sitting-webp.webp";
// import heroImg from "@/public/assets/sitting-webp.webp";

const HomeSection = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/17834621/pexels-photo-17834621/free-photo-of-relaxing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        // objectFit: "cover",
      }}
      className="bg-cover bg-center hero-overlay md:container md:mx-auto md:flex md:h-screen bg-grayBg md:items-center md:px-0 flex flex-col py-8 md:flex-row px-4"
    >
      <div className="h-full w-full bg-cover bg-center backdrop-brightness-75 md:container md:mx-auto md:flex md:h-screen md:pb-20 md:pt-10 md:items-center flex flex-col py-8 space-y-2 md:flex-row px-4 md:px-12">
        <div className="flex flex-1 flex-col space-y-4">
          <h1 className="md:text-2xl text-white">Hi, I am</h1>
          <h1 className="text-6xl text-siteBg font-sofia font-extrabold">
            Abu <span className="text-redPrimary">Athman</span>
          </h1>
          <h1 className="md:text-2xl text-white">
            A dynamic full stack software developer with a talent for creating
            innovative solutions that drive business success.
          </h1>
          {/* <h1 className="md:text-2xl text-textGray">
            Proficient in <span className="text-emerald-400">ReactJS,</span>{" "}
            <span className="text-yellow-400">React Native,</span>{" "}
            <span className="text-red-400">VueJS,</span>{" "}
            <span className="text-blue-400">NodeJS,</span>{" "}
            <span className="text-green-400">MongoDB</span> and{" "}
            <span className="text-purple-400">WordPress.</span> I use these
            skills in building dynamic and scalable web applications.
          </h1> */}
        </div>
        <div className="flex flex-1 justify-center">
          {/* <img
            className="md:h-80 md:rounded-box rounded-lg"
            src={portrait}
            alt=""
            srcset=""
          /> */}
        </div>
      </div>
    </div>
  );
});

export default HomeSection;
