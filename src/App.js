import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Experience from "./components/experience/Experience";
import ProjectList from "./components/projectList/ProjectList";

import Skills from "./components/skills/skills";
import Certifications from "./components/certifications/Certifications";
import SEO from "./services/SEO";
import { ThemeContext } from "./context";

import "./App.css";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <SEO />
      <div
        style={{
          backgroundColor: darkMode ? "#222" : "white",
          color: darkMode && "white",
          width: "100%",
        }}
      >
        <Intro />
        <About />
        <Skills />
        <Certifications />
        <Experience />
        <ProjectList />
        <Contact />
      </div>
    </>
  );
};

export default App;
