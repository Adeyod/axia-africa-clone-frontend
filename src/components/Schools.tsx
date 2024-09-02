import React from 'react';
import { Link } from 'react-router-dom';
import { SchoolsType } from '../constants/types';

const Schools: React.FC<SchoolsType> = ({
  linkStyles,
  schoolsContainerStyle,
}) => {
  return (
    <div className={schoolsContainerStyle}>
      <p className="font-bold">SCHOOLS</p>
      <Link to="#" className={linkStyles}>
        {' '}
        School of Product{' '}
      </Link>
      <Link to="#" className={linkStyles}>
        {' '}
        School of Data{' '}
      </Link>
      <Link to="#" className={linkStyles}>
        {' '}
        School of Engineering{' '}
      </Link>
    </div>
  );
};

export default Schools;
