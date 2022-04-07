//import React from 'react'

//export default function SignIn() {
   // return <h1 className="Sign-in">This is Login Page</h1>
    
//}
import React, { useState } from 'react';
import './SignUp.css';
import FormSignin from './FormSignin';
import FormSubmit from './FormSubmit';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        
        <div className='form-content-left'>
          <img className='form-img' src='travel2.png' alt='kids edu'/>
          
        </div>
        {!isSubmitted ? (
          <FormSignin submitForm={submitForm} />
        ) : (
          <FormSubmit/>
        )}
      </div>
    </>
  );
};

export default Form;


