import { useState } from "react";
import {setAuthToken } from "../../apis/axiosInstance";

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

    return { user, loginWithGoogle, logout };
}