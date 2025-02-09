import { Link } from "react-router-dom";
import { Group, Container } from "@mantine/core";
import { useAuthContext } from "../hooks/useAuthContext.js";
import styles from "./Navbar.module.css"
import NavbarLogin from "./NavbarLogin";
import NavbarLogout from "./NavbarLogout";

function Navbar() {
  const user = useAuthContext();

  return (
    <header className={styles.header}>
      <Container size="md">
        <div className={styles.inner}>
          <Group spacing="md" className={styles.navbargroup}>
            <Link to="/" className={styles.link} size="md" radius="md">
              講義清單
            </Link>
            <Link to="/progress" className={styles.link} size="md" radius="md">
              我的進度
            </Link>
          </Group>
          <Group spacing="md">
            {user ? (<NavbarLogin user={user} />) : (<NavbarLogout user={user} />)}
          </Group>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;