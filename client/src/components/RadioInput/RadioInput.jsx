import styles from './RadioInput.module.scss';

const RadioInput = (props) => {
    return (
        <label className={styles.radio}>
            <input type='radio' name={props.name} {...props} />
            <span>{props.label}</span>
        </label>
    );
};

export default RadioInput;
