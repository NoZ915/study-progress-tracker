import { Link } from "react-router-dom";
import { Menu, Avatar, Text, Group } from "@mantine/core";
import PropTypes from 'prop-types';

function NavbarLogin({user}) {
  return (
    <>
      <Menu width={200} shadow="md">
        <Menu.Target>
          <Group spacing="xs" style={{ cursor: "pointer" }}>
            <Avatar src={user.avatar} radius="xl" />
            <Text>{user.name}</Text>
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