import {
  WifiOutlined as WifiIcon,
  AndroidOutlined as AndroidIcon,
  CodeOutlined as FirmwareIcon,
  VideoCameraOutlined as VideoIcon,
  AppstoreOutlined as WebIcon,
  LockOutlined as AuthIcon,
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
  {
    title: "Real-Time Webcam Video Recording and Playback System",
    avatar: <VideoIcon />,
    description: (
      <div>
        <ul>
          <li>Initiated live webcam video recording seamlessly.</li>
          <li>
            Implemented real-time communication using Socket.io for efficient
            data transfer.
          </li>
          <li>
            Engineered video chunking for optimal processing and transfer
            efficiency.
          </li>
          <li>
            Utilized ffmpeg for server-side video encoding in multiple
            resolutions.
          </li>
          <li>
            Integrated DASH.js for adaptive streaming playback, adjusting
            quality based on network conditions.
          </li>
          <li>
            Designed an intuitive user interface for easy initiation,
            monitoring, and stopping of video recording.
          </li>
          <li>
            Enabled users to access and playback recorded videos within the
            application.
          </li>
          <li>Utilized Tools: React.js, Node.js, Socket.io, ffmpeg, DASH.js</li>
          <li>
            Github Repository:{" "}
            <a
              href="https://github.com/rakshith4able/RealTime-Webcam-Recorder-Player"
              target="_blank"
              rel="noreferrer"
            >
              RealTime-Webcam-Recorder-Player
            </a>
          </li>
        </ul>
        <p>
          <b> Core Competencies:</b> Full-Stack Development, Real-Time
          Communication, Video Processing, Adaptive Streaming, UI/UX Design,
          Error Handling, Documentation
        </p>
      </div>
    ),
  },

  {
    title: "Portfolio Website Development",
    avatar: <WebIcon />,
    description: (
      <div>
        <ul>
          <li>
            Developed a personal portfolio website using React and Ant Design
            for a modern and visually appealing user experience.
          </li>
          <li>
            Ensured responsiveness across various devices for seamless
            navigation and accessibility.
          </li>
          <li>
            Hosted the portfolio on Firebase
            <a
              href="https://rakshith-portfolio.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              (website)
            </a>
            , providing reliable and scalable web hosting.
          </li>
          <li>
            Included detailed sections showcasing personal details, skillset,
            certifications, and a contact form for easy communication.
          </li>
          <li>
            Integrated Email.js for efficient handling of contact form
            submissions.
          </li>
          <li>Utilized Tools: React, Ant Design, Firebase, Email.js</li>
          <li>
            Github Repository:
            <a
              href="https://github.com/rakshith4able/rakshith-portfolio"
              target="_blank"
              rel="noreferrer"
            >
              rakshith-portfolio
            </a>
          </li>
        </ul>
        <p>
          <b> Core Competencies:</b> Front-end Development, Responsive Web
          Design, Website Hosting, Firebase
        </p>
      </div>
    ),
  },
  {
    title: "Role-Based Authentication System",
    avatar: <AuthIcon />,
    description: (
      <div>
        <ul>
          <li>
            Developed a React-based front-end application that interfaces with
            the Reqres REST API.
          </li>
          <li>
            Utilized Redux Toolkit for efficient state management, ensuring a
            seamless user experience.
          </li>
          <li>
            Implemented a robust role-based authentication system, assigning
            specific roles to users retrieved from the Reqres API.
          </li>
          <li>
            Executed user authentication, seamlessly redirecting users to
            designated dashboards based on their roles.
          </li>
          <li>
            Admin dashboard functionality empowers administrators with
            comprehensive CRUD operations for effective user management.
          </li>
          <li>Utilized Tools: React, Redux Toolkit, Reqres REST API</li>
          <li>
            Github Repository:
            <a
              href="https://github.com/rakshith4able/reqres-users-app"
              target="_blank"
              rel="noreferrer"
            >
              reqres-users-app
            </a>
          </li>
        </ul>
        <p>
          <b> Core Competencies:</b> React.js Development, Redux Toolkit State
          Management, Role-Based Authentication, CRUD Operations
        </p>
      </div>
    ),
  },
];
