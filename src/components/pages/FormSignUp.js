import React from 'react';
import validate from './validateinfo';
import useForm from './useForm';
import './SignUp.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
const Register = () =>{
  const {username,email,password,password2} = values
  if(username && email && password && (password===password2)){
    axios.post("http://localhost:9002/register",values)
    .then(res =>{
      alert(res.data.message)
    })

  }
  else{
    alert(" Please Enter Values")
  }
}  

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
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
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' onClick={Register}>
          Register
        </button>
        
        <span className='form-input-login'>
          Already have an account? Login <a href='/sign-in'>here</a>
        </span>
        <Link to ='/'>
        <button className='back-btn' type='submit'>
                Back
            </button>
        </Link>
      </form>
    </div>
  );
};

export default FormSignup;