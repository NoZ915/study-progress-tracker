import { useParams } from "react-router-dom";
import { Container, Text, Image, Button, Loader, Rating, Card, Center, Stack, Grid, Group } from "@mantine/core";
// import { useGetMaterialDetail } from "../hooks/useGetMaterialDetail";

function MaterialDetailPage() {
  const { material_id } = useParams();
  const material = {
    image_url: "/images/materials/TOEIC_golden5Tests.jpg",
    title: "多益新制黃金團隊5回全真試題",
    average_rating: 4.5,
    feedbacks: [
      {
        feedback_id: 1,
        user_id: "user1",
        rating: 4.5,
        comment: "這個講義很棒！"
      },
      {
        feedback_id: 2,
        user_id: "user2",
        rating: 3.5,
        comment: "這個講義還不錯！"
      }
    ]
  }
  // const { data: material, isLoading } = useGetMaterialDetail(material_id);

  // if (isLoading) return <Loader size="lg" />;

  return (
    <Container size="sm">
      <Text size="xl" fw={900} align="center" mt="md">
        {material.title}
      </Text>

      <Center>
        <Image
          src={material.image_url}
          alt={material.title}
          width={250}
          height={350}
          fit="contain"
        />
      </Center>

      <Stack align="center" mt="lg">
        <Rating value={material.average_rating} readOnly size="xl" />
      </Stack>

      <Group justify="center" mt="md">
        <Button color="orange" variant="filled">加入進度</Button>
        <Button color="lime.4" variant="filled" autoContrast>我要評價</Button>
      </Group>

      {/* 使用者回饋 可拆成一個元件 */}
      {material.feedbacks.length > 0 ? (
        material.feedbacks.map((feedback) => (
          <Card key={feedback.feedback_id} shadow="sm" radius="md" mt="sm" justify="left">
            <Text fw={700}>{feedback.user_id}</Text>
            <Rating value={feedback.rating} readOnly />
            <Text>{feedback.comment}</Text>
          </Card>
        ))
      ) : (
        <Text color="gray">目前沒有回饋</Text>
      )}
    </Container>
  );
}

export default MaterialDetailPage;