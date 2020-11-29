import {createContext} from "react";
import {RootStore} from "../store/RootStore";

export const RootStoreContext = createContext(new RootStore());
export const RootStoreProvider = RootStoreContext.Provider;