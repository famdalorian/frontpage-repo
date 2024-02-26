import React from 'react';
import Article from '../components/Article';
import '../App.css';

import Wordle from '../components/Wordle';  

function Projects() {
  const projectLink = "https://SuperCoach.famdalorian.repl.co";
  const projectLink1 = "https://gamma.io/collections/eyedinals";

  return (
    <div className="projects-wrapper">
      <Wordle />
      <Article
        image={require("../assets/supercoach-image.png")}
        headline="SuperCoach Project"
        subtext="Check out my SuperCoach project, a powerful tool for self improvemnt ."
        link={projectLink}
      />
      <Article
        image={require("../assets/eyedinal.png")}
        headline="@eyeversed inspired BTC NFT project on STX"
        subtext="A for fun project connecting community"
        link={projectLink1}
      />
    </div>
  );
}

export default Projects;
