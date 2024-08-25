import { useState } from "react";
import { TextField } from "@mui/material";
import SearchIcon from "../../assets/images/icon-search.svg";
import "./SearchBar.css";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchClick = () => {
    if (searchTerm.trim() !== "") {
      onSearch(searchTerm);
    }
  };
  return (
    <div className="search-bar-container">
      <TextField
        className="custom-text-field"
        variant="outlined"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          endAdornment: (
            <img
              src={SearchIcon}
              alt="search"
              className="search-icon"
              onClick={handleSearchClick}
            />
          ),
        }}
      />
    </div>
  );
};

export default SearchBar;
