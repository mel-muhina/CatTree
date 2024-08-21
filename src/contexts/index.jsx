import React, {useState, useContext, createContext} from "react";

const CatContext = createContext();

export const CatProvider = ({children}) => {
  const [catData, setCatData] = useState([]);

  return <CatContext.Provider value={{catData, setCatData}}>{children}</CatContext.Provider>;
};

export const useCat = () => useContext(CatContext);
