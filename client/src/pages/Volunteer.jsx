import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../axios';
import styles from '../styles/Volunteer.module.scss';

import Input from '../components/Input/Input';
import CreatePost from '../components/CreatePost/CreatePost';

const Volunteer = () => {
    const { id } = useParams();
    const [volunteer, setVolunteer] = useState({
        name: 'John Doe',
        gender: 'male',
        address: 'Ahmedabad, Gujarat',
        email: 'voluteeremail@email.com',
        contact: '9874567215',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quidem at assumenda dicta repellat aliquam, animi cum consequatur possimus veniam?',
    });
    const [posts, setPosts] = useState([
        {
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quidem',
            location: 'Ahmedabad, Gujarat',
            //facility specific details
        },
        {
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quidem',
            location: 'Ahmedabad, Gujarat',
            //facility specific details
        },
        {
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quidem',
            location: 'Ahmedabad, Gujarat',
            //facility specific details
        },
        {
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quidem',
            location: 'Ahmedabad, Gujarat',
            //facility specific details
        },
        {
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quidem',
            location: 'Ahmedabad, Gujarat',
            //facility specific details
        },
        {
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quidem',
            location: 'Ahmedabad, Gujarat',
            //facility specific details
        },
        {
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quidem',
            location: 'Ahmedabad, Gujarat',
            //facility specific details
        },
    ]);

    //fetch voluteer data from backend
    // useEffect(() => {
    //     (async () => {
    //         const volunteer = await api.get(`/volunteer/${id}`).then((res) => res.data);
    //         const posts = await api.get(`/post/${id}`).then((res) => res.data);
    //         setVoluteer(volunteer);
    //         setPosts(posts);
    //     })();
    // }, []);

    return (
        <section className={styles.volunteer}>
            <div className={styles.search}>
                <Input placeholder='Search help requests...' />
            </div>
            <div className={styles.main}>
                <div className={styles.left}>
                    <div className={styles.profile}>
                        {volunteer.gender === 'male' ? (
                            <img src='https://glossophs.sa.edu.au/wp-content/uploads/2018/09/placeholder-profile-sq.jpg' alt='profile' />
                        ) : (
                            <img
                                src='https://media.istockphoto.com/vectors/person-gray-photo-placeholder-woman-vector-id1132192691?b=1&k=6&m=1132192691&s=612x612&w=0&h=ybIyjqMBpfyC2XROY-JULFj4smZhZIHPtmFCuF1Mtzs='
                                alt='profile'
                            />
                        )}

                        <p>
                            <b>
                                <em>Name</em>
                            </b>
                            <span>{volunteer.name}</span>
                        </p>
                        <p>
                            <b>
                                <em>Address</em>
                            </b>
                            <span>{volunteer.address}</span>
                        </p>
                        <p>
                            <b>
                                <em>Email</em>
                            </b>
                            <span>{volunteer.email}</span>
                        </p>
                        <p>
                            <b>
                                <em>Contact</em>
                            </b>
                            <span>{volunteer.contact}</span>
                        </p>
                        <p>
                            <b>
                                <em>Bio</em>
                            </b>
                            <span>{volunteer.bio}</span>
                        </p>
                    </div>
                    <div className={styles.createpost}>
                        <p>
                            Having any leads that might help many covid patients to get sufficient care ? Create a post to let everyone know
                            about it.
                        </p>
                        <CreatePost />
                    </div>
                    {/* <div className={styles.recruitments}></div> */}
                </div>
                <div className={styles.posts}>
                    {posts.map((post, i) => {
                        return (
                            <div key={i}>
                                <p>{post.title}</p>
                                <p>{post.location}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Volunteer;
