import React from "react";

const Avatar = ({
  src,
  size = "20",
  status,
  initial,
  bgColor,
  textColor,
  borderColor,
  className = "",
}) => {
  const baseSize = `size-${size}`;

  return (
    <div className={`relative ${className}`}>
      {src ? (
        <img alt="" className={`${baseSize} rounded-full`} src={src} />
      ) : (
        <div
          className={`${baseSize} rounded-full inline-flex items-center justify-center text-${Math.ceil(
            size / 8
          )}xl font-semibold border ${borderColor} ${bgColor} ${textColor}`}
        >
          {initial}
        </div>
      )}
      {status && (
        <span
          className={`absolute bottom-2 right-2 transform translate-y-1/2 size-2.5 rounded-full ring-2 ring-light ${
            status === "success"
              ? "bg-success"
              : status === "gray"
              ? "bg-gray-400"
              : ""
          }`}
        ></span>
      )}
    </div>
  );
};

export default Avatar;
