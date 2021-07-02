import styles from './Recruitments.module.scss';

const Item = (props) => {
    const { getDescription, recruitment } = props;

    return (
        <li className={styles.item} onClick={() => getDescription(recruitment._id)}>
            <h2>Title</h2>
            <p>{recruitment.description}</p>
            <span>{recruitment.duration}</span>
        </li>
    );
};

export default Item;
