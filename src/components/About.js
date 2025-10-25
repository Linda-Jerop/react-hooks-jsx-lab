import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I am a passionate web developer who loves creating beautiful and functional websites. I enjoy learning new technologies and solving complex problems through code.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
