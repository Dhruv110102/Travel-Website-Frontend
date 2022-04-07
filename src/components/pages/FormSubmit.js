import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

const FormSubmit = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <Link to='/site'>
        <button className='form-suceed-button' type='submit'> Continue</button>

      </Link>
      
    </div>
  );
};

export default FormSubmit;