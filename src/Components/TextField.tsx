import React from 'react';
import {useField} from 'formik';
import {TextField} from "@mui/material";


const TextfieldWrapper = ({name, ...otherProps}:any) => {
    const [field, mata] = useField(name);


    const configTextfield = {
        ...field,
        ...otherProps,
        fullWidth: true,
        variant: 'standard'
    };

    if (mata && mata.touched && mata.error) {
        configTextfield.error = true;
        configTextfield.helperText = mata.error;
    }

    return (
        <TextField {...configTextfield} />
    );
};

export default TextfieldWrapper;

