import {
  WifiOutlined as WifiIcon,
  AndroidOutlined as AndroidIcon,
  CodeOutlined as FirmwareIcon,
} from "@ant-design/icons";

export const projects = [
  {
    title: "Wireless Network Security Assessment",
    avatar: <WifiIcon />,
    description: (
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
  },
  {
    title: "Android App Certificate Pinning Analysis",
    avatar: <AndroidIcon />,
    description: (
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
          <b> Core Competencies:</b> Reverse Engineering Skills, Scripting and
          Automation, Security Assessment, Root Certificate Detection, Proxy
          Tools Proficiency
        </p>
      </div>
    ),
  },
  {
    title: "Router Firmware Analysis Project",
    avatar: <FirmwareIcon />,
    description: (
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
          <b> Core Competencies:</b> Firmware Analysis, QEMU Emulation,
          Vulnerability Assessment, Exploitation Testing, Network Security
        </p>
      </div>
    ),
  },
];
