import React from "react";
import Spinner from "../loaderSpinner/Spinner";

const Button = ({
  isDisable = false,
  isLoading,
  onClick,
  title,
  icon,
  type,
}) => {
  return (
    <button
      disabled={isLoading || isDisable}
      className="flex items-center text-md justify-center gap-4 w-full bg-blue disabled:bg-blue/70 text-white px-3 py-2 rounded-lg hover:bg-slate-900 text-center"
      onClick={onClick}
      type={type}
    >
      {!isLoading && icon} {!isLoading && title} {isLoading && <Spinner />}
    </button>
  );
};

export default Button;
