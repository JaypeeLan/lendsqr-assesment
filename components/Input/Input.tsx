"use client";
import classNames from "classnames";
import { useState } from "react";

interface InputProps {
  type?: string;
  className?: string;
  placeholder?: string;
  variant?: "normal" | "icon";
  rightIcon?: any;
  iconProps?: string;
  label?: string;
  onClick?: (event: React.MouseEvent) => void;
}

const Input = ({
  type,
  className,
  label,
  placeholder,
  rightIcon,
  onClick,
  iconProps,
  variant = "normal",
}: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const inputType = type === "password" && isPasswordVisible ? "text" : type;

  const handleIconClick = (event: React.MouseEvent) => {
    if (type === "password") {
      setIsPasswordVisible(!isPasswordVisible);
    }
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <div className={classNames(`inputBox ${variant}-input`)}>
      {label && <span className="inputBox-label">{label}</span>}
      <input
        className={classNames(`input`, className)}
        type={inputType}
        placeholder={placeholder}
      />
      {rightIcon && (
        <div
          className={classNames(`input-img ${iconProps}`)}
          onClick={handleIconClick}
        >
          {rightIcon}
        </div>
      )}
    </div>
  );
};

export default Input;
