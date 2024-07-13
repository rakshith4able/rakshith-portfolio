import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO() {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Explore Rakshith Raj G P's portfolio — a graduate student at Concordia University specializing in Information Systems Security. Delve into a showcase of comprehensive software development experience, including proficiency in JavaScript, Python, Java, and C++. Discover a passion for cybersecurity, honed skills in web development, and a commitment to continuous learning. Connect now to explore collaboration opportunities and learn how Rakshith can contribute to your software and cybersecurity projects."
      />
      <meta
        name="keywords"
        content="Rakshith Raj G P, Information Systems Security, Concordia University, Cybersecurity, Web Development, Software Development, JavaScript, Python, Java, C++, Portfolio, Continuous Learning"
      />
      <meta name="author" content="Rakshith Raj G P" />
      <meta property="og:title" content="Rakshith | Portfolio" />
      <meta
        property="og:description"
        content="Explore Rakshith Raj G P's portfolio specializing in Information Systems Security. Discover software development expertise in JavaScript, Python, Java, and C++, and a passion for cybersecurity."
      />
      <meta property="og:image" content="%PUBLIC_URL%/image.png" />
      <meta property="og:url" content="https://rakshith-portfolio.web.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Rakshith Raj G P's Portfolio" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Rakshith | Portfolio" />
      <meta
        name="twitter:description"
        content="Explore Rakshith Raj G P's portfolio specializing in Information Systems Security. Discover software development expertise in JavaScript, Python, Java, and C++, and a passion for cybersecurity."
      />
      <meta name="twitter:image" content="%PUBLIC_URL%/image.png" />
      <meta name="twitter:site" content="@Rakshithrajable" />
      <meta name="twitter:creator" content="@Rakshithrajable" />
      <link rel="icon" href="favicon.ico" type="image/icon type" />
    </Helmet>
  );
}
