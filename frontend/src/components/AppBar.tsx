import React from 'react';
import { AppBar as MuiAppBar, Toolbar, Typography } from '@material-ui/core';

type Props = {
    title: string
}

const AppBar: React.FC<Props> = ({ title }) => {
    return <MuiAppBar position="static">
        <Toolbar variant="dense">
            <Typography variant="h6" color="inherit">
                {title}
            </Typography>
        </Toolbar>
    </MuiAppBar>
}

export default AppBar