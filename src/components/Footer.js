import React from 'react';

import { FaGithub } from "react-icons/fa";
import {FaLinkedinIn } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'



function Footer() {
  return (
<div style={{textAlign: 'center'}}>
  <a href="https://github.com/NicoleD1999" style={{color: '#0a0908'}}><FaGithub style={{height: 60, width: 60, padding: 10,}} /></a>
  <a href="www.linkedin.com/in/nicole-dahl-29b14019b" style={{color: '#0a0908'}}>
  <FaLinkedinIn style={{height: 60, width: 60,padding: 10, }}/>
  </a>
  <a href="https://twitter.com/OzzieDahl" style={{color: '#0a0908'}}>
  <FaTwitter style={{height: 60, width: 60, padding: 10,}} href="https://twitter.com/OzzieDahl"/>
  </a>
</div>

  );
}

export default Footer;