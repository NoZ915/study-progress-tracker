import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Center, Loader } from "@mantine/core"

function AuthRedirect() {
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");
        const isNewUser = params.get("isNewUser") === "true"; //用這方法轉成布林值超酷！

        // 把JWT token存進localStorage
        if (token) localStorage.setItem("jwt", token);

        // NewUser導向"/edit-profile"填寫個資
        // OldUser導向"/"回首頁
        if (isNewUser) navigate("/edit-profile");
        else navigate("/");

    }, [navigate])

    return (
        <Center mt="md">
            <Loader color="blue" size="lg" />
        </Center>
    )
}

export default AuthRedirect;