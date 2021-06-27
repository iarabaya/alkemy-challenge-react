import React from 'react';
import Axios from 'axios';
import {Formik, Field, Form} from 'formik';
import {useHistory} from 'react-router-dom';
   
export default function Login({loggedIn, authorized}) {
   const history = useHistory();

    return (
        <div>
            <Formik 
                initialValues={{ 
                    email: '', 
                    password: '' 
                }} 
                validate={values =>{
                    const errors = {};
                        if(!values.email){
                            errors.email = 'Email required';
                        }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                            errors.email= 'Invalid Email Adress';
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
                            authorized();
                            history.push("/Home");
                            }).catch(function(error){
                                if(error.response.status === 401){
                                alert(error);
                                }   
                            });
                        setSubmitting(false);
                    }, 300);
            }}>
                <Form>
                     <div className="container text-center" >
                        <h1>Log In</h1>
                        <div className="form-floating md-4">
                                <Field
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="jane@acme.com"
                                    type="email"
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="form-floating md-4">
                                
                                <Field 
                                    className="form-control"
                                    id="password" 
                                    name="password" 
                                    placeholdee="password" 
                                    type="password"
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                        <div className="col-12">
                            <button type="submit"  className="btn btn-primary">Submit</button>
                        </div>
                     </div>
                </Form>
            
            </Formik>
        </div>
    )
}
