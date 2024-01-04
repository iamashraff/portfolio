import React from "react";
import Header from "./header";
import MainContent from "./content/main-content";
import AboutMe from "./content/about-me";
import Skills from "./content/skills";
import Projects from "./content/projects";
import "./main.css";

export function Main() {
  return (
    <div className="mainContainer">
      <section
        style={{ position: "sticky", top: 0, zIndex: 1000 }}
        className="shadow-md headerSection"
      >
        <Header />
      </section>
      <section className="mainContentSection">
        <MainContent />
      </section>
      <section>
        <AboutMe />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Projects />
      </section>
    </div>
  );
}

export default Main;
