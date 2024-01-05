import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import CloudsideLogo from "../../img/cloudside.png";
import AteuLogo from "../../img/ateu.png";
import "./experience.css";

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
      "React, NodeJS, Front-end, Back-end, Data Visualization, Data Analysis, ChartJS,D3.js, Nivo, Javascript, Python, Typescript, Flask, Jupyter, SQL, MongoDB ",
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

const Experience = () => {
  return (
    <div className="e">
      <div className="e-texts">
        <h1 className="e-title">Work Experience</h1>
        <p className="e-desc"></p>
      </div>
      <div className="e-container">
        <VerticalTimeline>
          {companies.map((company, idx) => (
            <VerticalTimelineElement
              key={`${idx}+1`}
              className="vertical-timeline-element--work"
              contentStyle={{ background: company.background, color: "#fff" }}
              contentArrowStyle={{
                borderRight: `7px solid  ${company.background}`,
              }}
              date={company.duration}
              iconStyle={{ background: "#fff", color: "#fff",cursor:'pointer' }}
              icon={<img src={company.logo} width="100%" alt={company.name} />}
              iconOnClick={()=>{window.open(company.website)}}
            >
              <h3 className="vertical-timeline-element-title">
                {`${company.name} - ${company.role}`}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {company.location}
              </h4>
              <p>{company.workArea}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
