import React from 'react';
import { Box, Paper, Typography, Container, IconButton } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


type Props = {
    leftValue: string
    rightValue: string

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: theme.spacing(2),
            padding: theme.spacing(1),
            '& div': {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            },
            '& p': {
                marginLeft: theme.spacing(1),
                marginRight: theme.spacing(1)
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
                <Box>
                    <Typography>{rightValue}</Typography>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton>
                        <EditIcon />
                    </IconButton>
                </Box>
            </Box>
        </Paper>
    </Container>
}

export default ListItem;
