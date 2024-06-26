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
    <>
      {label && <p className="inputBox-label">{label}</p>}
      <div className={classNames(`inputBox ${variant}-input`, className)}>
        <input
          className={classNames(`input`)}
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
    </>
  );
};

export default Input;
