import React from "react";
import "../styles/Resume.css";
// This is the "Resume" page where I will showcase my resume

export default function Resume() {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <h2>
        Download Resume{" "}
        <a href="https://www.dropbox.com/scl/fi/hlo0dc95396pgz20uz4mz/Aaron-Resume-Updated-August-2022.docx?dl=0&rlkey=p5atfflpbyk7e91lztnnzmmou">
          <button>Click Here</button>
        </a>{" "}
      </h2>

      <ul>
        <h3>Proficiencies-Front End</h3>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
      <ul>
        <h3>Proficiencies-Back End</h3>
        <li>Web APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>SQL</li>
        <li>MongoDB</li>
      </ul>
    </div>
  );
}
