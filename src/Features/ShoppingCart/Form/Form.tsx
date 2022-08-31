import React from 'react';
import {FormikHelpers, useFormik} from "formik";
import {Button, FormControl, FormGroup, TextField} from "@mui/material";

type FormValuesType = {
    name: string,
    surname: string,
    email: string,
    phone: string,
}

export const Form = () => {

    const formik = useFormik({
        validate: (values) => {
            if (!values.email) {
                return {
                    email: 'Email is required'
                }
            }
        },
        initialValues: {
            name: '',
            surname: '',
            email: '',
            phone: '',
        },
        onSubmit: (values, formikHelpers: FormikHelpers<FormValuesType>) => {
            console.log(values)
            formikHelpers.resetForm()

        }
    })

    return (
        <div style={{width:'100%'}}>
            <form onSubmit={formik.handleSubmit} >
                <FormControl  style={{width: '100%', padding: '10px'}}>
                    <FormGroup >
                        <TextField
                            label="name"
                            variant={'standard'}
                            {...formik.getFieldProps("name")}
                        />
                        <TextField
                            label="surname"
                            variant={'standard'}
                            {...formik.getFieldProps("surname")}
                        />
                        <TextField
                            label="Email"
                            variant={'standard'}
                            {...formik.getFieldProps("email")}
                        />
                        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                        <TextField
                            label="phone"
                            variant={'standard'}
                            {...formik.getFieldProps("phone")}
                        />
                        <Button  type={'submit'} variant={'contained'} color={'primary'} style={{marginTop: '10px'}}>Order</Button>
                    </FormGroup>
                </FormControl>
            </form>
        </div>
    );
};

