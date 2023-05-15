import React from "react";
import Article from "../components/Article";
import "../styles/writing.css"

function Writing() {
  return (
    <div className="writing-wrapper">
      <h1 className="writing">My articles</h1>
      <div className="writing-blurb">
        <h3 className="blurb">
          Welcome to my writing page, where I dive deep into the rabbit holes of NFT's, Combat sports,
          and the intersection of art and technology.
        </h3>
      </div>
      <div className="articles">
        <Article
          image={require("../assets/MT_mind.png")}
          headline="A Fighters Mindset"
          subtext="Read about the mindset of a fighter."
          link="https://mirror.xyz/xxisp.eth/K63w-lT4-n9HBMaxUWQo0m-ZQVWS-B-H3o5psEleI54"
        />
        <br></br>
        <Article
          image={require("../assets/ape1.png")}
          headline="Stop The Cap!"
          subtext="A DEEP dive in to the swamp!."
          link="https://mirror.xyz/xxisp.eth/5LenEA8Pnh627PwDFyBqei-3cjTw-LKktBxTOInon8Q"
        />
      </div>
    </div>
  );
}

export default Writing;
