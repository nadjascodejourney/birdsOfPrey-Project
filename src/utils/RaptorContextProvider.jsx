import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RaptorContext = createContext();

const baseURL = "http://localhost:5000";

export const RaptorContextProvider = ({ children }) => {
  const [raptors, setRaptors] = useState([]);

  useEffect(() => {
    // fetch data with axios:
    axios
      .get(`${baseURL}/raptors`)
      .then((response) => setRaptors(response.data))
      .catch((error) => console.error("error fetching data", error));
  }, []);

  return (
    <RaptorContext.Provider value={{ raptors }}>
      {children}
    </RaptorContext.Provider>
  );
};