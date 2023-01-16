import React from "react";
import '../styles/Work.css'
import vet from '../assets/vetKP.jpg';
import api from '../assets/APIproject.jpg'
import coffee from '../assets/coffeeshop.jpg'
import typing from '../assets/typing.jpg'
// This is the "myWork" page and it will be where my work will be showcased

export default function Work() {
  return (
    <ul className="projects">
      <h1>My Work</h1>
      <p>Here is a selection of projects I have completed. This work includes both group and individual efforts.</p>
      <li class="image">
        <h3>Pet-to-Vet</h3>
      <img src= {vet} class="image__img" alt="Vet with a kitten and puppy" width="320" height="200"/>
      <div class= "image__overlay">

      </div>
      </li>

      <li>
        <h3>Social Media API</h3>
        <img src= {api}  alt="Represents the features of an application to store and manage information about users" width="320" height="200"/>
      </li>

      <li>
        <h3>Moonbucks</h3>
        <img src= {coffee} alt="Represents the features of an application to store and manage information about users" width="320" height="200"/>

      </li>

      <li>
        <h3>Text editor</h3>
        <img src= {typing} alt="a person typing on a laptop keyboard" width="320" height="200"/>
      </li>

    </ul>

  );

}