import PropTypes from 'prop-types';
import { Card, Image, Text, Progress, Group } from "@mantine/core";

function UserMaterialCard({ material }) {
    return (
        <Card shadow="sm" padding="md" radius="md" withBorder style={{ width: "100%", maxWidth: 320 }}>
            <Group align="center" noWrap>
                <Image src={material.image_url} alt={material.title} width={60} height={60} radius="sm" />
                <div style={{ flex: 1 }}>
                    <Text weight={500} size="lg" mb={5}>
                        {material.title}
                    </Text>
                    <Progress value={100} color="blue" radius="xl" />
                </div>
            </Group>
        </Card>
    );
}


UserMaterialCard.propTypes = {
    material: PropTypes.shape({
        image_url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default UserMaterialCard;