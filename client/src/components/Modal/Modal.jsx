import styles from './Modal.module.scss';
import { Close } from '../UI/Icons';
import IconButton from '../IconButton/IconButton';

const Modal = (props) => {
    const { handleModal, children, open } = props;

    return (
        <>
            {open && (
                <>
                    <div className={styles.backdrop} onClick={handleModal}></div>
                    <div className={styles.modal}>
                        <IconButton className={styles.close} onClick={handleModal} variant='secondary' icon={<Close />} />
                        <div className={styles.modalcontent}>{children}</div>
                    </div>
                </>
            )}
        </>
    );
};

export default Modal;
