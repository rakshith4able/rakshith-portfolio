import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Experience from "./components/experience/Experience";
import ProjectList from "./components/projectList/ProjectList";
import Toggle from "./components/toggle/Toggle";
import Skills from "./components/skills/skills";
import { ThemeContext } from "./context";

import "./App.css";
import Certifications from "./components/certifications/Certifications";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
        width: "100%",
      }}
    >
      {/* <Toggle /> */}
      <Intro />
      <About />
      <Skills />
      <Certifications />
      <Experience />
      <ProjectList />
      <Contact />
    </div>
  );
};

export default App;
