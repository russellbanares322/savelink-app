import axios from "axios";
import { useState, useEffect } from "react";
const useFetchLanguages = () => {
  const [data, setData] = useState([]);
  const { VITE_REACT_APP_BASE_URL } = import.meta.env;
  useEffect(() => {
    axios.get(`${VITE_REACT_APP_BASE_URL}/languages`).then((res) => {
      setData(res.data);
    });
  }, []);
  return { data };
};

export default useFetchLanguages;
