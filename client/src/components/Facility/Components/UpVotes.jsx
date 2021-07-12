import React, { useState } from 'react';
import './UpVotes.scss';
import axios from '../../../axios';

import Snackbars from './Snackbar';
function UpVotes(props) {
    const { facility, handleUpVotes } = props;
    const [updateVote, setUpdateVote] = useState(facility);
    const [showSnackBar, setShowSnackBar] = useState(false);
    const [loading, isLoading] = useState(true);
    const handleScoreIncrease = async () => {
        isLoading(false);
        const update = await axios.patch(`facility/updateVote/${facility._id}`).then((res) => res.data);
        isLoading(true);
        if (update.votes >= 0) {
            setUpdateVote(update);
            const upvote = await axios
                .post(`/user/upVotedPosts`, update)
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
        } else {
            setShowSnackBar(true);
        }
    };
    const handleScoreDecrease = async () => {
        if (updateVote.votes > 0) {
            isLoading(false);
            const update = await axios.patch(`facility/downVote/${facility._id}`).then((res) => res.data);
            isLoading(true);
            setUpdateVote(update);
        } else {
            setShowSnackBar(true);
        }
    };
    const handleSnackBarCLose = () => {
        setShowSnackBar(false);
    };
    return (
        <div className='upVotes'>
            <div className='score'>
                <i class='fas fa-3x fa-sort-up' onClick={handleScoreIncrease}></i>
                {loading ? <div className={`${updateVote.votes === 0 ? 'red' : ''}`}>{updateVote.votes}</div> : ''}
                <i class='fas fa-3x fa-sort-down' onClick={handleScoreDecrease}></i>
            </div>
            {showSnackBar ? <Snackbars showSnackBar={showSnackBar} handleSnackBarCLose={handleSnackBarCLose} /> : ''}
        </div>
    );
}

export default UpVotes;
