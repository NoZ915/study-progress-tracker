import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function OAuthCallbackPage() {
  const navigate = useNavigate();

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
            // 儲存 JWT Token
            localStorage.setItem("token", data.token);

            // 轉跳到首頁或使用者頁面
            navigate("/");
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
  }, [navigate]);

  return <div>正在處理 Google 登入...</div>;
}

export default OAuthCallbackPage;