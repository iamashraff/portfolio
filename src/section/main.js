import React from "react";
import Header from "./header";
import MainContent from "./content/main-content";
import AboutMe from "./content/about-me";
import Skills from "./content/skills";
import Projects from "./content/projects";
import Certifications from "./content/certifications";
import "./main.css";

export function Main() {
  return (
    <div className="mainContainer">
      <section
        style={{ position: "sticky", top: 0, zIndex: 1000 }}
        className=" headerSection"
      >
        <Header />
      </section>
      <section className="mainContentSection" style={{ marginTop: "-73px" }}>
        <MainContent />
      </section>
      <section className="aboutmeSection">
        <AboutMe />
      </section>
      <section className="skillsSection">
        <Skills />
      </section>
      <section className="projectsSection">
        <Projects />
      </section>
      <section>
        <Certifications />
      </section>
    </div>
  );
}

export default Main;
