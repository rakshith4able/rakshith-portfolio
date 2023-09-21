import "./about.css";
import Award from "../../img/award.png";

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
        <p className="a-sub">Welcome to my portfolio website!.</p>
        <p className="a-desc">
          I'm Rakshith Raj G P, a graduate student at Concordia University, with
          a name that embodies the spirit of protection. Currently pursuing an
          MEng in Information Systems Security, I'm fueled by a passion for
          cybersecurity. My journey involves a commitment to continuous learning
          in cybersecurity. I've not only honed my skills in JavaScript, Python,
          and web development but have also delved into pentest tools and a wide
          array of cybersecurity concepts. What I've learned so far is just the
          beginning; I'm committed to expanding my knowledge with every
          opportunity I encounter. As I look ahead to summer 2024, I'm actively
          seeking cybersecurity internships to apply my skills and knowledge in
          a practical setting. Let's connect to discuss how I can contribute to
          your cybersecurity objectives.
        </p>
        <div className="a-award">
          <a href="https://www.hackerrank.com/certificates/455cd8a160cf">
            <img src={Award} alt="" className="a-award-img" />
          </a>
          <div className="a-award-texts">
            <h4 className="a-award-title">Javascript Intermediate</h4>
            <p className="a-award-desc">
              Certified in Intermediate JavaScript by HackerRank for
              problem-solving proficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
