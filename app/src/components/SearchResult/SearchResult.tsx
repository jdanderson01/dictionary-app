import WordDisplay from "./WordDisplay";
import Phonetics from "./Phonetics";
import Definitions from "./Definitions";
import Synonyms from "./Synonyms";
import "./SearchResult.css";

interface Definition {
  definition: string;
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
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
  const synonyms = meanings.flatMap((meaning) => meaning.synonyms || []);

  return (
    <div className="search-result">
      <WordDisplay word={word} />
      <Phonetics phonetics={phonetics} />
      <Definitions definitions={definitions} />
      {synonyms.length > 0 && <Synonyms synonyms={synonyms} />}
    </div>
  );
};

export default SearchResult;
