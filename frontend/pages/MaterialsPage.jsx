import { useGetAllMaterials } from "../hooks/materials/useGetAllMaterials.js";
import { Container, Text, SimpleGrid, Card, Loader, Image, AspectRatio } from "@mantine/core";
import { Link } from "react-router-dom";
import styles from "./MaterialsPage.module.css";

function MaterialsPage() {
    const { data: materials, isLoading } = useGetAllMaterials();

    return (
        <Container>
            <Text size="xl" fw={900} align="center" mb="md">
                講義清單
            </Text>

            {!isLoading ? (
                <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
                    {materials.map((material) => (
                        <Link key={material.material_id} to={`/sessions/${material.material_id}`} style={{ textDecoration: "none" }} >
                            <Card
                                shadow="sm"
                                radius="md"
                                withBorder
                                className={styles.card}
                                style={{
                                    backgroundColor: "white",
                                    height: 400
                                }}
                            >
                                <AspectRatio ratio={1080 / 1920} style={{ marginBottom: "10px", overflow: "hidden" }}>
                                    <Image
                                        src={material.image_url}
                                        alt={material.title}
                                    />
                                </AspectRatio>
                                <Text weight={500} size="lg" align="center">
                                    {material.title}
                                </Text>
                            </Card>
                        </Link>
                    ))}
                </SimpleGrid>
            ) : (
                <Loader size="lg" variant="bars" />
            )}
        </Container>
    );
}

export default MaterialsPage;