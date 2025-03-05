import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { IoCloseOutline } from 'react-icons/io5';
import { CiUser } from 'react-icons/ci';
import { AiOutlineLike } from 'react-icons/ai';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '1000px',
  },
};

Modal.setAppElement('#root');

const ImageModal = ({ modalIsOpen, closeModal, modalData }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className={css.modal}>
        <button onClick={closeModal} className={css.close_btn}>
          <IoCloseOutline size={24} />
        </button>
        {modalData && (
          <>
            <img
              src={modalData.urls.regular}
              alt={modalData.alt_description}
              className={css.modal_img}
            />
            <div className={css.img_info_wrapper}>
              <p>{modalData.alt_description}</p>
              <div className={css.img_info}>
                <p>
                  <CiUser size={24} />
                  {modalData.user}
                </p>
                <p>
                  <AiOutlineLike size={24} />
                  {modalData.likes}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

export default ImageModal;
