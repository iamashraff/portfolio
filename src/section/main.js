import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Header from "./header";
import MainContent from "./content/main-content";
import AboutMe from "./content/about-me";
import Skills from "./content/skills";
import Projects from "./content/projects";
import Certifications from "./content/certifications";
import ContactMe from "./content/contact-me";
import "./main.css";
import Footer from "./content/footer";

export function Main() {
  return (
    <div className="mainContainer">
      <section
        style={{ position: "sticky", top: 0, zIndex: 1000 }}
        className=" headerSection"
      >
        <Header />
      </section>
      <section
        id="home"
        className="mainContentSection"
        style={{ marginTop: "-73px" }}
      >
        <MainContent />
      </section>
      <section id="myeducation" className="aboutmeSection">
        <AboutMe />
      </section>
      <section id="myskills" className="skillsSection">
        <Skills />
      </section>
      <section id="myprojects" className="projectsSection">
        <Projects />
      </section>
      <section id="mycertifications">
        <Certifications />
      </section>
      <section id="contactme" className="contactmeSection">
        <ContactMe />
      </section>
      <section className="footerSection">
        <Footer />
      </section>
    </div>
  );
}

export default Main;
