import PropTypes from 'prop-types';
import { Card, Image, Text, Progress, Group, Stack } from "@mantine/core";
import { Link } from 'react-router-dom';

function UserMaterialCard({ userMaterial }) {
    return (
        <Card shadow="sm" padding="md" radius="md" withBorder style={{ width: "100%", maxWidth: 320 }}>
            <Link to={`/progress/material/${userMaterial.material.material_id}?user_material_id=${userMaterial.user_material_id}`} style={{ textDecoration: "none", flexGrow: 1, color: "black" }} >
                <Group align="center">
                    <Image src={userMaterial.material.image_url} alt={userMaterial.material.title} width={60} height={60} radius="sm" />
                    <Stack style={{ flex: 1 }}>
                        <Text weight={500} size="lg" mb={5}>
                            {userMaterial.material.title}
                        </Text>
                        <Progress value={65} color="blue" radius="xl" />
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