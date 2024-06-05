import React from "react";

/**
 * Props for the Button component.
 */
type ButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
};

function Button({ onClick, children, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} flex items-center justify-center gap-2 rounded-lg px-4 py-1 hover:scale-105 transform transition-transform duration-300 ease-in-out shadow-md hover:shadow-lg `}
    >
      {children}
    </button>
  );
}

export default Button;
