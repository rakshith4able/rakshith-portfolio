import { Collapse, theme } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

import Project from "../project/Project";
import "./projectList.css";
import { projects } from "./project-data";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const getItems = (panelStyle) => [
  {
    key: "1",
    label: "Wireless Network Security Assessment",
    children: (
      <div>
        <ul>
          <li>
            Successfully executed Deauthentication Attacks to disrupt Wi-Fi
            network connections.
          </li>
          <li>
            Captured and cracked WPA2 Passwords by analyzing 4-way handshake
            packets.
          </li>
          <li>
            Implemented an Evil Twin Access Point, creating a rogue access point
            to simulate real-world security threats.
          </li>
          <li>
            Conducted DNS & ARP Spoofing to intercept and manipulate network
            traffic, highlighting the dangers of unsecured networks.
          </li>
          <li>Utilized Tools: Wireshark, Aircrack-ng, Dnsmasq, Ettercap</li>
        </ul>
        <p>
          <b> Core Competencies:</b> Critical Thinking, Problem Assessment and
          Analysis, Technical Proficiency, Adaptability
        </p>
      </div>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: "Android App Certificate Pinning Analysis",
    children: (
      <div>
        <ul>
          <li>
            Conducted in-depth analysis of Android APKs using Kali Linux and APK
            Tool.
          </li>
          <li>
            Developed a Python script for batch decompilation and comprehensive
            examination.
          </li>
          <li>
            Evaluated certificate pinning security measures, including the
            detection of modified root certificates.
          </li>
          <li>
            Employed Burp Suite proxy to assess and modify network requests,
            highlighting potential vulnerabilities in mobile app security.
          </li>
          <li>Utilized Tools: Android Studio, Python, Apktool</li>
        </ul>
        <p>
          <b> Core Competencies:</b>Reverse Engineering Skills, Scripting and
          Automation, Security Assessment, Root Certificate Detection, Proxy
          Tools Proficiency
        </p>
      </div>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: "Router Firmware Analysis Project",
    children: (
      <div>
        <ul>
          <li>
            Utilized Firmadyne to extract router firmware and emulate it using
            QEMU for dynamic analysis.
          </li>
          <li>
            Conducted vulnerability assessments to identify weaknesses such as
            SNMP access without credentials and unauthorized web access.
          </li>
          <li>
            Checked the firmware against common Metasploit exploits to uncover
            potential security risks.
          </li>
          <li>
            Employed a range of tools and techniques for dynamic analysis.
          </li>
          <li>Utilized Tools: Binwalk, Firmadyne, QEMU, Firefox, Metasploit</li>
        </ul>
        <p>
          <b> Core Competencies:</b>Firmware Analysis, QEMU Emulation,
          Vulnerability Assessment, Exploitation Testing, Network Security
        </p>
      </div>
    ),
    style: panelStyle,
  },
];
const ProjectList = () => {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
    width: "100%",
    textAlign: "left",
  };
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Projects</h1>
      </div>

      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        style={{
          background: token.colorBgContainer,

          width: "100%",
        }}
        items={getItems(panelStyle)}
      />
    </div>
  );
};

export default ProjectList;
