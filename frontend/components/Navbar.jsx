import { useState } from "react";
import { Link } from "react-router-dom";
import { Group, Container, Burger, Drawer } from "@mantine/core";
import { useAuthContext } from "../hooks/useAuthContext.js";
import { useMediaQuery } from "@mantine/hooks";
import styles from "./Navbar.module.css";
import NavbarLogin from "./NavbarLogin";
import NavbarLogout from "./NavbarLogout";

function Navbar() {
  const user = useAuthContext();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [opened, setOpened] = useState(false);

  return (
    <header className={styles.header}>
      <Container size="md">
        <div className={styles.inner}>
          {isMobile ? (
            <>
              <Burger opened={opened} onClick={() => setOpened((o) => !o)} size="md" />
              <Drawer opened={opened} onClose={() => setOpened(false)} position="left" size="75%">
                <nav className={styles.mobileNav}>
                  <Link to="/" className={styles.mobileLink} onClick={() => setOpened(false)}>
                    講義清單
                  </Link>
                  <Link to="/progress" className={styles.mobileLink} onClick={() => setOpened(false)}>
                    我的進度
                  </Link>
                  {user ? (
                    <NavbarLogin user={user} isMobile={isMobile} />
                  ) : (
                    <NavbarLogout user={user} isMobile={isMobile} />
                  )}
                </nav>
              </Drawer>
            </>
          ) : (
            <>
              <Group spacing="md" className={styles.navbargroup}>
                <Link to="/" className={styles.link}>
                  講義清單
                </Link>
                <Link to="/progress" className={styles.link}>
                  我的進度
                </Link>
              </Group>
              <Group spacing="md">
                {user ? <NavbarLogin user={user} isMobile={isMobile} /> : <NavbarLogout user={user} isMobile={isMobile} />}
              </Group>
            </>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Navbar;