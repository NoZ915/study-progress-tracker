import { useState } from "react";
import { setAuthToken } from "../../apis/axiosInstance";

// 主要控制user狀態（但此處setUser只會在logout用到）
// login時去setUser是在AuthProvider.jsx中設定（是用此處useAuth()的setUser設定）
export const useAuth = () => {
    const [user, setUser] = useState(null);

    const loginWithGoogle = () => {
        window.location.href = `${import.meta.env.VITE_API_BASE_URL}/auth/google`;
    }

    const logout = () => {
        localStorage.removeItem("jwt");
        setAuthToken(null);
        setUser(null);
        // 手動觸發 storage 事件，讓其他地方知道 jwt 變了
        window.dispatchEvent(new Event("storage"));

        // 重新整理頁面
        window.location.href = "/"

        localStorage.removeItem("oauthHandled");
    };

    return { user, setUser, loginWithGoogle, logout };
}