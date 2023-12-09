import React from "react";

const Button = ({ onClick, title, icon }) => {
  return (
    <button
      className="flex items-center text-md justify-center gap-4 w-full bg-blue text-white px-3 py-2 rounded-lg hover:bg-slate-900 text-center"
      onClick={onClick}
    >
      {icon} {title}
    </button>
  );
};

export default Button;
