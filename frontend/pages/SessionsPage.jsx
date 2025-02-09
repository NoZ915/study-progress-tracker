import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { Button, Card, Group, Loader, Stack, Text } from "@mantine/core";

import useSessionsWithProgress from "../hooks/useSessionsWithProgress.js";
import EditSessionMaodal from "../components/EditSessionModal.jsx";

function SessionPage() {
  // 路由參數取得
  const { material_id } = useParams();
  const [searchParams] = useSearchParams();
  const user_material_id = searchParams.get("user_material_id");

  // 取得處理後的 sessions 資料
  const { sessions, isLoading } = useSessionsWithProgress(material_id, user_material_id);

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
                        <Text>{session.completionTime}</Text>
                      </Group>
                      <Group>
                        <Text>訂正完成日期</Text>
                        <Text>{session.correctionTime}</Text>
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