import React from "react";
import { initialState } from "../reducer/initialState";

interface IContextProps {
    state: typeof  initialState;
    dispatch: any;
    service: any;
  }

export const Context = React.createContext({} as IContextProps);