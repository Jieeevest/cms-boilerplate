import React from "react";

const InputFile = ({
  label = "File",
  size,
  border,
  isMultiple,
  onChange,
  isDisabled,
  className = "",
}) => {
  const inputSize = {
    sm: "file-input-sm",
    lg: "file-input-lg",
  };
  const borderColor = {
    danger: "border-danger",
    success: "border-success",
  };
  return (
    <div className={`relative ${className}`}>
      {label && <p className="form-label font-semibold mb-2">{label}</p>}
      <input
        className={`file-input ${size && inputSize[size]} ${
          border && borderColor[border]
        }`}
        disabled={isDisabled}
        onChange={onChange}
        type="file"
        multiple={isMultiple}
      />
    </div>
  );
};

export default InputFile;
