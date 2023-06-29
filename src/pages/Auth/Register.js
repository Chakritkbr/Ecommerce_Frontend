import React from 'react';
import Layout from '../../components/Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import '../../styles/AuthStyles.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [answer, setAnswer] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { name, email, password, phone, address, answer }
      );

      if (res && res.data.success) {
        console.log(res.data.success);
        toast.success(res.data.message);
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
    <Layout title='form'>
      <div className='form-container' style={{ minHeight: '90vh' }}>
        <h1>Register Page</h1>
        <form onSubmit={handleSubmit}>
          <div className='row mb-3'>
            <div className='col-sm-10'>
              <input
                type='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='form-control'
                id='inputname'
                placeholder='Enter your Name'
                required
              />
            </div>
          </div>
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
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='form-control'
                id='inputPassword'
                placeholder='Enter your Password'
                required
              />
            </div>
          </div>
          <div className='row mb-3'>
            <div className='col-sm-10'>
              <input
                type='text'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className='form-control'
                id='inputPhone'
                placeholder='Enter your Phone number'
                required
              />
            </div>
          </div>
          <div className='row mb-3'>
            <div className='col-sm-10'>
              <input
                type='text'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className='form-control'
                id='inputAddress'
                placeholder='Enter your Address'
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
                id='inputAddress'
                placeholder='What is your Fav dish?'
                required
              />
            </div>
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};
export default Register;
