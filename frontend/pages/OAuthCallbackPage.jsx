import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/users/useAuth";

function OAuthCallbackPage() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  useEffect(() => {
    // 取得網址中的 ?code=xxxxx
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      // 拆出去變一個hook
      fetch(`${import.meta.env.VITE_API_BASE_URL}/users/googleAuth`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.token) {
            if (data.isNewUser) {
              // 儲存 JWT Token
              localStorage.setItem("jwt", data.token);
              setUser(data.user);
              window.location.reload();
              navigate("/edit-profile");
            }
            else {
              // 儲存 JWT Token
              localStorage.setItem("jwt", data.token);
              setUser(data.user);
              window.location.reload();
              navigate("/");
            }
          } else {
            console.error("OAuth 登入失敗:", data.error);
            navigate("/");
          }
        })
        .catch((error) => {
          console.error("請求錯誤:", error);
          navigate("/");
        });
    } else {
      console.error("未獲取到授權碼");
      navigate("/");
    }
  }, []);

  return <div>正在處理 Google 登入...</div>;
}

export default OAuthCallbackPage;