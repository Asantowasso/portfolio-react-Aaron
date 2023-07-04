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
      <p>My name is Aaron Santowasso and I am a multi-talented professional skilled in writing, communication, customer service, web development and time managment. Currently employed as an IT professional serving Truist a large commercial bank. I also have experience creating multimedia projects for non-profits informing the public about topics including American History and disability advocacy. Graduated from Randolph Macon College with a Bachelor's degree in History. Completed a six month course on web development through the University of Richmond. Gained experience working with a team to create full-stack web applicaitons. Thank you for visiting the site.  </p>
    </div>
  );
}
