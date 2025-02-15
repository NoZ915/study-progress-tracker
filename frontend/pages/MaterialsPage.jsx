import { Container, Text, SimpleGrid, Card, Loader, Image, AspectRatio, Button } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import styles from "./MaterialsPage.module.css";
import { useGetAllMaterials } from "../hooks/materials/useGetAllMaterials.js";
import { useCreateNewUserMaterial } from "../hooks/userMaterials/useCreateNewUserMaterial.js";
import { useAuthContext } from "../hooks/useAuthContext.js";
import ConfirmCancelModal from '../components/ConfirmCancelModal.jsx';
import { useState } from "react";

function MaterialsPage() {
    const user = useAuthContext();
    const navigate = useNavigate();
    const { data: materials, isLoading: isLoadingMaterials } = useGetAllMaterials();
    const { mutate } = useCreateNewUserMaterial();

    const [openCancelModal, setOpenCancelModal] = useState(false);
    const [selectedMaterialId, setSelectedMaterialId] = useState(null);
    const handleCreateUserMaterial = (material_id) => {
        setSelectedMaterialId(material_id);
        setOpenCancelModal(true);
    }
    const handleCloseModal = () => {
        setSelectedMaterialId(null);
        setOpenCancelModal(false);
        navigate('/');
    };
    const handleConfirmCreateUserMaterial = () => {
        if (!selectedMaterialId) return;
        mutate(
            { user_id: user.user_id, material_id: selectedMaterialId },
            {
                onSuccess: () => {
                    setSelectedMaterialId(null);
                    setOpenCancelModal(false);
                },
            }
        )
    };

    return (
        <Container>
            <Text size="xl" fw={900} align="center" mb="md">
                講義清單
            </Text>

            {!isLoadingMaterials ? (
                <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
                    {materials.map((material) => (
                        <Card
                            key={material.material_id}
                            shadow="sm"
                            radius="md"
                            withBorder
                            className={styles.card}
                        >
                            <Link to={`/materials/${material.material_id}`} style={{ textDecoration: "none", flexGrow: 1 }} >
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
                    <ConfirmCancelModal
                        opened={openCancelModal}
                        onClose={handleCloseModal}
                        onConfirm={handleConfirmCreateUserMaterial}
                        title="將要把該本講義加入您的進度"
                        message="確定加入進度嗎？"
                        confirmText="確定"
                        cancelText="取消"
                        confirmColor="blue"
                    />
                </SimpleGrid>
            ) : (
                <Loader size="lg" variant="bars" />
            )}
        </Container>
    );
}

export default MaterialsPage;