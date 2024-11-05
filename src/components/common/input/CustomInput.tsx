import React from "react";
import "./CustomInput.css";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: {
    type?: string;
    message?: string;
  };
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="input-container">
        {label && <label className="input-label">{label}</label>}
        <input
          ref={ref}
          className={`input ${error ? "input-error" : ""}`}
          {...props}
        />
        {error && <p className="error-message">{error.message}</p>}
      </div>
    );
  }
);

export default CustomInput;
