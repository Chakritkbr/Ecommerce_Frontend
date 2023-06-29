import React, { useState } from 'react';
import Layout from '../../components/Layout';
import axios from 'axios';
import toast from 'react-hot-toast';
import '../../styles/AuthStyles.css';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [answer, setAnswer] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
        { email, newPassword, answer }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate('/login');
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error('Something went wrong');
    }
  };

  return (
    <Layout title='Forgot-Password Ecommerce App'>
      <div className='form-container' style={{ minHeight: '90vh' }}>
        <h1>RESET PASSWORD</h1>
        <form onSubmit={handleSubmit}>
          <div className='row mb-3'>
            <div className='col-sm-10'>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='form-control'
                id='inputEmail'
                placeholder='Enter your Email'
                required
              />
            </div>
          </div>
          <div className='row mb-3'>
            <div className='col-sm-10'>
              <input
                type='text'
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className='form-control'
                id='inputAnswer'
                placeholder='Enter your fav dish'
                required
              />
            </div>
          </div>
          <div className='row mb-3'>
            <div className='col-sm-10'>
              <input
                type='password'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className='form-control'
                id='inputNewPassword'
                placeholder='Enter your Password'
                required
              />
            </div>
          </div>

          <button type='submit' className='btn btn-primary'>
            Reset Password
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
