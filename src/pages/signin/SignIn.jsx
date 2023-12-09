import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import { auth } from "../../config/firebaseConfig";
import { isInputFieldEmpty } from "../../utils/isInputFieldEmpty";
import { inputsData } from "./inputsData";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formSettings, setFormSettings] = useState({
    isInputDirty: false,
    isLoading: false,
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { value, id } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormSettings({
      ...formSettings,
      isLoading: true,
    });
    if (
      isInputFieldEmpty(formData.email) ||
      isInputFieldEmpty(formData.password)
    ) {
      setFormSettings({
        ...formSettings,
        isInputDirty: true,
      });
    } else {
      try {
        const isUserSuccessfullySignedIn = await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );

        if (isUserSuccessfullySignedIn) {
          navigate("/");
          setFormData({
            email: "",
            password: "",
          });
          setFormSettings({
            isInputDirty: false,
            isLoading: false,
          });
        }
      } catch (err) {
        toast.error(err.message);
        setFormSettings({
          ...formSettings,
          isLoading: false,
        });
      }
    }
  };

  return (
    <form onSubmit={onSubmit} className="mb-1">
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
            {formSettings.isInputDirty &&
              isInputFieldEmpty(formData[inputId]) && (
                <p className="text-xs text-red">{input.label} is required</p>
              )}
          </div>
        );
      })}
      <Button type="submit" title="Sign In" />
    </form>
  );
};

export default SignIn;
