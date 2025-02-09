import PropTypes from 'prop-types';
import { Modal } from "@mantine/core";
import { DateInput } from '@mantine/dates';

function EditSessionMaodal({ session, onClose }) {
    return (
        <Modal
            opened={true}
            onClose={onClose}
            title={session.session_name}
        >
            <DateInput valueFormat="YYYY/MM/DD" label="完成日期" placeholder="選擇日期" />
            <DateInput valueFormat="YYYY/MM/DD" label="訂正完成日期" placeholder="選擇日期" />
        </Modal>
    )
}

EditSessionMaodal.propTypes = {
    session: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default EditSessionMaodal;