import { Link } from "react-router-dom";
import { Button } from "@mantine/core";

function NavbarLogout(){
    return(
        <>
            <Button component={Link} to="/login">登入</Button>
        </>
    )
}

export default NavbarLogout;