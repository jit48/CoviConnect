import styles from '../Post.module.scss';

const Bed = (props) => {
    return (
        <div className={styles.type}>
            <h5
                style={{
                    background: 'hsl(137, 60%, 50%)',
                }}>
                BEDS
            </h5>
            <p>
                <b>
                    <em>Hospital Name : </em>
                </b>
                {props.post.info.hospitalName}
            </p>
            <p>
                <b>
                    <em>Contact : </em>
                </b>
                {props.post.info.contactNum}
            </p>
            <p>
                <b>
                    <em>Address : </em>
                </b>
                {props.post.info.location}
            </p>
            <p>
                <b>
                    <em>Beds Available : </em>
                </b>
                {props.post.info.beds}
            </p>
            <p>
                <b>
                    <em>Votes : </em>
                </b>
                {props.post.votes}
            </p>
        </div>
    );
};

export default Bed;
