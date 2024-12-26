import React from "react";

const Select = ({
  optionValue,
  label = "Select",
  required = false,
  size,
  border,
  onChange,
  value,
  isDisabled = false,
  className = "",
}) => {
  const selectSize = {
    sm: "select-sm",
    lg: "select-lg",
  };

  const borderColor = {
    danger: "border-danger",
    success: "border-success",
  };

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
        {/* Label */}
        {label && (
          <label className="form-label max-w-32" htmlFor={label}>
            {label}
            {required && <span className="text-danger">*</span>}
          </label>
        )}

        {/* Input Container */}
        <div className="relative w-full">
          <select
            className={`select ${size && selectSize[size]} ${
              border && borderColor[border]
            }`}
            name="select"
            disabled={isDisabled}
            value={value}
            onChange={onChange}
          >
            <option value="">Silahkan pilih data</option>
            {optionValue.map((option) => (
              <option key={option?.value} value={option?.value}>
                {option?.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Select;
