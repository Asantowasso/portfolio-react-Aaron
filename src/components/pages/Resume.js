import React from "react";
import "../styles/Resume.css";
// This is the "Resume" page where I will showcase my resume

export default function Resume() {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <h2>
        Download Resume{" "}
        <a href="https://docs.google.com/document/d/1OedBMVQNpG44xlkVA69tEOXoZOJmwglziv4Vh6NS3FE/edit?usp=sharing">
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

      <iframe
        src="https://docs.google.com/document/d/1OedBMVQNpG44xlkVA69tEOXoZOJmwglziv4Vh6NS3FE/preview"
        width="1135"
        height="600"
        title="resume"
      ></iframe>
    </div>
  );
}
