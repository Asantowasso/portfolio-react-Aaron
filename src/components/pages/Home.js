import React from "react";
import "../styles/Home.css";
import Aaronimg from "../assets/Aaronimg.jpg";
//This will serve as the "home" page it will be what the visitor first sees when they open my site

export default function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
      <div class="avi">
        <img src={Aaronimg} alt="My Picture" width="100" height="100" />
      </div>

      <h2>About Aaron</h2>

      <h3>Thanks for visiting my page. Here you will find information about my work, how to contact me and my up to date resume.</h3>
      <h3>More about Aaron-</h3>
      <p>I'm Aaron Santowasso. I just recently graduated from a full stack development bootcamp provided through the University of Richmond. I have experience working on every aspect of a web application. This means I can build and style a front end with HTML, CSS or JSX. However I am also well versed in technologies that power the backend of applications and websites. These include SQL, MongoDB and RESTful. I am currently looking for junior development roles. I would prefer remote work but am willing to relocate.</p>
    </div>
  );
}
