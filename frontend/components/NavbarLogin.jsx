import { Link } from "react-router-dom";
import { Menu, Avatar, Text, Group } from "@mantine/core";
import PropTypes from "prop-types";
import { FaChevronDown } from "react-icons/fa";
import AuthButton from "./AuthButton";
import styles from "./Navbar.module.css";

function NavbarLogin({ user, isMobile }) {
  // 桌面版：保留下拉選單設計
  if (!isMobile) {
    return (
      <>
        <Menu width={140} shadow="md">
          <Menu.Target>
            <Group style={{ cursor: "pointer" }}>
              <Avatar src={user.avatar} radius="xl" />
              <div style={{ flex: 1 }}>
                <Text size="md" fw={500}>{user.name}</Text>
              </div>
              <FaChevronDown size={12} />
            </Group>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item component={Link} to="/edit-profile">
              編輯個人資料
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <AuthButton />
      </>
    );
  }

  // 手機版：移除頭像和名稱，與其他導航項目一致
  return (
    <>
      <Link to="/edit-profile" className={styles.mobileLink}>
        編輯個人資料
      </Link>
      <AuthButton className={styles.mobileAuth} />
    </>
  );
}

NavbarLogin.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default NavbarLogin;