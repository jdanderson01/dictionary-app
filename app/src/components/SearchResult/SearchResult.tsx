// src/components/SearchResult/SearchResult.tsx

import React from "react";
import WordDisplay from "./WordDisplay";
import Phonetics from "./Phonetics";
import "./SearchResult.css";

interface Meaning {
  partOfSpeech: string;
  definitions: {
    definition: string;
    example?: string;
  }[];
}

interface Phonetic {
  text: string;
}

interface SearchResultProps {
  data: {
    word: string;
    phonetics: Phonetic[];
    meanings: Meaning[];
  };
}

const SearchResult: React.FC<SearchResultProps> = ({ data }) => {
  const { word, phonetics, meanings } = data;

  console.log("SearchResult data:", data);

  return (
    <div className="search-result">
      <WordDisplay word={word} />
      <Phonetics phonetics={phonetics} />
    </div>
  );
};

export default SearchResult;
