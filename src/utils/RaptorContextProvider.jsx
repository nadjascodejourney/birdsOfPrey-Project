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
      .then((response) => {
        console.log("Fetched Raptors:", response.data); // Add this line to check if the data is fetched correctly

        setRaptors(response.data);
      })
      .catch((error) => console.error("error fetching data", error));
  }, []);

  return (
    <RaptorContext.Provider value={{ raptors }}>
      {children}
    </RaptorContext.Provider>
  );
};
