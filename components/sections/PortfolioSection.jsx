// eslint-disable-next-line react/display-name
import { forwardRef } from "react";
import ProjectsCardComponent from "../ProjectsCardComponent";
import { projects } from "@/data/projectsData";

const PortfolioSection = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="container mx-auto bg-grayBg md:flex flex-col space-y-20 py-12 pb-24 md:px-12 md:pt-24 pt-12 px-4"
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-5xl text-sideBarText font-sofia font-extrabold uppercase">
          My portfolio
        </h1>
        <p className="text-base mb-18 text-textGray">
          Welcome to my playground of projects! This is where I get to show off
          all the cool stuff I've been working on. So buckle up and get ready
          for a wild ride!
        </p>
        <div className="border-b-8 border-zinc-400 w-28 text-sideBarBg">.</div>
      </div>
      <div className="carousel carousel-center space-x-6 md:flex md:flex-row md:flex-wrap md:space-x-4 md:justify-center md:space-y-10">
        {projects.map((project) => (
          <li
            className="list-none carousel-item md:first:mt-10 md:first:ml-4"
            key={project.id}
          >
            <ProjectsCardComponent
              title={project.title}
              image={project.image}
              description={project.description}
              stack={project.stack}
              github={project.github}
              website={project.website}
            />
          </li>
        ))}
      </div>
    </div>
  );
});

export default PortfolioSection;
