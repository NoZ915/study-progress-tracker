import { Link } from "react-router-dom";
import { Menu, Avatar, Text, Group } from "@mantine/core";
import PropTypes from 'prop-types';
import { FaChevronDown } from "react-icons/fa";

function NavbarLogin({ user }) {
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
          <Menu.Item component={Link} to="/edit-profile">編輯個人資料</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  )
}

NavbarLogin.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string
  }).isRequired
};

export default NavbarLogin;