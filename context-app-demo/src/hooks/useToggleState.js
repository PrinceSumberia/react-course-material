import { useState } from "react";

export default function useToggle(initialVal = false) {
  const [state, setstate] = useState(initialVal);
  const toggle = () => {
    setstate(!state);
  };

  return [state, toggle];
}
