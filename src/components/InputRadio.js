import React from "react";

const InputRadio = ({
  label = "Radio",
  name,
  checked,
  size,
  onChange,
  isDisabled,
  value,
  className = "",
}) => {
  const radioSize = {
    sm: "radio-sm",
    lg: "radio-lg",
  };
  return (
    <div className={`relative ${className}`}>
      <label className="form-label flex items-center gap-2.5">
        <input
          name={name}
          className={`radio ${size && radioSize[size]}`}
          type="radio"
          value={value}
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

export default InputRadio;
