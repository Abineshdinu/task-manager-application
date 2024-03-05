import { createContext, useContext, useReducer, useState } from "react";
import { tasksReducer } from "./reducers";

const GlobalContext = createContext();
export const GlobalContextProvider = ({ children }) => {
  const [tasksState, tasksDispatch] = useReducer(tasksReducer, {
    tasks: [],
  });

  const [query, setQuery] = useState(""); 
  return (
    <GlobalContext.Provider
      value={{ tasksState, tasksDispatch, query, setQuery }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
