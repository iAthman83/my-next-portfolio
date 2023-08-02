import { RiYoutubeFill, RiGithubFill, RiGlobalLine } from "react-icons/ri";
import Image from "next/image";
// import shomi from "@/public/assets/shomi.png";

const ProjectsCardComponent = (props) => {
  return (
    <div className="bg-sideBarHighlight w-72 rounded-lg overflow-hidden cursor-pointer transition-all duration-100 hover:scale-105">
      <div className="bg-projectCardBg h-48 flex justify-center items-center overflow-hidden">
        {/* <RiYoutubeFill size={30} /> */}
        <Image
          className=""
          src="https://images.pexels.com/photos/4160094/pexels-photo-4160094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="image"
          width={48}
          height={48}
        />
      </div>
      {/* Description */}
      <div className="px-2 my-6 flex flex-col space-y-4">
        <h1 className="text-sideBarText text-2xl font-sofia font-extrabold">
          {props.title}
        </h1>
        <p className="text-base text-textGray">{props.description}</p>
      </div>
      {/* Stack */}
      <ul className="flex flex-row my-6 px-2 space-x-2">
        {props.stack.map((item) => (
          <li
            key={item.name}
            className={`${
              item.color
            } px-2 py-1 font-semibold text-sm rounded-md ${
              item.fontColor ? item.fontColor : "text-sideBarText"
            }`}
          >
            {item.name}
          </li>
        ))}
      </ul>
      {/* Links */}
      <div className="flex flex-row my-6 px-2 space-x-2">
        <a
          href={props.github}
          target="_blank"
          rel="noreferrer"
          className="flex rounded-md"
        >
          <RiGithubFill className="text-textGray" size={30} />
        </a>
        <a
          href={props.website}
          target="_blank"
          rel="noreferrer"
          className="flex rounded-md"
        >
          <RiGlobalLine className="text-textGray" size={30} />
        </a>
      </div>
    </div>
  );
};

export default ProjectsCardComponent;
