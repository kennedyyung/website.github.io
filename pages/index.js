import React from "react";
import HomePage from "./HomePage";
import Projects from "./Projects";
import Education from "./Education";
import Experience from "./Experience";
import ContactForm from "./ContactForm";



const index = () => {
  return (
    <main className="bg-base dark:bg-dark_base overflow-hidden snap-y scroll-smooth">
      <HomePage/>
      <Education/>
      <Experience/>
      <Projects/>
      <ContactForm/>
    </main>


  );
};

export default index;
