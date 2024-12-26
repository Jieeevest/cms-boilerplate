import React from "react";

const Switch = ({
  label = "Switch",
  checked,
  size,
  onChange,
  isDisabled,
  className = "",
}) => {
  const checkboxSize = {
    sm: "switch-sm",
    lg: "switch-lg",
  };
  return (
    <div className={`relative ${className}`}>
      <label
        className={`switch ${
          size && checkboxSize[size]
        } flex items-center gap-2.5`}
      >
        {label && <span className="switch-label"> {label}</span>}
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange && onChange(e.target.checked)}
          aria-checked={checked}
          disabled={isDisabled}
        />
      </label>
    </div>
  );
};

export default Switch;
