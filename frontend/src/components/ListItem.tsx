import React from 'react';
import { Box, Paper, Typography, Container } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

type Props = {
    leftValue: string
    rightValue: string

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: theme.spacing(2),
            padding: theme.spacing(2),
            '& div': {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }
        },
    }),
)

const ListItem: React.FC<Props> = ({ leftValue, rightValue }) => {
    const classes = useStyles()
    return <Container maxWidth='md'>
        <Paper className={classes.root}>
            <Box>
                <Typography>{leftValue}</Typography>
                <Typography>{rightValue}</Typography>
            </Box>
        </Paper>
    </Container>
}

export default ListItem;
