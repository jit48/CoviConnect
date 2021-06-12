import styles from './Button.module.scss';

const Button = (props) => {
    const { variant, children } = props;

    return (
        <button
            variant={variant}
            className={[styles.btn, variant === 'secondary' ? styles.secondary : '', variant === 'primary' ? styles.primary : ''].join(' ')}
            {...props}>
            {children}
        </button>
    );
};

export default Button;
