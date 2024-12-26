import React from "react";

const TextArea = ({
  label = "Textarea",
  required = false,
  size,
  border,
  onChange,
  rows = 6,
  value,
  isDisabled = false,
  placeholder = "",
  className = "",
}) => {
  const inputSize = {
    sm: "textarea-sm",
    lg: "textarea-lg",
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
        <div className="relative w-full">
          <textarea
            className={`textarea w-full ${inputSize[size] || ""} ${
              borderColor[border] || ""
            }`}
            disabled={isDisabled}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows}
            value={value}
          />
        </div>
      </div>
    </div>
  );
};

export default TextArea;
