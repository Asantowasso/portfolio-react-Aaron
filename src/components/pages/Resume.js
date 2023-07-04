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
        <h3>Work History</h3>
        <li><i>Campus Tech</i>- Compucom</li>
        <p>May 2022-Present</p>
        <p>Resolve common software and hardware issues for clients. Help new hires obtain needed correct software and peripherals. Create documentation to teach clients and coworkers about new technologies and procedures. Consistently close most support tickets per month in mid-Atlantic group.</p>
        <li><i>IT Contractor</i> - Strategic Systems</li>
        <p>August 2021-May 2022</p>
        <p>Configure workstations at office locations according to instructions. Test hardware to ensure proper functionality. Had duration of work extended owing to strong performance.</p>
        <h3>Internships</h3>
        <li>SOAR365</li>
        <p>February 2022-May 2022</p>
        <p>Collected print and digital records to create a written history of the organization. Coordinated with staff remotely to submit drafts, present work and search locations for useful material.</p>
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
