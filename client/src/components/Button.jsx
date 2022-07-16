import React from 'react';
import { useDispatch } from 'react-redux';

const Button = ({ className, name, handler, value, isActive }) => {
  const dispatch = useDispatch();

  return (
    <button
      className={isActive ? `btn btn-primary text-nowrap active ${className} btn-cstm` : `btn btn-primary text-nowrap ${className} btn-cstm`}
      type='button'
      onClick={() => dispatch(handler(value))}
    >
      <span>{name}</span>
    </button>
  );
};

export default Button;
