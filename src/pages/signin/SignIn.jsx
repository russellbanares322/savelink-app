import React from "react";
import { useState } from "react";
import Button from "../../components/button/Button";
import { inputsData } from "./inputsData";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { value, id } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <form className="mb-1">
      {inputsData.map((input) => {
        const inputId = input.id;
        return (
          <div
            key={inputId}
            className="mb-4 flex flex-col items-start justify-start gap-1"
          >
            <label className="text-sm font-semibold">{input.label}</label>
            <input
              id={inputId}
              value={formData[inputId]}
              onChange={handleInputChange}
              autoFocus={input.label === "Email Address"}
              className="text-sm outline-none border-b border-b-blue w-full py-1"
              type={input.type}
              placeholder={input.placeholder}
            />
          </div>
        );
      })}
      <Button type="submit" title="Sign In" />
    </form>
  );
};

export default SignIn;
