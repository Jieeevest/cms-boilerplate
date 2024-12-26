import React, { Fragment } from "react";

const DefaultBadge = ({
  text = "Badge",
  appearance = "primary",
  type = "default",
  className,
}) => {
  const appearanceType = {
    primary: "badge-primary",
    success: "badge-success",
    info: "badge-info",
    danger: "badge-danger",
    warning: "badge-warning",
    dark: "badge-dark",
  };

  const bagdeType = {
    outline: "badge-outline",
    pill: "badge-pill",
  };

  return (
    <Fragment>
      <span
        className={`badge ${bagdeType[type]} ${appearanceType[appearance]} ${className}`}
      >
        {text}
      </span>
    </Fragment>
  );
};

export default DefaultBadge;
