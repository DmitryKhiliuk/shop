import React from 'react';
import { Button } from "@mui/material";
import { useFormikContext } from 'formik';

const ButtonWrapper = ({children, ...otherProps}: any) => {
    const { submitForm } = useFormikContext();

    const handleSubmit = () => {
        submitForm();
    }

    const configButton: any = {
        variant: 'contained',
        color: 'primary',
        fullWidth: true,
        onClick: handleSubmit
    }

    return (
        <Button{...configButton} style={{marginTop:  '10px'}}>
            {children}
        </Button>
    );
};

export default ButtonWrapper;