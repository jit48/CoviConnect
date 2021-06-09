import { useParams } from 'react-router-dom';

const Volunteer = () => {
    const { id } = useParams();
    return <section>Volunteer : {id}</section>;
};

export default Volunteer;
