import { Button, Group } from "@mantine/core";
import { useAuthContext } from "../hooks/useAuthContext";
import { useAuth } from "../hooks/users/useAuth";

function AuthButton() {
  const user = useAuthContext();
  const { loginWithGoogle, logout } = useAuth();

  return (
    <Group>
      {!user ? (
        <Button onClick={loginWithGoogle} color="blue">
          登入
        </Button>
      ) : (
        <Button onClick={logout} color="red">
          登出
        </Button>
      )}
    </Group>
  );
}

export default AuthButton;