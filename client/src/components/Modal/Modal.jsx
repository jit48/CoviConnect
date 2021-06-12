import styles from './Modal.module.scss';
import { Close } from '../UI/Icons';
import IconButton from '../IconButton/IconButton';
import { useEffect } from 'react';

const Modal = (props) => {
    const { handleModal, children, open } = props;

    useEffect(() => {
        open ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
    }, [open]);

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
