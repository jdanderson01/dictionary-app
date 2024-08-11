import ToggleButton from "./ToggleButton";
import "./TopBar.css";
import logo from "../../assets/images/logo.svg";
import downArrow from "../../assets/images/icon-arrow-down.svg";
import moon from "../../assets/images/icon-moon.svg";

interface TopBarProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ isDarkMode, onToggle }) => {
  return (
    <nav className="topBar">
      <ul>
        <li>
          <a href="/">
            <img src={logo} className="book-icon" alt="Logo" />
          </a>
        </li>
        <li>
          <img
            src={downArrow}
            className="down-arrow"
            alt="Arrow pointing down"
          />
        </li>
        <div className="divider"></div>
        <li>
          <ToggleButton checked={isDarkMode} onChange={onToggle} />
        </li>
        <li>
          <img src={moon} className="moon-icon" alt="Crescent moon icon" />
        </li>
      </ul>
    </nav>
  );
};

export default TopBar;
