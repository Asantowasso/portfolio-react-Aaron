import React from "react";
import "../styles/Work.css";
import vet from "../assets/vetKP.jpg";
import api from "../assets/API.png";
import coffee from "../assets/coffee.jpg";
import typing from "../assets/typing.jpg";
import quiz from "../assets/mapquiz.jpg";
import table from "../assets/table.jpg";
// This is the "myWork" page and it will be where my work will be showcased

export default function Work() {
  return (
    <ul className="projects">
      <h1>My Work</h1>
      <p>
        Here is a selection of projects I have completed. This work includes
        both group and individual efforts.
      </p>
      <li class="image">
        <h3>Pet-to-Vet</h3>
        <img
          src={vet}
          class="image__img"
          alt="Vet with a kitten and puppy"
          width="320"
          height="200"
        />
        <div class="image__overlay">
          <div class="image__title">Create a profile for your pet</div>
          <p class="image__description"> <a href = "https://github.com/Asantowasso/pet-to-vet">Github</a> <a href = "https://damp-forest-39395.herokuapp.com/login"> Deployed</a></p>
        </div>
      </li>

      <li>
        <h3>Social Media API</h3>
        <img
          src={api}
          alt="Represents the features of an application to store and manage information about users"
          width="320"
          height="200"
        />
        <div class="image__overlay">
          <div class="image__title">Find and manage user profiles</div>
          <p class="image__description"><a href = "https://github.com/Asantowasso/Social-api-Aaron">Github</a> <a href= "https://drive.google.com/file/d/1e66kPc6XpYh-KxASAZ5azrFmF9Rurcrr/view">Demonstration</a></p>
        </div>
      </li>

      <li>
        <h3>Moonbucks</h3>
        <img
          src={coffee}
          alt="Represents the features of an application to store and manage information about users"
          width="320"
          height="200"
        />
        <div class="image__overlay">
          <div class="image__title">
            A mock website featuring a currency coverter
          </div>
          <p class="image__description"><a href="https://github.com/Asantowasso/Group3-projectMoonbucks">Github</a> <a href= "https://asantowasso.github.io/Group3-projectMoonbucks/">Deployed</a></p>
        </div>
      </li>

      <li>
        <h3>Text editor</h3>
        <img
          src={typing}
          alt="a person typing on a laptop keyboard"
          width="320"
          height="200"
        />
        <div class="image__overlay">
          <div class="image__title">
            PWA that can be run in the browser or installed
          </div>
          <p class="image__description"><a href="https://github.com/Asantowasso/text-editor-Aaron">Github</a> <a href="https://hidden-inlet-47886.herokuapp.com/">Deployed</a></p>
        </div>
      </li>

      <li>
        <h3>Geography Quiz</h3>
        <img
          src={quiz}
          alt="A compass and map"
          width="320"
          height="200"
        />
        <div class="image__overlay">
          <div class="image__title">
           Test your knowledge of world Geography
          </div>
          <p class="image__description"><a href="https://github.com/Asantowasso/Aaron-geography-quiz">Github</a> <a href="https://asantowasso.github.io/Aaron-geography-quiz/">Deployed</a></p>
        </div>
      </li>

      <li>
        <h3>Gastronauts</h3>
        <img
          src={table}
          alt="a person typing on a laptop keyboard"
          width="320"
          height="200"
        />
        <div class="image__overlay">
          <div class="image__title">
          Create a profile and make a reservation
          </div>
          <p class="image__description"><a href="https://github.com/Asantowasso/project-3-gastronauts">Github</a> <a href="https://safe-badlands-66151.herokuapp.com/">Deployed</a></p>
        </div>
      </li>
    </ul>

    
  );
}
