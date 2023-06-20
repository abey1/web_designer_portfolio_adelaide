import React, { useContext, useReducer } from "react";
import { createContext } from "react";
import reducer from "../reducer/AppReducer";
import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../utils/actions";

const AppContext = createContext();

const initialState = {
  sidebarOpen: false,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const openSideBar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };
  const closeSideBar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };
  return (
    <AppContext.Provider value={{ ...state, openSideBar, closeSideBar }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
