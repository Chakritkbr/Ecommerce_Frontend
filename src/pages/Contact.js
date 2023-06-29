import React from 'react';
import Layout from '../components/Layout';
import { BiMailSend, BiPhoneCall, BiSupport } from 'react-icons/bi';
const Contact = () => {
  return (
    <Layout title={'Contact us'}>
      <div className='row contactus '>
        <div className='col-md-6 '>
          <img
            src='https://i.pinimg.com/736x/72/98/e3/7298e36148009e21d1c6b66984608e91.jpg'
            alt='contactus'
            style={{ width: '100%' }}
          />
        </div>
        <div className='col-md-4'>
          <h1 className='bg-dark p-2 text-white text-center'>CONTACT US</h1>
          <p className='text-justify mt-2'>
            Please go back. It's dosen't help ,Coz I can't help myself to fallin
            in love too.
          </p>
          <p className='mt-3'>
            <BiMailSend /> : www.NotHelp@seriouslynothelp.com
          </p>
          <p className='mt-3'>
            <BiPhoneCall /> : 02-000-000
          </p>
          <p className='mt-3'>
            <BiSupport /> : 999-999-9999 (tor tid tai)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
