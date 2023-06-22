import React from "react";
import { useState } from "react";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { onClick, className, variant = "primary", children, ...rest } = props;

  let buttonClasses = "px-[40px] py-2 rounded-full transition-shadow";

  if (variant === "primary") {
    buttonClasses += " bg-black text-white shadow-md";
  } else if (variant === "secondary") {
    buttonClasses += " bg-gray-300 text-gray-700";
  }

  buttonClasses += ` ${className}`;

  return (
    <button className={buttonClasses} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
