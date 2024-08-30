import { Link } from 'react-router-dom';
import { ButtonValues } from '../constants/types';

const Button = ({ title, containerStyle, linkStyle, route }: ButtonValues) => {
  return (
    <div className={containerStyle}>
      <Link className={linkStyle} to={route}>
        {title}
      </Link>
    </div>
  );
};

export default Button;
