import React from "react";
import useFormState from "./useFormState";

export default function Form(props) {
  const [values, handleChange] = useFormState({ email: "", password: "" });
  return (
    <div>
      <input
        type="text"
        name="email"
        placeholder="Enter your email"
        onChange={handleChange}
        value={values.email}
      />
      <input
        type="text"
        name="password"
        placeholder="Enter your password"
        onChange={handleChange}
        value={values.password}
      />
      <p>Email is: {values.email}</p>
      <p>Password is: {values.password}</p>
    </div>
  );
}
