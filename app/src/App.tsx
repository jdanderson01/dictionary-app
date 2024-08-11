import { useEffect, useState } from "react";
import TopBar from "./components/TopBar/TopBar";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResult from "./components/SearchResult/SearchResult";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchData, setSearchData] = useState<any>(null);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSearch = async (term: string) => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${term}`
      );
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data = await response.json();
      console.log("API response:", data);

      setSearchData(data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  return (
    <div className="container">
      <TopBar onToggle={toggleDarkMode} isDarkMode={isDarkMode} />
      <SearchBar onSearch={handleSearch} />
      {searchData && <SearchResult data={searchData} />}
    </div>
  );
}

export default App;
