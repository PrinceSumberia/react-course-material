import axios from "axios";
import { useState, useEffect } from "react";

const useFetchData = (initialValue) => {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(false);

  const handleFetch = () => {
    setLoading(!loading);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://dinoipsum.herokuapp.com/api/?format=text&paragraphs=1"
      );
      setData({
        para: response.data,
      });
    };
    fetchData();
  }, [loading]);

  return [data, handleFetch];
};

export default useFetchData;
