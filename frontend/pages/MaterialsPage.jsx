import { useGetAllMaterials } from "../hooks/materials/useGetAllMaterials.js";
import { Container, Text, SimpleGrid, Card, Loader, Image, AspectRatio, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import styles from "./MaterialsPage.module.css";
import { useCreateNewUserMaterial } from "../hooks/userMaterials/useCreateNewUserMaterial.js";
import { useAuthContext } from "../hooks/useAuthContext.js";

function MaterialsPage() {
    const user = useAuthContext();
    const { data: materials, isLoading } = useGetAllMaterials();
    const { mutate } = useCreateNewUserMaterial();
    const handleCreateUserMaterial = (material_id) => {
        mutate({
            user_id: user.user_id, 
            material_id: material_id
        })
    }

    return (
        <Container>
            <Text size="xl" fw={900} align="center" mb="md">
                講義清單
            </Text>

            {!isLoading ? (
                <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
                    {materials.map((material) => (
                        <Card
                            key={material.material_id}
                            shadow="sm"
                            radius="md"
                            withBorder
                            className={styles.card}
                        >
                            <Link to={`/sessions/${material.material_id}`} style={{ textDecoration: "none", flexGrow: 1 }} >
                                <AspectRatio ratio={768 / 1024} style={{ marginBottom: "10px", overflow: "hidden" }}>
                                    <Image
                                        src={material.image_url}
                                        alt={material.title}
                                    />
                                </AspectRatio>
                                <Text className={styles.text}>
                                    {material.title}
                                </Text>
                            </Link>
                            <Button 
                                fullWidth mt="md"
                                onClick={() => handleCreateUserMaterial(material.material_id)}
                            >
                                加入進度
                            </Button>
                        </Card>

                    ))}
                </SimpleGrid>
            ) : (
                <Loader size="lg" variant="bars" />
            )}
        </Container>
    );
}

export default MaterialsPage;