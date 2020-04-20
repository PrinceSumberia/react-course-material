import { useState } from "react";

const useFormState = (initialValues) => {
  const [state, setState] = useState(initialValues);
  const handleChange = (evt) => {
    setState({
      ...state,
      [evt.target.name]: evt.target.value,
    });
  };
  return [state, handleChange];
};

export default useFormState;
