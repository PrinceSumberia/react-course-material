import { useState, useEffect } from "react";

const useLocalStorageState = (key, initialValues) => {
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(
        window.localStorage.getItem(key) || String(initialValues)
      );
    } catch (error) {
      val = initialValues;
    }
    return val;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorageState;
