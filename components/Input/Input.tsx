"use client";
import classNames from "classnames";

interface InputProps {
  type?: string;
  className?: string;
  placeholder?: string;
  variant?: "normal" | "icon";
  rightIcon?: any;
  onClick?: (event: MouseEvent) => void;
}

const Input = ({
  type,
  className,
  placeholder,
  rightIcon,
  onClick,
  variant = "normal",
}: InputProps) => {
  return (
    <div className={classNames(`inputBox ${variant}-input`)}>
      <input
        className={classNames(`input`)}
        type={type}
        placeholder={placeholder}
      />
      {rightIcon && (
        <div className={classNames(`input-img`)} onClick={() => onClick}>
          {rightIcon}
        </div>
      )}
    </div>
  );
};

export default Input;
