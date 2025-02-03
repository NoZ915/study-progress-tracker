import PropTypes from 'prop-types';
import { Modal, Group, Button } from '@mantine/core';

function ConfirmCancelModal({ opened, onClose, onConfirm }) {
  return (
    <Modal opened={opened} onClose={onClose} title="確定取消嗎？">
      <p>您還未儲存資料，確定要取消嗎？</p>
      <Group position="right">
        <Button onClick={onConfirm} color="red">是</Button>
        <Button onClick={onClose}>否</Button>
      </Group>
    </Modal>
  );
}

ConfirmCancelModal.propTypes = {
  opened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default ConfirmCancelModal;