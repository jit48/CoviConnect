import Apply from './Apply';

const Description = (props) => {
    const { _id, organisation, description, responsibility, qualification, skill, duration } = props.description;

    return (
        <>
            <h1>{organisation}</h1>
            <Apply applicationId={_id} />
            <br />
            <span>
                <b>DESCRIPTION</b>
            </span>
            <p>{description}</p>
            <br />
            <span>
                <b>RESPONSIBILITY</b>
            </span>
            <p>{responsibility}</p>
            <br />
            <span>
                <b>QUALIFICATION</b>
            </span>
            <p>{qualification}</p>
            <br />
            <span>
                <b>SKILL</b>
            </span>
            <p>{skill}</p>
            <br />
            <span>
                <b>DURATION</b>
            </span>
            <p>{duration === 'fulltime' ? 'Full Time' : 'Part Time'}</p>
        </>
    );
};

export default Description;
