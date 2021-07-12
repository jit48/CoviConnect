import { useState } from 'react';
import styles from './Post.module.scss';

import IconButton from '../../IconButton/IconButton';
import Modal from '../../Modal/Modal';
import { Edit, Delete } from '../../UI/Icons';

import Ambulance from './Facilities/Ambulance';
import Bed from './Facilities/Bed';
import BloodBank from './Facilities/BloodBank';
import DiagnosticCenter from './Facilities/DiagnosticCenter';
import Meals from './Facilities/Meals';
import Oxygen from './Facilities/Oxygen';
import Pharmacies from './Facilities/Pharmacies';
import EditPost from '../EditPost/EditPost';

import Male from '../../../Images/Male.jpg';
import Female from '../../../Images/Female.jpg';

const Post = (props) => {
    const { volunteer, post, deletePost, editPost, ...rest } = props;

    const [modal, setModal] = useState(false);
    const modalHandler = () => {
        setModal((p) => !p);
    };

    return (
        <div className={styles.post} {...rest}>
            <div className={styles.volunteer}>
                {volunteer.gender === 'male' ? <img src={Male} alt='profile' /> : <img src={Female} alt='profile' />}
                <div>
                    <h3>{volunteer.name}</h3>
                    <span>{volunteer.address}</span>
                </div>
                <div>
                    <IconButton variant='primary' icon={<Edit />} onClick={modalHandler} />
                    <IconButton variant='secondary' icon={<Delete />} onClick={deletePost} />
                </div>
            </div>

            <Modal open={modal} handleModal={modalHandler}>
                <EditPost editPost={editPost} post={post} />
            </Modal>
            <hr />
            <div className={styles.facility}>
                {post.type === 'bed' ? (
                    <Bed post={post} />
                ) : post.type === 'ambulance' ? (
                    <Ambulance post={post} />
                ) : post.type === 'bloodbank' ? (
                    <BloodBank post={post} />
                ) : post.type === 'diagnosticcenter' ? (
                    <DiagnosticCenter post={post} />
                ) : post.type === 'meals' ? (
                    <Meals post={post} />
                ) : post.type === 'oxygen' ? (
                    <Oxygen post={post} />
                ) : (
                    <Pharmacies post={post} />
                )}
            </div>
        </div>
    );
};

export default Post;
