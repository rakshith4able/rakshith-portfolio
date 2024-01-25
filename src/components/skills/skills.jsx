import "./skills.css";
import { cybersvgFiles } from "./cybersvgs";
import { progsvgFiles } from "./progsvgs";
import { softsvgFiles } from "./softsvgs";

const Skills = () => {
  return (
    <>
      <ProgrammingSkills />
      <SoftwareSkills />
      <CyberSkills />
    </>
  );
};

const CyberSkills = () => {
  return (
    <div className="s">
      <div className="s-texts">
        <h1 className="s-title">Cybersecurity Tools & Frameworks</h1>
        <p className="s-desc"></p>
      </div>
      <div className="s-container">
        <div className="svg-tile-grid">
          {cybersvgFiles.map((svgItem) => (
            <div className="svg-tile" key={svgItem.id}>
              <img src={svgItem.file} alt={svgItem.altText} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SoftwareSkills = () => {
  return (
    <div className="s">
      <div className="s-texts">
        <h1 className="s-title">Software Frameworks/Tools</h1>
        <p className="s-desc"></p>
      </div>
      <div className="s-container">
        <div className="svg-tile-grid">
          {softsvgFiles.map((svgItem) => (
            <div className="svg-tile" key={svgItem.id}>
              <img src={svgItem.file} alt={svgItem.altText} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProgrammingSkills = () => {
  return (
    <div className="s">
      <div className="s-texts">
        <h1 className="s-title">Programming & Scripting Languages</h1>
        <p className="s-desc"></p>
      </div>
      <div className="s-container">
        <div className="svg-tile-grid">
          {progsvgFiles.map((svgItem) => (
            <div className="svg-tile" key={svgItem.id}>
              <img src={svgItem.file} alt={svgItem.altText} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
