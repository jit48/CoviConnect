import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../axios';
import styles from '../styles/Volunteer.module.scss';

import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import CreatePost from '../components/Volunteer/CreatePost/CreatePost';
import Post from '../components/Volunteer/Post/Post';

const Volunteer = () => {
    const { id } = useParams();
    const [authorised, setAuthorised] = useState(true);
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
            postId: '1',
            type: 'bed',
            info: {
                hospitalName: 'Lorem ipsum dolor sit.',
                location: 'Ahmedabad, Gujarat',
                beds: 25,
            },
        },
        {
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quidem',
            postId: '2',
            type: 'ambulance',
            info: {
                hospitalName: 'Lorem ipsum dolor sit.',
                location: 'Ahmedabad, Gujarat',
                beds: 25,
            },
        },
        {
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quidem',
            type: 'bloodbank',
            postId: '3',
            info: {
                hospitalName: 'Lorem ipsum dolor sit.',
                location: 'Ahmedabad, Gujarat',
                beds: 25,
            },
        },
        {
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quidem',
            type: 'diagnosticcenter',
            postId: '4',
            info: {
                hospitalName: 'Lorem ipsum dolor sit.',
                location: 'Ahmedabad, Gujarat',
                beds: 25,
            },
        },
        {
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quidem',
            type: 'meals',
            postId: '5',
            info: {
                hospitalName: 'Lorem ipsum dolor sit.',
                location: 'Ahmedabad, Gujarat',
                beds: 25,
            },
        },
        {
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quidem',
            type: 'oxygen',
            postId: '6',
            info: {
                hospitalName: 'Lorem ipsum dolor sit.',
                location: 'Ahmedabad, Gujarat',
                beds: 25,
            },
        },
        {
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quidem',
            type: 'pharmacies',
            postId: '7',
            info: {
                hospitalName: 'Lorem ipsum dolor sit.',
                location: 'Ahmedabad, Gujarat',
                beds: 25,
            },
        },
    ]);

    const getPost = async () => {
        // const volunteer = await api.get(`/volunteer/${id}`).then((res) => res.data);
        // const posts = await api.get(`/post/${id}`).then((res) => res.data);
        // // sort posts by date newest -> oldest
        // posts.sort((a,b)=>{
        //     if(a.date > b.date) return 1;
        //     if(a.date < b.date) return -1;
        //     return 0;
        // })
        // setVolunteer(volunteer);
        // setPosts(posts);
        console.log('getting post');
    };

    const deletePost = async (id) => {
        // api.delete(`/post/${id}`)
        console.log('deleting post', id);
        getPost();
    };

    useEffect(() => {
        getPost();
    }, [posts]);

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
                        <Button>Edit Profile</Button>
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
                            <Post
                                key={i}
                                authorised={authorised ? 1 : 0}
                                volunteer={volunteer}
                                deletePost={() => deletePost(post.postId)}
                                post={post}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Volunteer;
