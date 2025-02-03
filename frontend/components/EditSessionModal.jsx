import PropTypes from 'prop-types';
import { Modal } from "@mantine/core";
import { DatePicker } from '@mantine/dates';

function EditSessionMaodal({ session, onClose }) {
    return (
        <Modal
            opened={true}
            onClose={onClose}
            title={session.session_name}
        >
            <div>
                <DatePicker
                    label="完成日期"
                />
            </div>
        </Modal>
    )
}

EditSessionMaodal.propTypes = {
    session: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default EditSessionMaodal;