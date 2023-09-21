import "./skills.css";
import { svgFiles } from "./svgs";

const Skills = () => {
  return (
    <div className="s">
      <div className="s-texts">
        <h1 className="s-title">Tools and Frameworks</h1>
        <p className="s-desc"></p>
      </div>
      <div className="s-container">
        <div className="svg-tile-grid">
          {svgFiles.map((svgItem) => (
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
