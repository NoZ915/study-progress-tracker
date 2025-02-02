import { useContext } from "react";
import { createContext } from "react";

export const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);
// 利用AuthPorvider中的AuthContext，有傳參數user，可以全域性的管理使用者user登入狀態/資訊