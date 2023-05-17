import React from 'react';
import Article from '../components/Article';

function Projects() {
  const projectLink = "https://SuperCoach.famdalorian.repl.co";
  const projectLink1 = "https://gamma.io/collections/eyedinals";
  const projectLink2 = "https://projectxxisp.com";

  return (
    <div className="projects-wrapper">
      <br />
      <Article
        image={require("../assets/supercoach-image.png")}
        headline="SuperCoach Project"
        subtext="Check out my SuperCoach project, a powerful tool for self improvemnt ."
        link={projectLink}
      />
      <br />
      <Article
        image={require("../assets/eyedinal.png")}
        headline="@eyeversed inspired BTC NFT project on STX"
        subtext="A for fun project connecting community"
        link={projectLink1}
      /> <br />
      <Article
        image={require("../assets/xxisp1.png")}
        headline="Project XXisp"
        subtext="Keep Up To Date With Project XXisp, Our IRL community project."
        link={projectLink2}
      /> <br />
    </div>
  );
}

export default Projects;
