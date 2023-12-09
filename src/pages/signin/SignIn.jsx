import React from "react";
import Button from "../../components/button/Button";
import { inputsData } from "./inputsData";

const SignIn = () => {
  return (
    <form className="mb-1">
      {inputsData.map((input) => (
        <div
          key={input.id}
          className="mb-4 flex flex-col items-start justify-start gap-1"
        >
          <label className="text-sm font-semibold">{input.label}</label>
          <input
            autoFocus={input.label === "Email Address"}
            className="text-sm outline-none border-b border-b-blue w-full py-1"
            type={input.type}
            placeholder={input.placeholder}
          />
        </div>
      ))}
      <Button title="Sign In" />
    </form>
  );
};

export default SignIn;
