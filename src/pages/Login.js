import React from 'react';
import Axios from 'axios';
import {Formik, Field, Form, ErrorMessage} from 'formik';
   
export default function Login({loggedIn, authorized}) {

    return (
        <div className="container text-center">
        <h1>Log in</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit= {(values ,{setSubmitting})=>{
            setTimeout(()=>{
                alert(JSON.stringify(values, null, 2));
                Axios({
                    method:'post',
                    url: 'http://challenge-react.alkemy.org/',
                    data: {
                        email: values.email,
                        password: values.password
                        }
                    }).then(function (response) {
                    console.log(response);
                    loggedIn(values.email, values.password, response.data.token);
                    }).catch(function(error){
                        if(error.response.status === 401){
                        alert(error);
                        }   
                    });
                setSubmitting(false);
            }, 300);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
                <label>Email:</label>
                <Field type="email" name="email" placeholder="Write your email" />
                <ErrorMessage name="email" component="div" />
                <br/>
                <label>Password:</label>
                <Field type="password" name="password" placeholder="Write your password"/>
                <ErrorMessage name="password" component="div" />
                <br/>
                <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                    Submit
                </button>
            </Form>
          )}
        </Formik>
      </div>)
}

