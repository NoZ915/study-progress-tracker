import PropTypes from 'prop-types';
import { Modal, Group, Button, Text } from '@mantine/core';

function ConfirmCancelModal({
  opened,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "是",
  cancelText = "否",
  confirmColor = "red",
  cancelColor = "gray"
}) {
  return (
    <Modal opened={opened} onClose={onClose} title={title} centered>
      <Text>{message}</Text>
      <Group position="right" mt="md">
        <Button onClick={onConfirm} color={confirmColor}>{confirmText}</Button>
        <Button onClick={onClose} color={cancelColor}>{cancelText}</Button>
      </Group>
    </Modal>
  );
}

ConfirmCancelModal.propTypes = {
  opened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  confirmColor: PropTypes.string,
  cancelColor: PropTypes.string,
};

export default ConfirmCancelModal;