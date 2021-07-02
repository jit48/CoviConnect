import { useEffect, useState } from 'react';
import styles from '../styles/Recruitments.module.scss';
import api from '../axios';

import Item from '../components/Recruitments/Items';
import Description from '../components/Recruitments/Description';

const Recruitments = () => {
    const [recruitments, setRecruitments] = useState([
        {
            _id: 1,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            responsibilty: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            qualification: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            skill: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            duration: 'fulltime',
        },
        {
            _id: 2,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            responsibilty: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            qualification: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            skill: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            duration: 'fulltime',
        },
        {
            _id: 3,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            responsibilty: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            qualification: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            skill: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            duration: 'fulltime',
        },
        {
            _id: 4,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            responsibilty: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            qualification: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            skill: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            duration: 'fulltime',
        },
        {
            _id: 5,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            responsibilty: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            qualification: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            skill: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            duration: 'fulltime',
        },
        {
            _id: 6,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            responsibilty: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            qualification: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            skill: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            duration: 'fulltime',
        },
        {
            _id: 7,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            responsibilty: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            qualification: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            skill: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            duration: 'fulltime',
        },
        {
            _id: 8,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            responsibilty: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            qualification: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            skill: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            duration: 'fulltime',
        },
        {
            _id: 9,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            responsibilty: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            qualification: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            skill: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            duration: 'fulltime',
        },
        {
            _id: 10,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            responsibilty: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            qualification: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            skill: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            duration: 'fulltime',
        },
        {
            _id: 11,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            responsibilty: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            qualification: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            skill: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore distinctio totam tempora error commodi harum
        blanditiis debitis. Mollitia, temporibus.`,
            duration: 'fulltime',
        },
    ]);
    const [description, setDescription] = useState({});

    const getDescription = (id) => {
        const description = recruitments.filter((recruitment) => recruitment._id === id);
        setDescription(description[0]);
    };

    useEffect(() => {
        // (async () => {
        //     const res = await api.get('/recruitments').then((res) => res.data);
        //     setRecruitments(res);
        // })();
        setDescription(recruitments[0]);
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
