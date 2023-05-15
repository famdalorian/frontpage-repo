import React from 'react';
import Article from '../components/Article';

function Projects() {
  const projectLink = "https://SuperCoach.famdalorian.repl.co";

  return (
    <div className="projects-wrapper">
      <Article
        image={require("../assets/supercoach-image.png")}
        headline="SuperCoach Project"
        subtext="Check out my SuperCoach project, a powerful tool for self improvemnt ."
        link={projectLink}
      />
    </div>
  );
}

export default Projects;
