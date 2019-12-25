import React, { FC } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { CircularProgress, Box } from '@material-ui/core';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%"
        }
    })
);

const FullscreenLoading: FC = () => {
    const classes = useStyles()

    return <Box className={classes.root}><CircularProgress /></Box>
}

export default FullscreenLoading