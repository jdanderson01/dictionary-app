import { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  return (
    <div>
      <TopBar onToggle={toggleDarkMode} isDarkMode={isDarkMode} />
      <SearchBar />
      <h1 className="text-heading">Welcome</h1>
    </div>
  );
}

export default App;
