import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { axiosInstance, setAuthToken } from "../../apis/axiosInstance";

export const useAuth = () => {
    const [user, setUser] = useState(null);

    // const loginWithGoogle = useGoogleLogin({
    //     onSuccess: async (googleResponse) => {
    //         const googleToken = googleResponse.access_token;

    //         // 傳送 Google Token 到後端以獲取 JWT
    //         const { data } = await axiosInstance.get("/auth/google", {
    //             headers: { Authorization: googleToken }
    //         });
    //         console.log("data", data)
    //         const jwt = data.token;

    //         // 儲存 JWT 並設定 Authorization Header
    //         localStorage.setItem("jwt", jwt);
    //         setAuthToken(jwt);

    //         // 解析 JWT 以取得使用者資訊
    //         const decodedUser = jwtDecode(jwt);
    //         setUser(decodedUser);
    //     },
    //     onError: (error) => {
    //         console.error("Google Login Error:", error);
    //     },
    // })

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