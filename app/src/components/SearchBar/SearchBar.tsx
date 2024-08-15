import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./SearchBar.css";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <TextField
        variant="outlined"
        value={searchTerm}
        onChange={handleChange}
        fullWidth
        className="custom-text-field"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
