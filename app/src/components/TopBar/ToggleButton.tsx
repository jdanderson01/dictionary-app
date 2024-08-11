import { FC } from "react";
import "./ToggleButton.css";

interface ToggleButtonProps {
  checked: boolean;
  onChange: () => void;
}

const ToggleButton: FC<ToggleButtonProps> = ({ checked, onChange }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleButton;
