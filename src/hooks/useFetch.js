import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = (endpointUrl) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      // .get("https://jsonplaceholder.typicode.com/users")
      .get(endpointUrl)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return data
};
