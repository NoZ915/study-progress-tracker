import { useContext } from "react";
import { createContext } from "react";

const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);