import { useParams } from "react-router-dom";
import { useState } from "react";
import dayjs from "dayjs";
import { Container, Text, Image, Button, Loader, Rating, Card, Center, Group } from "@mantine/core";

import { useGetMaterialDetail } from "../hooks/materials/useGetMaterialDetail";
import { useCreateNewUserMaterial } from "../hooks/userMaterials/useCreateNewUserMaterial";
import { useAuthContext } from "../hooks/useAuthContext";

import ConfirmCancelModal from "../components/ConfirmCancelModal";
import EditFeedbackModal from "../components/EditFeedbackModal";

function MaterialDetailPage() {
  const user = useAuthContext();
  const { material_id } = useParams();
  const { data: material, isLoading, isFetching } = useGetMaterialDetail(material_id);
  const { mutate, isPending } = useCreateNewUserMaterial();

  const formatDate = (dateString) => {
    if (!dateString) return "未知日期"; // 避免 null 或 undefined
    return dayjs(dateString).format("YYYY-MM-DD");
  };

  const [openCancelModal, setOpenCancelModal] = useState(false);
  const handleCloseModal = () => {
    setOpenCancelModal(false);
  };
  const handleConfirmCreateUserMaterial = () => {
    if (!material_id) return;
    mutate(
      { user_id: user.user_id, material_id },
      {
        onSuccess: () => {
          setOpenCancelModal(false);
        },
      }
    )
  };

  const [editFeedback, setEditFeedback] = useState(null);
  const handleEdit = (material) => {
    console.log(material)
    setEditFeedback(material)
  }
  const handleClose = () => {
    setEditFeedback(null)
  }

  if (isLoading || isFetching) return <Loader size="lg" />;

  return (
    <Container size="sm">
      <Text size="xl" fw={900} align="center" mt="md">
        {material.dataValues.title}
      </Text>

      <Center>
        <Image
          src={material.dataValues.image_url}
          alt={material.dataValues.title}
          width={250}
          height={350}
          fit="contain"
        />
      </Center>

      <Group justify="center" align="center" mt="lg">
        <Rating value={material.averageRatings} readOnly size="xl" fractions={4} />
        <Text>{material.averageRatings}</Text>
      </Group>

      <Group justify="center" mt="md">
        <Button color="orange" variant="filled" onClick={() => setOpenCancelModal(true)}>加入進度</Button>
        <Button color="lime.4" variant="filled" autoContrast onClick={() => handleEdit(material)}>我要評價</Button>
      </Group>

      <ConfirmCancelModal
        opened={openCancelModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirmCreateUserMaterial}
        title="將要把該本講義加入您的進度"
        message="確定加入進度嗎？"
        confirmText="確定"
        cancelText="取消"
        confirmColor="blue"
        isPending={isPending}
      />

      {material.feedbacks?.length > 0 ? (
        material.feedbacks.map((feedback) => (
          <Card key={feedback.feedback_id} shadow="sm" radius="md" mt="sm" align="left">
            <Group>
              <Text fw={700}>{feedback.user.name}</Text>
              <Text c="gray">
              {feedback.updated_at === null || feedback.updated_at === "" 
                ? formatDate(feedback.created_at) 
                : formatDate(feedback.updated_at)}
              </Text>
            </Group>
            <Group mt="sm">
              <Rating value={feedback.rating} readOnly />
              <Text>{feedback.rating}</Text>
            </Group>
            <Text mt="sm">{feedback.comment}</Text>
          </Card>
        ))
      ) : (
        <Text c="gray" mt="md">目前沒有回饋</Text>
      )}

      {editFeedback && (
        <EditFeedbackModal 
          material={editFeedback}
          onClose={handleClose}
        />
      )}
    </Container>
  );
}

export default MaterialDetailPage;