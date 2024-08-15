import WordDisplay from "./WordDisplay";
import Phonetics from "./Phonetics";
import Definitions from "./Definitions";
import "./SearchResult.css";

interface Definition {
  definition: string;
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
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

  const definitions = meanings.flatMap((meaning) => meaning.definitions);

  return (
    <div className="search-result">
      <WordDisplay word={word} />
      <Phonetics phonetics={phonetics} />
      <Definitions definitions={definitions} />
    </div>
  );
};

export default SearchResult;
