//Note: context資料夾可以放例如AuthProvider, ThemeProvider, NotificationProvider（全域性）
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../hooks/users/useAuth";
import { setAuthToken } from "../apis/axiosInstance.js";
import { createContext, useContext, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const { user, setUser } = useAuth();

    useEffect(() => {
        const jwt = localStorage.getItem("jwt");
        if (jwt) {
            setAuthToken(jwt);
            setUser(jwtDecode(jwt));
        }
    }, []);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export const useAuthContext = () => useContext(AuthContext);