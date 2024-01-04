import CloudsideLogo from "../../img/cloudside.png";
import AteuLogo from "../../img/ateu.png";
import "./certifications.css";

const companies = [
  {
    name: "Cloudside Technologies",
    role: "Software Engineer",
    location: "Bengaluru",
    duration: "Dec 2021-Dec 2022",
    website: "https://thecloudside.com/",
    logo: CloudsideLogo,
    background: "#EA702D",
    workArea:
      "React, NodeJS, Front-end, Back-end, Data Visualization, Data Analysis, ChartJS,D3.js, Nivo, Javascript, Python, Typescript, Flask, Jupiter, SQL, MongoDB ",
  },
  {
    name: "ATEU Softwares",
    role: "Web Developer Intern",
    location: "Mysuru",
    duration: "Aug 2020-Sept 2020",
    website: "https://www.ateusoftwares.com/",
    logo: AteuLogo,
    background: "#068932",
    workArea:
      "Web Development, Wordpress, App Development, Web Design, Web Hosting, Bootstrap, MySQL, PHP",
  },
];

const Certifications = () => {
  return (
    <div className="e">
      <div className="e-texts">
        <h1 className="e-title">Certifications</h1>
        <p className="e-desc"></p>
      </div>
      <div className="e-container">
   
      </div>
    </div>
  );
};

export default Certifications;
