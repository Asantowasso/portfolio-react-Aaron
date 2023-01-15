import React from "react";
import '../styles/Home.css'
//This will serve as the "home" page it will be what the visitor first sees when they open my site

export default function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
      <h2>About Aaron</h2>
      <p> My name is Aaron Santowasso. I am a recent graduate of the coding bootcamp provided through the University of Richmond. I am interested in pursuing a career in web or software development. </p>
      <p>This course has not only taught me the skills I will need in order to be a successful employee, it has also given me valuable lessons in time management and working alongside others. On this site you will find a portfolio of my work, my resume and means of contacting me.  </p>
    </div>
  );
}
