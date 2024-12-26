import React from "react";

const DefaultButton = ({
  text = "Button",
  appearance = "primary",
  type = "default",
  icon,
  onClick,
  className,
}) => {
  const buttonType = {
    default: "",
    outline: "btn-outline",
    pill: "badge-clear",
  };
  return (
    <button
      className={`${className} btn btn-${appearance} ${buttonType[type]}`}
      onClick={onClick}
    >
      {icon && <i className={icon}></i>}
      {text}
    </button>
  );
};

export default DefaultButton;
