interface Definition {
  definition: string;
}

interface DefinitionsProps {
  definitions: Definition[];
}

const Definitions: React.FC<DefinitionsProps> = ({ definitions }) => {
  const firstThreeDefinitions = definitions.slice(0, 3);

  return (
    <div className="definitions">
      <h3>Definitions:</h3>
      <ul>
        {firstThreeDefinitions.map((def, index) => (
          <li key={index}>{def.definition}</li>
        ))}
      </ul>
    </div>
  );
};

export default Definitions;
