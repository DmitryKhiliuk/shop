import React from 'react';
import {Form, Formik} from "formik";
import Textfield from '../../../Components/TextField';
import * as Yup from 'yup';
import Button from "../../../Components/Button";

const INITIAL_FORM_STATE  = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
};

const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string()
        .required('Required'),
    lastName: Yup.string()
        .required('Required'),
    email: Yup.string()
        .email('Invalid email.')
        .required('Required'),
    phone: Yup.number()
        .integer()
        .typeError('Please enter a valid phone number')
        .required('Required'),
});

export const FormCart = () => {
    return (
        <div>
            <Formik
                initialValues={{
                    ...INITIAL_FORM_STATE
                }}
                validationSchema={FORM_VALIDATION}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                <Form>
                    <Textfield
                        name="firstName"
                        label="First Name"
                    />
                    <Textfield
                        name="lastName"
                        label="Last Name"
                    />
                    <Textfield
                        name="email"
                        label="Email"
                    />
                    <Textfield
                        name="phone"
                        label="Phone"
                    />
                    <Button>
                        order
                    </Button>
                </Form>
            </Formik>


        </div>
    );
};

