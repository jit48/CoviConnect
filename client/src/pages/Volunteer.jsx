import { useParams } from 'react-router-dom';

const Volunteer = () => {
    const { id } = useParams();
    return <h1>Volunteer : {id}</h1>;
};

export default Volunteer;
