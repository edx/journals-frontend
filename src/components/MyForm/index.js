/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';

class MyForm extends React.Component {
  handleSubmit = (values, {
    props = this.props,
    setSubmitting,
  }) => {
    console.log(values);
    alert('Form Submitted');
    setSubmitting(false);
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <Formik
        initialValues={{
           first_name: '',
           email_address: '',
           gender: '',
        }}
        validate={(values) => {
          const errors = [];
          if (!values.email) {
             errors.email = 'Email Address Required';
            }
            return errors;
        }}
        onSubmit={this.handleSubmit}
        render={formProps => (
          <Form>
            <Field
              type="text"
              name="first_name"
              placeholder="First Name"
            />
            <ErrorMessage name="first_name" />

            <Field
              type="text"
              name="email"
              placeholder="Email address"
            />
            <ErrorMessage name="email" />

            <Field
              name="gender"
              component="select"
              placeholder="Your Gender"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Field>

            <ErrorMessage name="gender" />

            <button
              type="submit"
              disabled={formProps.isSubmitting}
            >
                    Submit Form
            </button>
          </Form>
           )}
      />);
  }
}

export default MyForm;
