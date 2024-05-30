"use client";
import classNames from "classnames";
import { ReactNode, useEffect } from "react";

interface PopupProps {
  className?: string;
  closeOnClickOutside?: boolean;
  children?: ReactNode;
  isVisible: boolean;
  setIsVisible: (value: string | null) => void;
}

const Popup = ({
  className,
  closeOnClickOutside = false,
  children,
  isVisible,
  setIsVisible,
}: PopupProps) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (closeOnClickOutside && isVisible) {
        const popupElement = document.getElementById("popup");
        if (popupElement && !popupElement.contains(event.target as Node)) {
          setIsVisible(null);
        }
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isVisible, closeOnClickOutside]);

  const popupClasses = classNames("popup", className, { visible: isVisible });

  return (
    <div id="popup" className={popupClasses}>
      {children}
    </div>
  );
};

export default Popup;
