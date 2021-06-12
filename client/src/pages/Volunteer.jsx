import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../axios';
import styles from '../styles/Volunteer.module.scss';

import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import { Search } from '../components/UI/Icons';

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
    const [post, setPost] = useState();

    //fetch voluteer data from backend
    // useEffect(() => {
    //     (async () => {
    //         const volunteer = await api.get(`/volunteer/${id}`).then((res) => res.data);
    //         const post = await api.get(`/post/${id}`).then((res) => res.data);
    //         setVoluteer(volunteer);
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
                        <Button variant='primary'>Create Post</Button>
                    </div>
                    {/* <div className={styles.recruitments}></div> */}
                </div>
                <div className={styles.posts}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem quia, ipsa natus temporibus animi repudiandae
                    praesentium laboriosam inventore sint eligendi.
                </div>
            </div>
        </section>
    );
};

export default Volunteer;
