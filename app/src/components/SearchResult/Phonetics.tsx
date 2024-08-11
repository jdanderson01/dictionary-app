import React from "react";

interface Phonetic {
  text: string;
}

interface PhoneticsProps {
  phonetics: Phonetic[];
}

const Phonetics: React.FC<PhoneticsProps> = ({ phonetics }) => {
  console.log("Phonetics prop:", phonetics);

  if (!phonetics || phonetics.length === 0) {
    return <p>No phonetic information available.</p>;
  }

  const firstPhoneticText = phonetics[0]?.text;

  return (
    <div className="phonetics">
      <p>
        <strong>Phonetics:</strong>{" "}
        {firstPhoneticText || "No phonetic text available"}
      </p>
    </div>
  );
};

export default Phonetics;
