import useLocalStorageState from "./useLocalStorageState";

const useFormState = (initialValues) => {
  const [state, setState] = useLocalStorageState("form", initialValues);
  const handleChange = (evt) => {
    setState({
      ...state,
      [evt.target.name]: evt.target.value,
    });
  };
  return [state, handleChange];
};

export default useFormState;
