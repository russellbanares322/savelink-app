import React from "react";

const Button = ({ onClick, title, icon }) => {
  return (
    <button
      className="flex items-center justify-center gap-4 bg-blue text-white px-4 py-3 rounded-lg hover:bg-slate-900 text-center"
      onClick={onClick}
    >
      {icon} {title}
    </button>
  );
};

export default Button;
