import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

function CircularProgressWithLabel(props) {
    return (
        <Box position='relative' display='inline-flex'>
            <CircularProgress size='4rem' color='inherit' variant='determinate' {...props} />
            <Box top={0} left={0} bottom={0} right={0} position='absolute' display='flex' alignItems='center' justifyContent='center'>
                <p>{`${Math.round(props.value)}%`}</p>
            </Box>
        </Box>
    );
}

export default CircularProgressWithLabel;
