import styles from './IconButton.module.scss';

const IconButton = (props) => {
    const { variant, onClick, icon, className } = props;

    return (
        <button
            variant={variant}
            className={[
                styles.iconbtn,
                className,
                variant === 'secondary' && styles.secondary,
                variant === 'primary' && styles.primary,
            ].join(' ')}
            onClick={onClick}>
            {icon}
        </button>
    );
};

export default IconButton;
