import { Modal as MaterialModal } from '@mui/material';

// Context
import { useModal } from '@context/modalContext';
import { TaskModal } from '@components';

const Modal = () => {

    const { isOpen, closeModal, modalContent } = useModal();

  return (
      <MaterialModal
        open={isOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {modalContent}
        {/* <TaskModal/> */}
      </MaterialModal>
  );
}

export default Modal;