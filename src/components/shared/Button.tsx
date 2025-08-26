import React from "react";
import "./button.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "custom";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  className = "",
  icon,
  variant = "primary",
  size = "medium",
  disabled = false,
}: ButtonProps) => {
  const getVariantClass = () => {
    switch (variant) {
      case "primary":
        return "btn-primary";
      case "secondary":
        return "btn-secondary";
      case "custom":
        return "";
      default:
        return "btn-primary";
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case "small":
        return "btn-small";
      case "medium":
        return "btn-medium";
      case "large":
        return "btn-large";
      default:
        return "btn-medium";
    }
  };

  return (
    <button
      className={`custom-button ${getVariantClass()} ${getSizeClass()} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="button-icon">{icon}</span>}
      <span className="button-text">{children}</span>
    </button>
  );
};

export default Button;
