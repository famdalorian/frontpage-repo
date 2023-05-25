import React, { useState, useEffect } from "react";
import "../styles/wordle.css"

const Wordle = () => {
  const [guesses, setGuesses] = useState([]);
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [word, setWord] = useState("");

  useEffect(() => {
    const words = [
      "brace",
      "grasp",
      "frank",
      "twist",
      "jumps",
      "apple",
      "beach",
      "candy",
      "daisy",
      "eagle",
      "fancy",
      "grape",
      "honey",
      "ivory",
      "jolly",
      "karma",
      "lemon",
      "mango",
      "naval",
      "olive",
      "peach",
      "queen",
      "rumba",
      "salsa",
      "tiger",
      "umbra",
      "vocal",
      "waltz",
      "xerox",
      "yacht",
      "zebra",
      "alarm",
      "baker",
      "chair",
      "dance",
      "evoke",
      "flame",
      "giant",
      "happy",
      "image",
      "joker",
      "karma",
      "lemon",
      "magic",
      "noble",
      "oasis",
      "piano",
      "quack",
      "risky",
      "sunny",
      "tango",
      "ultra",
      "vivid",
      "witty",
      "xenon",
      "yummy",
      "zeal",
    ];

    const generateNewWord = () => {
      const randomIndex = Math.floor(Math.random() * words.length);
      const newWord = words[randomIndex];
      setWord(newWord);
    };

    generateNewWord(); // Generate a new word on initial render

    const intervalId = setInterval(() => {
      generateNewWord(); // Generate a new word every 24 hours
    }, 24 * 60 * 60 * 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleGuess = (guess) => {
    setGuesses((prevGuesses) => [...prevGuesses, guess]);
  };

  const handleCorrectGuess = (guess) => {
    if (guess === word) {
      alert("Congratulations! You guessed the correct word!");
    } else {
      setCorrectGuesses((prevCorrectGuesses) => [...prevCorrectGuesses, guess]);
    }
  };

  const renderGuesses = () => {
    return guesses.map((guess, index) => {
      const isCorrect = correctGuesses.includes(guess);
      const color = isCorrect ? "green" : "gray";
      const correctLetters = getCorrectLetters(guess);
      return (
        <div key={index} style={{ backgroundColor: color }}>
          {guess} - {correctLetters} correct letters
        </div>
      );
    });
  };

  const getCorrectLetters = (guess) => {
    let count = 0;
    for (let i = 0; i < guess.length; i++) {
      if (word.includes(guess[i])) {
        count++;
      }
    }
    return count;
  };

  return (
    <div>
      <h1>Wordle</h1>
      <p>Guess the five-letter word.</p>
      <div>{renderGuesses()}</div>
      <input
        type="text"
        placeholder="Enter your guess"
        onChange={(event) => {
          setGuesses((prevGuesses) => [...prevGuesses, event.target.value]);
        }}
      />
      <button onClick={() => handleCorrectGuess(guesses[guesses.length - 1])}>
        Check
      </button>
    </div>
  );
};

export default Wordle;
