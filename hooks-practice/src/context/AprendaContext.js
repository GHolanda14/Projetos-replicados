import { createContext, useContext, useState } from "react";

export const AprendaContext = createContext();

const AprendaContextProvider = ({ children }) => {
  const [nome, setNome] = useState("");

  return (
    <AprendaContext.Provider value={{ nome,setNome}}>
      {children}
    </AprendaContext.Provider>
  );
};

export const useAprendaContext = () => {
  const context = useContext(AprendaContext);
}