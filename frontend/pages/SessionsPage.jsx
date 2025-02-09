import { useParams, useSearchParams } from "react-router-dom";
import { useGetAllSessionsByMaterialId } from "../hooks/sessions/useGetAllSessionsByMaterialId.js";
import { Button, Card, Group, Loader, Stack, Text } from "@mantine/core";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import EditSessionMaodal from "../components/EditSessionModal.jsx";

function SessionPage() {
  // 路由參數取得
  const { material_id } = useParams();
  const [searchParams] = useSearchParams();
  const user_material_id = searchParams.get("user_material_id");

  const { data: sessions, isLoading } = useGetAllSessionsByMaterialId(material_id);

  // 編輯的Modal出現/關閉
  const [editSession, setEditSession] = useState(null);
  const handleEdit = (session) => {
    setEditSession(session);
  }
  const handleClose = () => {
    setEditSession(null);
  }

  return (
    <div>
      {!isLoading ? (
        <div>
          {sessions.map((session) => {
            return (
              <Card shadow="sm" mb="md" padding="md" radius="md" withBorder key={session.session_id}>
                <Group justify="space-between" gap="xl">
                  <Group>
                    {/* <Checkbox
                      color="lime.4"
                      iconColor="dark.8"
                      size="md"
                    /> */}
                    <Stack align="flex-start">
                      <Text fw={700} size="lg">{session.session_name}</Text>
                      <Group>
                        <Text>完成日期</Text>
                      </Group>
                      <Group>
                        <Text>訂正完成日期</Text>
                      </Group>
                    </Stack>
                  </Group>

                  <Button
                    leftSection={<FaEdit />}
                    size="md"
                    variant="gradient"
                    gradient={{ from: 'lime', to: 'grape', deg: 102 }}
                    onClick={() => handleEdit(session)}
                  >
                    編輯
                  </Button>
                </Group>
              </Card>
            );
          })}
        </div>
      ) : (
        <Loader size="lg" variant="bars" />
      )}

      {editSession && (
        <EditSessionMaodal
          session={editSession}
          onClose={handleClose}
        />
      )}
    </div>
  )
}

export default SessionPage;