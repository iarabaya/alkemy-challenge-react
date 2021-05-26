import React, {Component} from 'react';
import Axios from 'axios';
import {Formik} from 'formik';


export default class Login extends Component{
    
    render(){
 
        return (<Formik 
            initialValues={{ email: '', password: '' }} 
            validate={values =>{
                const errors = {};
                    if(!values.email){
                        errors.email = 'Email required';
                     }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                        errors.email= 'Invalid Email Adress';
                    }
                     return errors;
            }} onSubmit= {(values ,{setSubmitting})=>{
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
                        console.log(values.email, values.password);
                        // this.props.loggedIn.bind(this, values.email, values.password);
                        }).catch(function(error){
                            if(error.response.status === 401){
                            alert(error);
                            }   
                        });
                    setSubmitting(false);
                }, 300);
        }}>
            {
                ({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                }) => (
                    <form onSubmit={handleSubmit}>
                        <label> Email:
                            <input 
                            type="email" 
                            name="email" 
                            placeholder="e-mail"
                            onChange={handleChange} 
                            onBlur={handleBlur} 
                            value={values.email}
                            />
                        </label> {errors.email && touched.email && errors.email}
                        <label> Password:
                            <input 
                            type="password" 
                            name="password" 
                            placeholder="password"
                            onChange={handleChange} 
                            onBlur={handleBlur} 
                            value={values.password}
                            />
                        </label> {errors.password && touched.password && errors.password}

                        <button type="submit" disabled={isSubmitting}>
                            Enviar
                        </button>
                    </form>
                )}

        </Formik>)}
}
