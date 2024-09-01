import React from 'react';
import { Link } from 'react-router-dom';
import { CompanyType } from '../constants/types';

const Company: React.FC<CompanyType> = ({ companyContainerStyle }) => {
  return (
    <div className={companyContainerStyle}>
      <h1 className="font-bold text-lg mb-2.5">COMPANY</h1>
      <Link className="router-link-active router-link-exact-active" to="#">
        About
      </Link>
      <Link to="#" className="">
        FAQs
      </Link>
      <Link to="#" className="router-link-active router-link-exact-active">
        {' '}
        Join Our Community{' '}
      </Link>
      <Link to="#" className="">
        {' '}
        Partnership{' '}
      </Link>
      <Link to="#" className="">
        {' '}
        Privacy Policy{' '}
      </Link>
    </div>
  );
};

export default Company;
