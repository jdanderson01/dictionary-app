import React from "react";

interface WordDisplayProps {
  word: string;
}

const WordDisplay: React.FC<WordDisplayProps> = ({ word }) => {
  return (
    <div className="word-display">
      <h1>{word}</h1>
    </div>
  );
};

export default WordDisplay;
