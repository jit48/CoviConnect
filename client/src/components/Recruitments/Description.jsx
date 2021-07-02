import Button from '../Button/Button';

const Description = (props) => {
    const { _id, description, responsibilty, qualification, skill, duration } = props.description;

    return (
        <>
            <h1>Title {_id}</h1>
            <Button>Apply</Button>
            <span>
                <b>DESCRIPTION</b>
            </span>
            <p>{description}</p>
            <span>
                <b>RESPONSIBILITY</b>
            </span>
            <p>{responsibilty}</p>
            <span>
                <b>QUALIFICATION</b>
            </span>
            <p>{qualification}</p>
            <span>
                <b>SKILL</b>
            </span>
            <p>{skill}</p>
            <span>
                <b>DURATION</b>
            </span>
            <p>{duration}</p>
        </>
    );
};

export default Description;
