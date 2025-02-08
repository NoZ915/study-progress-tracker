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
    if (code && !localStorage.getItem("oauthHandled")) {
      // 防止reload又呼叫一次
      localStorage.setItem("oauthHandled", "true");
      // 拆出去變一個hook
      fetch(`${import.meta.env.VITE_API_BASE_URL}/users/googleAuth`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.token) {
            // 儲存 JWT Token
            localStorage.setItem("jwt", data.token);
            setUser(data.user);
            // navigate("/");
            window.location.reload();
          } else {
            console.error("OAuth 登入失敗:");
            navigate("/");
          }
        })
        .catch(() => {
          console.error("請求錯誤:");
          navigate("/");
        });
    } else {
      navigate("/");
    }
  }, []);

  return <div>正在處理 Google 登入...</div>;
}

export default OAuthCallbackPage;