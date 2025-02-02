import { Navigate, Outlet, useLocation } from "react-router-dom";
import { notifications } from '@mantine/notifications';
import { useEffect } from "react";

function ProtectedRoute() {
    // 先確認localStorage中是否有jwt
    const token = localStorage.getItem("jwt");
    const location = useLocation();

    useEffect(() => {
        if (!token) {
            notifications.show({
                title: "尚未登入", 
                message: "請先登入帳號",
                color: "red",
            })
        }
    }, [token])

    if (!token) {
        // 設置replace，讓user按返回鍵時不會再到之前那個頁面
        // eg 購物車按下購買確認按鍵後，會導向完成購買頁面
        //    若有設置replace，則當使用者按下返回鍵，便不會又回到購物車頁面
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return (
        <Outlet />
    )
}

export default ProtectedRoute;