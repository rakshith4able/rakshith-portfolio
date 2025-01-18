import "./about.css";

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
          I am Rakshith Raj G P, a dedicated Full-Stack Developer with 1.5 years
          of hands-on experience crafting high-performance, secure web
          applications using TypeScript and React. With a Master’s in
          Information Systems Security from Concordia University, I possess a
          unique combination of technical expertise and a strong foundation in
          cybersecurity, which allows me to create applications that are not
          only scalable and efficient but also secure. I excel in both frontend
          development, where I build intuitive, responsive user interfaces, and
          backend development, where I integrate robust services using
          technologies like Node.js and Firebase. My passion for clean,
          maintainable code and continuous improvement drives me to stay up to
          date with the latest development trends and security practices. As I
          look ahead to new challenges, I am actively seeking a Full-Stack
          Developer role where I can leverage my expertise in TypeScript, React,
          and secure software practices to contribute to innovative and
          impactful projects.
        </p>
      </div>
    </div>
  );
};

export default About;
