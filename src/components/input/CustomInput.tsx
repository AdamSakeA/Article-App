import React, { FC, InputHTMLAttributes } from "react";

interface CustomInputAttributes extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string | null;
  error?: string | null;
  required: boolean;
}

const CustomInput: FC<CustomInputAttributes> = ({ name, label, error, required, ...rest }) => {
  return (
    <div>
      <input
        name={name}
        className={`input input-sm input-ghost w-full bg-none ${error ? "input-error" : ""}`}
        {...rest}
      />
      <span className={`text-sm text-error`}>{error}</span>
    </div>
  );
};

export default CustomInput;
