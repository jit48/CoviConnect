import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import styles from '../styles/Volunteer.module.scss';
import api from '../axios';

import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import CreatePost from '../components/Volunteer/CreatePost/CreatePost';
import Post from '../components/Volunteer/Post/Post';

const Volunteer = () => {
    const {
        user: { user, isAuthorised, token },
        logout,
    } = useAuth();

    const [posts, setPosts] = useState([]);

    const getPost = async () => {
        const posts = await api.get(`/volunteer/posts`, { headers: { 'x-auth-token': token } }).then((res) => res.data);
        // sort posts by date newest -> oldest
        // posts.sort((a,b)=>{
        //     if(a.date > b.date) return 1;
        //     if(a.date < b.date) return -1;
        //     return 0;
        // })
        setPosts(posts);
    };

    const deletePost = async (id) => {
        api.delete(`/facility/${id}`, { headers: { 'x-auth-token': token } });
        await getPost();
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
                        <Button>Edit Profile</Button>
                        <Button variant='secondary' onClick={logout}>
                            Sign Out
                        </Button>
                    </div>
                    <div className={styles.createpost}>
                        <p>
                            Having any leads that might help many covid patients to get sufficient care ? Create a post to let everyone know
                            about it.
                        </p>
                        <CreatePost />
                    </div>
                </div>
                <div className={styles.posts}>
                    {posts.map((post, i) => {
                        return (
                            <Post key={i} authorised={isAuthorised} volunteer={user} deletePost={() => deletePost(post._id)} post={post} />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Volunteer;
