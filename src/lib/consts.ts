import { FaGithub, FaLinkedin } from "react-icons/fa";

const titles = [
  { text: "Software Engineer" },
  { text: "Cybersecurity Enthusiast" },
  { text: "Penetration Tester" },
] as const;

const iconButtonSizes = { sm: 10, md: 25, lg: 35 };

const socialLinks = [
  {
    name: "Github",
    link: "https://github.com/rakshith4able/",
    icon: FaGithub,
    iconSize: iconButtonSizes.md,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rakshithrajgp/",
    icon: FaLinkedin,
    iconSize: iconButtonSizes.md,
  },
];

export { titles, iconButtonSizes, socialLinks };
