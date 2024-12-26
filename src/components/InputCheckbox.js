import React from "react";

const InputCheckbox = ({
  label = "Checkbox",
  checked,
  size,
  onChange,
  isDisabled,
  className = "",
}) => {
  const checkboxSize = {
    sm: "checkbox-sm",
    lg: "checkbox-lg",
  };
  return (
    <div className={`relative ${className}`}>
      <label className="form-label flex items-center gap-2.5">
        <input
          className={`checkbox ${size && checkboxSize[size]}`}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange && onChange(e.target.checked)}
          aria-checked={checked}
          disabled={isDisabled}
        />
        {label}
      </label>
    </div>
  );
};

export default InputCheckbox;
