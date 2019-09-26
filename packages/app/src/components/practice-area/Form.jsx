import React from 'react';
import PropTypes from 'prop-types';

// import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import {
    Formik, Form, Field, FieldArray
} from 'formik';
import { FormHelperText } from '@material-ui/core';


function RenderInput(props) {
    const {
        field, form, fullWidth, label, multiline, rows
    } = props;

    const { errors } = form;
    const {
        name, value, onChange, onBlur
    } = field;
    return (
        <FormControl fullWidth={fullWidth} component="div">
            <TextField
                multiline={multiline}
                rows={rows}
                label={label}
                value={value}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                error={!!errors[name]}
            />
            {errors && <FormHelperText>{errors[name]}</FormHelperText>}
        </FormControl>
    );
}

RenderInput.defaultProps = {
    fullWidth: false,
    multiline: false,
    label: '',
    rows: 0,
};

RenderInput.propTypes = {
    field: PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.string,
        onChange: PropTypes.func,
        onBlur: PropTypes.func
    }).isRequired,
    form: PropTypes.shape({
        errors: PropTypes.shape({})
    }).isRequired,
    fullWidth: PropTypes.bool,
    multiline: PropTypes.bool,
    label: PropTypes.string,
    rows: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

const Basic = (props) => {
    const { yes } = props;
    return (
        <div>
            <h1>
                Any place in your app!
                {!!yes}
            </h1>
            <Formik
                initialValues={{ areas: [{ name: 'shit', description: '23123' }, { name: 'shita', description: 'lol' }] }}
                // initialValues={{
                //     name: 'practice area name',
                //     description: 'my description'
                // }}
                // validate={(values) => {
                //     const errors = {};
                //     if (!values.name) {
                //         errors.name = 'Required';
                //     }
                //     return errors;
                // }}
                onSubmit={(values, formStuff) => {
                    console.log('values', values);  // eslint-disable-line
                    console.log('formStuff', formStuff); // eslint-disable-line

                    // console.log('formStuff', formStuff);
                    // setTimeout(() => {
                    //     alert(JSON.stringify(values, null, 2));
                    //     setSubmitting(false);
                    // }, 400);
                    // formStuff.resetForm({
                    //     name: '',
                    //     description: ''
                    // });
                }}
                render={({ values }) => {
                    console.log('values', values); // eslint-disable-line
                    return (
                        <Form>
                            <FieldArray
                                name="areas"
                                render={(arrayHelpers) => { // eslint-disable-line
                                    // const handleAdd = React.useCallback((e) => {
                                    //     console.log('e', e);
                                    //
                                    // });
                                    return (
                                        <div>
                                            {values.areas && values.areas.length > 0 ? (
                                                values.areas.map((friend, index) => (
                                                    <div key={index}> {/*  eslint-disable-line */}
                                                        <Field name={`areas.${index}.name`} />
                                                        <Field name={`areas.${index}.description`} />
                                                        <div onClick={() => arrayHelpers.remove(index)}> {/*  eslint-disable-line */}
                                                            remove
                                                        </div>
                                                    </div>
                                                ))
                                            ) : null}
                                            <div>
                                                <button
                                                    type="button"
                                                    onClick={() => arrayHelpers.push({
                                                        name: 'new name',
                                                        description: 'as'
                                                    })}
                                                >
                                                    Add a friend
                                                </button>
                                            </div>
                                        </div>
                                    );
                                }}
                            />
                        </Form>
                    );
                }}
            />
        </div>
    );
};

Basic.defaultProps = {
    yes: true
};

Basic.propTypes = {
    yes: PropTypes.bool
};

export default Basic;
