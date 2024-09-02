import React from 'react';
import { Link } from 'react-router-dom';
import { ContactType } from '../constants/types';

const Contact: React.FC<ContactType> = ({ contactContainerStyle, title }) => {
  return (
    <div className={contactContainerStyle}>
      <p className="font-bold">{title}</p>
      <Link to="#" className="">
        {' '}
        info@axia.africa{' '}
      </Link>
      <Link to="#" className="">
        {' '}
        +234 707 109 7262{' '}
      </Link>
      <Link to="#" className="">
        {' '}
        +234 707 072 4286{' '}
      </Link>
      <Link to="#" className="">
        {' '}
        +234 707 088 2627{' '}
      </Link>
    </div>
  );
};

export default Contact;
