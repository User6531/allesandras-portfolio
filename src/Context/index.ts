import React from "react";
import { initialState } from "../reducer/initialState";

interface IContextProps {
    state: typeof  initialState;
    dispatch: ({type}:{type:string}) => void;
  }

export const Context = React.createContext({} as IContextProps);