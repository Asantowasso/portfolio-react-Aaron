import React from "react";
import "../styles/Resume.css";
// This is the "Resume" page where I will showcase my resume

export default function Resume() {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <h2>Download Resume</h2>

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
