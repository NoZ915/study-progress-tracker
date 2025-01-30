import { Modal } from "@mantine/core";

function EditSessionMaodal(session){
    return(
        <Modal opened={true}>{session.session_name}</Modal>
    )
}

export default EditSessionMaodal;