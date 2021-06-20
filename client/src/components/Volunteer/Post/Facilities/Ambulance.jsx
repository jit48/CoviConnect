const Ambulance = (props) => {
    return (
        <>
            <h2>Type: {props.post.type}</h2>
            <h3>Service Provider : {props.post.info.serviceProvider}</h3>
            <h3>Contact : {props.post.info.contactNum}</h3>
            <h4>Location : {props.post.info.location}</h4>
            <h4>Votes : {props.post.votes}</h4>
        </>
    );
};

export default Ambulance;
