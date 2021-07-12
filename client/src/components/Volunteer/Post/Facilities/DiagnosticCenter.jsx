import styles from '../Post.module.scss';

const DiagnosticCenter = (props) => {
    return (
        <div className={styles.type}>
            <h5
                style={{
                    background: 'hsl(244, 60%, 30%)',
                }}>
                DIAGNOSTIC CENTRE
            </h5>
            <p>
                <b>
                    <em>Centre Name : </em>
                </b>
                {props.post.info.centreName}
            </p>
            <p>
                <b>
                    <em>Contact : </em>
                </b>
                {props.post.info.contactNum}
            </p>
            <p>
                <b>
                    <em>Location : </em>
                </b>
                {props.post.info.location}
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

export default DiagnosticCenter;
