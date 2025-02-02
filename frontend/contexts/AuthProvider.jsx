//Note: context資料夾可以放例如AuthProvider, ThemeProvider, NotificationProvider（全域性）
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import PropTypes from 'prop-types';
import { useAuth } from "../hooks/users/useAuth";
import { setAuthToken } from "../apis/axiosInstance.js";
import { AuthContext } from "../hooks/useAuthContext.js";

function AuthProvider({ children }) {
    const { user, setUser } = useAuth();

    useEffect(() => {
        const jwt = localStorage.getItem("jwt");
        if (jwt) {
            setAuthToken(jwt);
            setUser(jwtDecode(jwt));
        }
    }, [setUser]);


    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default AuthProvider;