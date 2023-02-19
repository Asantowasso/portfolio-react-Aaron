import React from 'react';
import '../styles/Footer.css';
import git from '../assets/github.png'
import Linkedin from '../assets/Linkedin.png'
import Stack from '../assets/Stack.png'
//The footer that will be visible across all of my pages

function Footer() {
  return (
  
  <ul className="footer">
  <li><a href = "https://github.com/Asantowasso"><img src = {git} alt="github logo "width="75" height="75"/></a></li>
  <li><a href = "https://www.linkedin.com/in/aaron-santowasso-a1bb45210"><img src = {Linkedin} alt="github logo "width="75" height="75"/></a></li>
  <li><a href = "https://stackoverflow.com/users/21032515/aaronas"> <img src = {Stack} alt="github logo "width="75" height="75"/></a></li>
  </ul>
  
  
  )
  
  }

  export default Footer;