import React from 'react';
import { Link } from 'react-router-dom';
import { ContactType } from '../constants/types';

const Contact: React.FC<ContactType> = ({ contactContainerStyle }) => {
  return (
    <div className={contactContainerStyle}>
      <h1 className="">CONTACT</h1>
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
