import { useGetAllMaterials } from "../hooks/materials/useGetAllMaterials.js";
import { Container, Text, Grid, Card, Loader, Image } from "@mantine/core";

function MaterialsPage() {
    const { data: materials, isLoading } = useGetAllMaterials();

    return (
        <Container>
            <Text size="xl" weight={700} align="center" mb="md">
                Materials List
            </Text>

            {!isLoading ? (
                <Grid gutter="md">
                    {materials.map((material) => (
                        <Grid.Col key={material.material_id} span={4}>
                            <Card
                                shadow="sm"
                                radius="md"
                                withBorder
                                style={{
                                    backgroundColor: "white",
                                    height: 400
                                }}
                            >
                                <Card.Section style={{marginBottom: 10, height: 350, overflow: "hidden"}}>
                                    <Image
                                        src={material.image_url}
                                        alt={material.title}
                                        fix="cover"
                                    />
                                </Card.Section>
                                <Text weight={500} size="lg" align="center">
                                    {material.title}
                                </Text>
                            </Card>
                        </Grid.Col>
                    ))}
                </Grid>
            ) : (
                <Loader size="lg" variant="bars" />
            )}
        </Container>
    );
}

export default MaterialsPage;