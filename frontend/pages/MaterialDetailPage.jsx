import { useParams } from "react-router-dom";
import { Container, Text, Image, Button, Loader, Rating, Card, Center, Group } from "@mantine/core";
import { useGetMaterialDetail } from "../hooks/materials/useGetMaterialDetail";

function MaterialDetailPage() {
  const { material_id } = useParams();
  const { data: material, isLoading, isFetching } = useGetMaterialDetail(material_id);

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
        <Rating value={material.averageRatings} readOnly size="xl" />
        <Text>{material.averageRatings}</Text>
      </Group>

      <Group justify="center" mt="md">
        <Button color="orange" variant="filled">加入進度</Button>
        <Button color="lime.4" variant="filled" autoContrast>我要評價</Button>
      </Group>

      {material.feedbacks?.length > 0 ? (
        material.feedbacks.map((feedback) => (
          <Card key={feedback.feedback_id} shadow="sm" radius="md" mt="sm" align="left">
            <Text fw={700}>{feedback.user.name}</Text>
            <Group>
              <Rating value={feedback.rating} readOnly />
              <Text>{feedback.rating}</Text>
            </Group>
            <Text>{feedback.comment}</Text>
          </Card>
        ))
      ) : (
        <Text color="gray" mt="md">目前沒有回饋</Text>
      )}
    </Container>
  );
}

export default MaterialDetailPage;