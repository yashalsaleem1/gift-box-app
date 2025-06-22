import React from "react";
import { Button } from "react-bootstrap";

const CustomButton = ({
  children,
  variant = "primary",
  icon: Icon,
  size = "md",
  className = "",
  onClick,
  type = "button",
  ...rest
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {Icon && <Icon className="me-2" />}
      {children}
    </Button>
  );
};

export default CustomButton;
