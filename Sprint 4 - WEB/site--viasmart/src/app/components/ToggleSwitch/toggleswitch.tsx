// components/ToggleSwitch.jsx
import React, { useState } from "react";

const ToggleSwitch = ({ onToggle, initialState = false }) => {
  const [enabled, setEnabled] = useState(initialState);

  const handleToggle = () => {
    setEnabled(!enabled);
    if (onToggle) onToggle(!enabled);
  };

  return (
    <button
      onClick={handleToggle}
      className={`w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-300 ${
        enabled ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <div
        className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
          enabled ? "translate-x-7" : "translate-x-0"
        }`}
      ></div>
    </button>
  );
};

export default ToggleSwitch;
