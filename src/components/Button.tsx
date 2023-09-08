interface ButtonProps {
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { onClick, className, variant = "primary", children, ...rest } = props;

  let buttonClasses = " py-2 rounded-full transition-all";

  if (variant === "primary") {
    buttonClasses += " bg-primary text-white shadow-md";
  } else if (variant === "secondary") {
    buttonClasses += " border border-1 border-primary text-primary";
  }

  buttonClasses += ` ${className}`;

  return (
    <button className={buttonClasses} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
