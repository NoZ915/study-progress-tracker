import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Center, Paper, Text, Loader } from "@mantine/core"

function AuthRedirect(){
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");
        const isNewUser = params.get("isNewUser") === "true"; //用這方法轉成布林值超酷！

        // 把JWT token存進localStorage
        if(token) localStorage.setItem("jwt", token);

        // 欺騙user 讓user感覺我們有在幫他做登入的動作
        setTimeout(() => {
            if(isNewUser) navigate("/edit-profile");
            else navigate("/");
        }, 1500);

    }, [navigate])

    return(
        <Center style={{ height: "100vh", flexDirection: "column" }}>
            <Paper shadow="md" p="xl" radius="md">
                <Text align="center" size="lg" weight={500}>
                    正在登入中，請稍候...
                </Text>
                <Center mt="md">
                    <Loader color="blue" size="lg" />
                </Center>
            </Paper>
        </Center>
    )
}

export default AuthRedirect;