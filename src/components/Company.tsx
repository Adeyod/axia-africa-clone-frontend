import React from 'react';
import { Link } from 'react-router-dom';
import { CompanyType } from '../constants/types';

const Company: React.FC<CompanyType> = ({ companyContainerStyle }) => {
  return (
    <div className={companyContainerStyle}>
      <p className="font-bold text-lg mb-2.5">COMPANY</p>
      <Link className="" to="#">
        About
      </Link>
      <Link to="#" className="">
        FAQs
      </Link>
      <Link to="#" className="">
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
