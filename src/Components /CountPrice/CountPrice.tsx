import React from 'react';
import './CountPrice.css';

interface Props {
  price: number;
}

const CountPrice: React.FC<Props> = (props) => {
  return <p><b>Total price: </b>{props.price}</p>;
};

export default CountPrice;