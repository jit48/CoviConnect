import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import styles from '../styles/Volunteer.module.scss';
import api from '../axios';

import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import CreatePost from '../components/Volunteer/CreatePost/CreatePost';
import Post from '../components/Volunteer/Post/Post';

const Volunteer = () => {
    const {
        user: { user, token },
        logout,
    } = useAuth();

    const [posts, setPosts] = useState([]);

    const getPost = async () => {
        const resPosts = await api.get(`/volunteer/posts`, { headers: { 'x-auth-token': token } }).then((res) => res.data);
        resPosts.sort((a, b) => new Date(b.info.date) - new Date(a.info.date));
        if (resPosts.length !== posts.length) {
            setPosts(resPosts);
        }
    };

    const deletePost = async (id) => {
        await api.delete(`/facility/${id}`, { headers: { 'x-auth-token': token } });
        getPost();
    };

    const editPost = async (id, data) => {
        await api.put(`/facility/${id}`, data, { headers: { 'x-auth-token': token } });
        const resPosts = await api.get(`/volunteer/posts`, { headers: { 'x-auth-token': token } }).then((res) => res.data);
        resPosts.sort((a, b) => new Date(b.info.date) - new Date(a.info.date));
        setPosts(resPosts);
    };

    useEffect(() => {
        getPost();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [posts]);

    return (
        <section className={styles.volunteer}>
            <div className={styles.search}>
                <Input placeholder='Search help requests...' />
            </div>
            <div className={styles.main}>
                <div className={styles.left}>
                    <div className={styles.profile}>
                        {user.gender === 'male' ? (
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
                            <span>{user.name}</span>
                        </p>
                        <p>
                            <b>
                                <em>Address</em>
                            </b>
                            <span>{user.address}</span>
                        </p>
                        <p>
                            <b>
                                <em>Email</em>
                            </b>
                            <span>{user.email}</span>
                        </p>
                        <p>
                            <b>
                                <em>Contact</em>
                            </b>
                            <span>{user.contact}</span>
                        </p>
                        <p>
                            <b>
                                <em>Bio</em>
                            </b>
                            <span>{user.bio}</span>
                        </p>
                        <Button variant='secondary' onClick={logout}>
                            Sign Out
                        </Button>
                    </div>
                    <div className={styles.createpost}>
                        <p>
                            Having any leads that might help many covid patients to get sufficient care ? Create a post to let everyone know
                            about it.
                        </p>
                        <CreatePost getPost={getPost} />
                    </div>
                    <div className={styles.recruitments}>
                        <p>
                            <b>Connect with NGO</b> and get your posts reach more needy people. Apply to get recruited under a Non-Profit
                            Organisation.
                        </p>
                        <Button variant='primary'>
                            <NavLink to='/recruitments'>Apply Now</NavLink>
                        </Button>
                    </div>
                </div>
                <div className={styles.posts}>
                    {posts.map((post, i) => {
                        return <Post key={i} volunteer={user} deletePost={() => deletePost(post._id)} editPost={editPost} post={post} />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default Volunteer;
