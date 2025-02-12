import PropTypes from 'prop-types';
import { Card, Image, Text, Progress, Group, Stack, Skeleton } from "@mantine/core";
import { Link } from 'react-router-dom';
import useCalculateProgress from '../hooks/useCalculateProgress';

function UserMaterialCard({ userMaterial }) {
    const { progressPercentage, isLoading } = useCalculateProgress(userMaterial.material.material_id, userMaterial.user_material_id);

    return (
        <Card shadow="sm" padding="md" radius="md" withBorder style={{ width: "100%", maxWidth: 320 }}>
            <Link to={`/progress/material/${userMaterial.material.material_id}?user_material_id=${userMaterial.user_material_id}`} style={{ textDecoration: "none", flexGrow: 1, color: "black" }}>
                <Group align="center">

                    {isLoading ? (
                        <Skeleton height={60} width={60} radius="sm" />
                    ) : (
                        <Image src={userMaterial.material.image_url} alt={userMaterial.material.title} width={60} height={60} radius="sm" />
                    )}

                    <Stack style={{ flex: 1 }}>
                        {isLoading ? (
                            <Skeleton height={20} width="80%" />
                        ) : (
                            <Text weight={500} size="lg" mb={5}>
                                {userMaterial.material.title}
                            </Text>
                        )}

                        {isLoading ? (
                            <Skeleton height={8} width="100%" radius="xl" />
                        ) : (
                            <Group spacing="xs">
                                <Progress value={progressPercentage} color="blue" radius="xl" style={{ flex: 1 }} />
                                <Text size="sm">{progressPercentage}%</Text>
                            </Group>
                        )}

                    </Stack>
                </Group>
            </Link>
        </Card>
    );
}

UserMaterialCard.propTypes = {
    userMaterial: PropTypes.shape({
        user_material_id: PropTypes.number.isRequired,
        material: PropTypes.shape({
            material_id: PropTypes.number.isRequired,
            image_url: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

export default UserMaterialCard;