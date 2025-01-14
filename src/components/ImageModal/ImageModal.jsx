import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function ImageModal({ onOpen, image, onClose }) {
  return (
    <div>
      <Modal
        isOpen={onOpen}
        onRequestClose={onClose}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        style={{
          content: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            background: 'transparent',
            overflow: 'visible',
          },
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            backgroundColor: '#000000cf',
          },
        }}
      >
        <img src={image} />
      </Modal>
    </div>
  );
}
