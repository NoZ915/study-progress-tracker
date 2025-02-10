import PropTypes from 'prop-types';
import { useState } from 'react';
import { Group, Modal, Button } from "@mantine/core";
import { DateInput } from '@mantine/dates';
import { useUpdateProgress } from '../hooks/progress/useUpdateProgress.js';
import { useSearchParams } from 'react-router-dom';

function EditSessionModal({ session, onClose }) {
    const [searchParams] = useSearchParams();
    const user_material_id = searchParams.get("user_material_id");

    const { mutate } = useUpdateProgress();

    const [completionTime, setCompletionTime] = useState(
        isNaN(Date.parse(session.completionTime)) ? null : new Date(session.completionTime)
    );
    const [correctionTime, setCorrectionTime] = useState(
        isNaN(Date.parse(session.correctionTime)) ? null : new Date(session.correctionTime)
    );

    const handleSave = () => {
        mutate({
            user_material_id,
            session_id: session.session_id,
            completion_time: completionTime ? completionTime.toISOString() : null,
            correction_time: correctionTime ? correctionTime.toISOString() : null,
            notes: session.notes
        });
        onClose();
    };

    return (
        <Modal opened={true} onClose={onClose} title={session.session_name}>
            <DateInput
                value={completionTime}
                onChange={setCompletionTime}
                valueFormat="YYYY/MM/DD"
                label="完成日期"
                placeholder="選擇日期"
                clearable
            />
            <DateInput
                value={correctionTime}
                onChange={setCorrectionTime}
                valueFormat="YYYY/MM/DD"
                label="訂正完成日期"
                placeholder="選擇日期"
                clearable
            />
            <Group position="right" mt="md">
                <Button onClick={handleSave}>儲存</Button>
                <Button variant="default" onClick={onClose}>取消</Button>
            </Group>
        </Modal>
    );
}

EditSessionModal.propTypes = {
    session: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default EditSessionModal;