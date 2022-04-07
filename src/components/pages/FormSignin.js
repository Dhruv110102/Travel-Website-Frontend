import React from 'react';
import validate1 from './validate1';
import useForm1 from '../useForm1';
import './SignUp.css';

import { Link } from 'react-router-dom';
import axios from 'axios';

const FormSignin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm1(
    submitForm,
    validate1
  );
const login=()=>{
  axios.post("http://localhost:9002/login",values)
  .then(res=>{
    alert(res.data.message)
  })
}

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Please Use the earlier credentials to Login, Thank you for using our service.
        </h1>
        
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        
        
        <button className='form-input-btn' onClick={login}>
          Login
        </button>
        
        
        

        <Link to ='/'>
            <button className='back-btn' type='submit'>
                Back
            </button>
        </Link>

        
      </form>
    </div>
  );
};

export default FormSignin;