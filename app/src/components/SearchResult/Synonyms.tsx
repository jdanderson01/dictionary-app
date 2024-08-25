import "./Synonyms.css";

interface SynonymsProps {
  synonyms: string[];
}

const Synonyms: React.FC<SynonymsProps> = ({ synonyms }) => {
  return (
    <div className="synonyms-container">
      <h3 className="synonyms-heading">Synonyms:</h3>
      <span className="synonyms-list">
        {synonyms.map((synonym, index) => (
          <span key={index} className="synonym-item">
            {synonym}
            {index < synonyms.length - 1 && ", "}
          </span>
        ))}
      </span>
    </div>
  );
};

export default Synonyms;
