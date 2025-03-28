import React, { useState } from "react";

const NumberGuessingGame = () => {
  const [targetNumber, setTargetNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Try guessing a number between 1 and 100");
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleGuess = () => {
    if (gameOver) return;
    const num = parseInt(guess, 10);
    if (isNaN(num) || num < 1 || num > 100) {
      setMessage("Please enter a valid number between 1 and 100");
      return;
    }
    setAttempts(attempts + 1);
    if (num === targetNumber) {
      setMessage(`🎉 Correct! You guessed it in ${attempts + 1} tries.`);
      setGameOver(true);
    } else if (num < targetNumber) {
      setMessage("Too low! Try again.");
    } else {
      setMessage("Too high! Try again.");
    }
  };

  const restartGame = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setMessage("Try guessing a number between 1 and 100");
    setAttempts(0);
    setGameOver(false);
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      backgroundColor: "#282c34",
    }}>
      <div style={{
        background: "white",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)",
        textAlign: "center",
        width: "350px"
      }}>
        <h1 style={{ color: "#333" }}>Number Guessing Game 🎯</h1>
        <p style={{ marginBottom: "15px", color: "#555" }}>{message}</p>
        <input
          type="number"
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            textAlign: "center",
            width: "100%"
          }}
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          disabled={gameOver}
        />
        <button
          style={{
            marginTop: "15px",
            padding: "12px",
            width: "100%",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            backgroundColor: "#007bff",
            color: "white",
            fontSize: "16px"
          }}
          onClick={handleGuess}
          disabled={gameOver}
        >
          Guess
        </button>
        {gameOver && (
          <button
            style={{
              marginTop: "15px",
              padding: "12px",
              width: "100%",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              backgroundColor: "#28a745",
              color: "white",
              fontSize: "16px"
            }}
            onClick={restartGame}
          >
            Play Again
          </button>
        )}
        <p style={{ marginTop: "15px", color: "#777" }}>Attempts: {attempts}</p>
      </div>
    </div>
  );
};

export default NumberGuessingGame;
