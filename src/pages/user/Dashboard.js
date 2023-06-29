import React from 'react';
import Layout from '../../components/Layout';
import UserMenu from '../../components/UserMenu';
import { useAuth } from '../../context/auth';

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={'Dashboard - User '}>
      <div className='container-fluid m-3 p-3'>
        <div className='row'>
          <div className='col-md-3'>
            <UserMenu />
          </div>
          <div className='col-md-9'>
            <div className='card w-75 p-2'>
              <h1>User Name : {auth?.user?.name}</h1>
              <h1>User Email : {auth?.user?.email}</h1>
              <h1>User Address : {auth?.user?.address}</h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Dashboard;
