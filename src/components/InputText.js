import React from "react";

const InputText = ({
  label = "File",
  required = false,
  type = "text",
  size,
  border,
  onChange,
  value,
  isDisabled = false,
  placeholder = "",
  className = "",
}) => {
  const inputSize = {
    sm: "input-sm",
    lg: "input-lg",
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
          {/* Optional Icon */}
          <i className="ki-outline ki-magnifier absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>

          <input
            className={`input w-full ${inputSize[size] || ""} ${
              borderColor[border] || ""
            }`}
            disabled={isDisabled}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            value={value}
          />
        </div>
      </div>
    </div>
  );
};

export default InputText;
