import React from 'react';
import '../styles/Footer.css';
import git from '../assets/github.png'
import Linkedin from '../assets/Linkedin.png'
import Stack from '../assets/Stack.png'
//The footer that will be visible across all of my pages

function Footer() {
  return (
  
  <ul className="footer">
  <li><img src = {git} alt="github logo "width="75" height="75"/></li>
  <li><img src = {Linkedin} alt="github logo "width="75" height="75"/></li>
  <li><img src = {Stack} alt="github logo "width="75" height="75"/></li>
  </ul>
  
  
  )
  
  }

  export default Footer;