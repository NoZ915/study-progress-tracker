import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Group, Button, Container, Image } from "@mantine/core";
import { jwtDecode } from "jwt-decode";
import NavbarLogin from "./NavbarLogin";
import NavbarLogout from "./NavbarLogout";

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("jwt");
    if (storedUser) {
      setUser(jwtDecode(storedUser));
    }
  }, []);

  return (
    <header>
      <Container>
        <Group position="apart" py="md">
          <Link to="/">
            <Image src="/images/logo.png" alt="Logo" height={40} />
          </Link>

          <Group spacing="md">
            <Button component={Link} to="/">講義清單</Button>
            {user ? ( <NavbarLogin user={user} /> ): ( <NavbarLogout user={user} /> )}
          </Group>
        </Group>
      </Container>
    </header>
  );
};

export default Navbar;