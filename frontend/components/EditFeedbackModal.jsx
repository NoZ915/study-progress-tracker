import PropTypes from 'prop-types';
import { Button, Group, Modal, Rating, Textarea} from "@mantine/core";
import { useCreateNewFeedback } from '../hooks/feedbacks/useCreateNewFeedback';
import { useState } from 'react';

function EditFeedbackModal({ material, onClose }) {
    const [comment, setComment] = useState("");
    const [rating, setRating] =  useState(0);
    const { mutate } = useCreateNewFeedback();

    const handleSave = (material_id) => {
        mutate({
            material_id,
            rating,
            comment
        });
        onClose(null)
    }

    return (
        <Modal opened={true} onClose={onClose} title={material.dataValues.title}>
            <Textarea
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                label="評價"
                placeholder="輸入評價..."
                autosize={true}
                minRows={3}
            />
            <Rating value={rating} size="xl" fractions={4} onChange={(value) => setRating(value)} />
            <Group position="right" mt="md">
                <Button onClick={() => handleSave(material.dataValues.material_id)}>儲存</Button>
                <Button variant="default" onClick={onClose}>取消</Button>
            </Group>
        </Modal>
    );
}

EditFeedbackModal.propTypes = {
    material: PropTypes.shape({
        dataValues: PropTypes.shape({
            title: PropTypes.string.isRequired,
            material_id: PropTypes.number.isRequired, 
        }).isRequired,
    }),
    onClose: PropTypes.func.isRequired,
};

export default EditFeedbackModal;