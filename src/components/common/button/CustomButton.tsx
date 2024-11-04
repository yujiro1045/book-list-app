import React, { ButtonHTMLAttributes, FC } from "react";
import "./CustomButton.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "small" | "medium" | "large";
  loading?: boolean;
};

const CustomButton: FC<Props> = ({
  size = "medium",
  children,
  loading = false,
  ...props
}) => {
  return (
    <button {...props} disabled={loading} className={`button ${size}`}>
      {loading ? "Cargando..." : children}
    </button>
  );
};

export default CustomButton;
