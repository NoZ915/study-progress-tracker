//Note: context資料夾可以放例如AuthProvider, ThemeProvider, NotificationProvider（全域性）
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import PropTypes from 'prop-types';
import { useAuth } from "../hooks/users/useAuth";
import { setAuthToken } from "../apis/axiosInstance.js";
import { AuthContext } from "../hooks/useAuthContext.js";
import { useGetUserById } from "../hooks/users/useGetUserById.js";

function AuthProvider({ children }) {
    const { user, setUser } = useAuth();
    const [userId, setUserId] = useState();
    useEffect(() => {
        let jwt = localStorage.getItem("jwt");
        if (jwt) {
            setAuthToken(jwt);
            jwt = jwtDecode(jwt);
            setUserId(jwt.id);
        }
    }, [setUser, setUserId, user]);

    const { data: userData } = useGetUserById(userId, { enabled: !!userId });
    useEffect(() => {
        if (userData) {
            setUser(userData);
        }
    }, [setUser, userData, user]);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default AuthProvider;