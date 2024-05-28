"use client";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { MouseEvent, ReactNode } from "react";

interface ButtonProps {
  className?: string;
  variant?: "primary" | "secondary";

  size?: "sm" | "md" | "xs";
  disabled?: boolean;
  children: ReactNode;
  loading?: boolean;
  to?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

const Button = ({
  className,
  loading,
  children,
  onClick,
  to,
  variant = "primary",
  size,
  ...props
}: ButtonProps) => {
  const router = useRouter();
  return (
    <button
      className={classNames(
        `button ${variant}-button ${size}-button`,
        className,
        {
          loading,
        }
      )}
      onClick={(e) => {
        if (to) {
          router.push(to);
        } else if (onClick) {
          onClick(e);
        }
      }}
      {...props}
    >
      <span
        className={classNames("loader", {
          "loader-primary": variant !== "primary",
        })}
      ></span>
      <div className="button-text">{children}</div>
    </button>
  );
};

export default Button;
