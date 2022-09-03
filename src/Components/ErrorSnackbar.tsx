import React from 'react'
import {AlertProps, Snackbar} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../App/store";
import {setAppErrorAC} from "../App/app-reducer";

function Alert(props: AlertProps) {
    return <Alert elevation={6} variant="filled" {...props} />
}

export function ErrorSnackbar() {

    const error = useAppSelector(state => state.app.error);
    const dispatch = useAppDispatch()

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }
        dispatch(setAppErrorAC({error: null}));
    }
    const isOpen = error !== null;

    return (
        <Snackbar open={isOpen}
                  autoHideDuration={6000}
                  onClose={handleClose}>
            <Alert onClose={handleClose}
                   severity="error">
                {error}
            </Alert>
        </Snackbar>
    )
}
