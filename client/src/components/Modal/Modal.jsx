import { useEffect, useState } from 'react';
import styles from './Modal.module.scss';
import { Close } from '../UI/Icons';

const Modal = (props) => {
    const [open, toggleOpen] = useState(props.open);

    useEffect(() => {
        toggleOpen((p) => !p);
    }, [props.open]);

    const openModal = () => {
        toggleOpen((p) => !p);
    };

    return (
        <>
            {open && (
                <>
                    <div className={styles.backdrop} onClick={openModal}></div>
                    <div className={styles.modal}>
                        <Close className={styles.close} onClick={openModal} />
                        <div className={styles.modalcontent}>{props.children}</div>
                    </div>
                </>
            )}
        </>
    );
};

export default Modal;
