import Ambulance from './Facilities/Ambulance';
import Bed from './Facilities/Bed';
import BloodBank from './Facilities/BloodBank';
import DiagnosticCenter from './Facilities/DiagnosticCenter';
import Meals from './Facilities/Meals';
import Oxygen from './Facilities/Oxygen';
import Pharmacies from './Facilities/Pharmacies';

const EditPost = (props) => {
    const { post } = props;

    return (
        <>
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
        </>
    );
};
export default EditPost;
