import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./SearchBar.css";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <TextField
      label="Search"
      variant="outlined"
      value={searchTerm}
      onChange={handleChange}
      fullWidth
      className="custom-text-field"
    />
  );
};

export default SearchBar;
