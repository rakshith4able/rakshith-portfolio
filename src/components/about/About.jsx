import "./about.css";
import Award from "../../img/js.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://i.ibb.co/j5X37vp/Linked-In-Profile-Pic.png"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">Welcome to my portfolio website!</p>
        <p className="a-desc">
          I'm Rakshith Raj G P, a graduate student at Concordia University,
          currently pursuing an MEng in Information Systems Security. With a
          name that embodies the spirit of protection, my passion for
          cybersecurity propels my academic journey. Proficient in JavaScript,
          Python, Java, C++, and various other technologies, I've not only
          excelled in software development but also explored pentest tools and a
          diverse range of cybersecurity concepts. My commitment to continuous
          learning propels me forward, and as I look ahead to summer 2024, I am
          actively seeking opportunities in software development and
          cybersecurity to apply my skills in practical settings. Let's connect
          and discuss how I can contribute to your objectives in these domains.
        </p>
      </div>
    </div>
  );
};

export default About;
