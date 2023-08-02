"use client";

import Image from "next/image";
import { useRef } from "react";
import AboutSection from "@/components/sections/AboutSection";
import HomeSection from "@/components/sections/HomeSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import WorkflowSection from "@/components/sections/WorkflowSection";
import SideNav from "@/components/SideNav";

export default function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const workflowRef = useRef(null);
  return (
    <main className="bg-primary-dark">
      <SideNav
        aboutRef={aboutRef}
        homeRef={homeRef}
        projectsRef={projectsRef}
        workflowRef={workflowRef}
      />
      <div className="md:ml-80">
        <HomeSection ref={homeRef} />
        <AboutSection ref={aboutRef} />
        <PortfolioSection ref={projectsRef} />
        <WorkflowSection ref={workflowRef} />
      </div>
    </main>
  );
}
