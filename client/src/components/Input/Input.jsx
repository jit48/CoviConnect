import styles from './Input.module.scss';

const Input = (props) => {
    const { label, innerRef, ...rest } = props;

    return (
        <>
            {label ? (
                <fieldset className={styles.labeledinput}>
                    <legend>{label}</legend>
                    <input ref={innerRef} {...rest} />
                </fieldset>
            ) : (
                <input className={styles.input} ref={innerRef} {...rest} />
            )}
        </>
    );
};

export default Input;
