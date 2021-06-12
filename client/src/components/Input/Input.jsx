import styles from './Input.module.scss';

const Input = (props) => {
    const { label, type, name, placeholder, ref, onChange } = props;

    return (
        <>
            {label ? (
                <fieldset className={styles.labeledinput}>
                    <legend>{label}</legend>
                    <input id={label.toLowerCase()} type={type} name={name} placeholder={placeholder} ref={ref} onChange={onChange} />
                </fieldset>
            ) : (
                <input className={styles.input} type={type} name={name} placeholder={placeholder} ref={ref} onChange={onChange} />
            )}
        </>
    );
};

export default Input;
