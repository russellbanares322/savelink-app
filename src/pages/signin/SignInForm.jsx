import React from "react";

const SignInForm = () => {
  return (
    <form className="flex flex-col items-center justify-start">
      <label>Email Address</label>
      <input type="text" placeholder="Enter your email address..." />
      <label>Password</label>
      <input type="password" placeholder="Enter your password..." />
    </form>
  );
};

export default SignInForm;
