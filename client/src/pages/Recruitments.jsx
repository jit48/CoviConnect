import { useEffect, useState } from 'react';
import styles from '../styles/Recruitments.module.scss';
import api from '../axios';
import { useAuth } from '../contexts/AuthContext';

import Item from '../components/Recruitments/Items';
import Description from '../components/Recruitments/Description';

const Recruitments = () => {
    const {
        user: { token },
    } = useAuth();
    const [recruitments, setRecruitments] = useState([]);
    const [description, setDescription] = useState({});

    const getDescription = (id) => {
        const description = recruitments.filter((recruitment) => recruitment._id === id);
        setDescription(description[0]);
    };

    useEffect(() => {
        (async () => {
            const res = await api.get('/ngo/recruitments', { headers: { 'x-auth-token': token } }).then((res) => res.data);
            setRecruitments(res);
            setDescription(res[0]);
        })();
    }, []);

    return (
        <section className={styles.recruitments}>
            <h1>Get Recruited</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
                blanditiis debitis. Mollitia, temporibus.
            </p>
            <div className={styles.content}>
                <ul className={styles.list}>
                    {recruitments.map((recruitment) => (
                        <Item key={recruitment._id} getDescription={getDescription} recruitment={recruitment} />
                    ))}
                </ul>
                <div className={styles.description}>
                    <Description description={description} />
                </div>
            </div>
        </section>
    );
};

export default Recruitments;
