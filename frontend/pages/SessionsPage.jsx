import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { FaEdit, FaFileExport } from "react-icons/fa";
import { Button, Card, Container, Divider, Group, Loader, Stack, Text } from "@mantine/core";

import useSessionsWithProgress from "../hooks/useSessionsWithProgress.js";
import EditSessionModal from "../components/EditSessionModal.jsx";
import { useExportProgressExcel } from "../hooks/progress/useExportProgressExcel.js";

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

  // 匯出excel
  const { mutate, isPending } = useExportProgressExcel()
  const handleExport = () => {
    mutate({ material_id, user_material_id })
  }

  return (
    <div>
      {!isLoading ? (
        <Container mt="md">
          <Button
            leftSection={<FaFileExport />}
            size="md"
            variant="gradient"
            gradient={{ from: "teal", to: "blue", deg: 120 }}
            onClick={handleExport}
            disabled={isPending}
          >
            {isPending ? "匯出中..." : "匯出 Excel"}
          </Button>
          {sessions.map((session) => {
            return (
              <Card shadow="sm" mt="md" padding="md" radius="md" withBorder key={session.session_id}>
                <Group justify="space-between" gap="xl">
                  <Group>
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

                {session.notes && (
                  <>
                    <Divider my="sm" />
                    <Card.Section inheritPadding mt="sm" mb="sm">
                      <Text size="md" c="dimmed">
                        {session.notes}
                      </Text>
                    </Card.Section>
                  </>
                )}
              </Card>
            );
          })}
        </Container>
      ) : (
        <Loader size="lg" variant="bars" />
      )}

      {editSession && (
        <EditSessionModal
          session={editSession}
          onClose={handleClose}
        />
      )}
    </div>
  )
}

export default SessionPage;
