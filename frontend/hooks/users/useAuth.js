import { useState } from "react";
import { setAuthToken } from "../../apis/axiosInstance";

// 主要控制user狀態（但此處setUser只會在logout用到）
// login時去setUser是在AuthProvider.jsx中設定（是用此處useAuth()的setUser設定）
export const useAuth = () => {
    const [user, setUser] = useState(null);

    const loginWithGoogle = () => {
        window.location.href = "http://localhost:8080/api/auth/google";
    }

    const logout = () => {
        localStorage.removeItem("jwt");
        setAuthToken(null);
        setUser(null);
    };

    return { user, setUser, loginWithGoogle, logout };
}