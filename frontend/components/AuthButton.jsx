import { Button, Avatar, Group, Text } from "@mantine/core";
import { useAuthContext } from "../contexts/AuthProvider";
import { useAuth } from "../hooks/users/useAuth";

function AuthButton() {
  const user = useAuthContext();
  const { loginWithGoogle, logout } = useAuth();

  return (
    <Group>
      {!user ? (
        <Button onClick={loginWithGoogle} color="blue">
          使用 Google 登入
        </Button>
      ) : (
        <>
          <Avatar src={user.picture} radius="xl" />
          <Text>{user.name}</Text>
          <Button onClick={logout} color="red">
            登出
          </Button>
        </>
      )}
    </Group>
  );
}

export default AuthButton;