import React, { FC, FormEvent, useState } from "react";
import {
    Dialog, TextField, DialogTitle, DialogContent,
    DialogActions, Button, Container, Typography, Divider
} from "@material-ui/core";
import { ApolloError } from "apollo-boost";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from "clsx";

export type EditDialogProps = {
    isOpened: boolean
    title: string
    handleClose: () => void
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        contact: {
            marginBottom: theme.spacing(2),
            padding: theme.spacing(1),
            borderRadius: '4px'
        },
        whiteBlock: {
            background: '#fff'
        },
        contactBlockTitle: {
            marginTop: theme.spacing(2),
            marginBottom: '8px',
        },
        divider: {
            marginTop: theme.spacing(0.5),
            marginBottom: theme.spacing(0.5)
        }
    }),
);

const EditDialog: FC<EditDialogProps> = ({
    isOpened,
    handleClose,
    title }) => {
    const classes = useStyles()

    function submitInviteForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        handleClose()
    }

    return (
        <Dialog
            open={isOpened}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
            maxWidth="sm"
            fullWidth={true}
        >
            <form onSubmit={submitInviteForm}>
                <DialogTitle id="form-dialog-title">{title}</DialogTitle>

                <DialogContent >
                    <TextFiledRow label="name" />
                    <TextFiledRow label="country" />
                    <TextFiledRow label="chief architector" />
                </DialogContent>
                <DialogActions>
                    <Button color="primary" type="submit">Send</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

type TextFiledProps = {
    label: string
}

const TextFiledRow: FC<TextFiledProps> = ({ label }) => {
    return <TextField
        margin="dense"
        type='text'
        name='comment'
        fullWidth
        variant='outlined'
        color='primary'
        label={label}
    />
}

export default EditDialog
