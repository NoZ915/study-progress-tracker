import { Modal } from "@mantine/core";
import { DatePicker } from '@mantine/dates';

function EditSessionMaodal({session, onClose}){
    return(
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

export default EditSessionMaodal;