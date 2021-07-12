import Ambulance from './Facilities/Ambulance';
import Bed from './Facilities/Bed';
import BloodBank from './Facilities/BloodBank';
import DiagnosticCenter from './Facilities/DiagnosticCenter';
import Meals from './Facilities/Meals';
import Oxygen from './Facilities/Oxygen';
import Pharmacies from './Facilities/Pharmacies';

const EditPost = (props) => {
    const { post, editPost } = props;

    return (
        <>
            {post.type === 'bed' ? (
                <Bed editPost={editPost} post={post} />
            ) : post.type === 'ambulance' ? (
                <Ambulance editPost={editPost} post={post} />
            ) : post.type === 'bloodbank' ? (
                <BloodBank editPost={editPost} post={post} />
            ) : post.type === 'diagnosticcenter' ? (
                <DiagnosticCenter editPost={editPost} post={post} />
            ) : post.type === 'meals' ? (
                <Meals editPost={editPost} post={post} />
            ) : post.type === 'oxygen' ? (
                <Oxygen editPost={editPost} post={post} />
            ) : (
                <Pharmacies editPost={editPost} post={post} />
            )}
        </>
    );
};
export default EditPost;
