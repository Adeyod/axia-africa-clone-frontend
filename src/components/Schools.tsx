import React from 'react';
import { Link } from 'react-router-dom';
import { SchoolsType } from '../constants/types';

const Schools: React.FC<SchoolsType> = ({ schoolsContainerStyle }) => {
  return (
    <div className={schoolsContainerStyle}>
      <h1 className="font-bold">SCHOOLS</h1>
      <Link to="#" className="font-medium text-gray-100 text-sm">
        {' '}
        School of Product{' '}
      </Link>
      <Link to="#" className="font-medium text-gray-100 text-sm">
        {' '}
        School of Data{' '}
      </Link>
      <Link to="#" className="font-medium text-gray-100 text-sm">
        {' '}
        School of Engineering{' '}
      </Link>
    </div>
  );
};

export default Schools;
