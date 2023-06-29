import React from 'react';
import Layout from './../components/Layout.js';
import { useSearch } from '../context/search.js';

const Search = () => {
  const [values, setValues] = useSearch();
  return (
    <Layout title={'Search results'}>
      <div className='container'>
        <div className='text-center'>
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? 'No Products Found'
              : `Found ${values?.results.length}`}
          </h6>

          <div className='d-flex flex-wrap mt-4'>
            {values?.results.map((p) => (
              <div className='card m-2' style={{ width: '18rem' }}>
                <img
                  src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                  className='card-img-top'
                  alt={p.name}
                  style={{ height: '15rem' }}
                />
                <div className='card-body'>
                  <h5 className='card-title'>{p.name}</h5>
                  <p className='card-text '>
                    {p.description.substring(0, 60)}...
                  </p>
                  <p className='card-text'> $ {p.price}</p>
                  <a class='btn btn-primary ms-1'>More Details</a>
                  <a class='btn btn-secondary ms-1'>Add to Cart</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
