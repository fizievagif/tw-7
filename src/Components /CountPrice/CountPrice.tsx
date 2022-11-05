import React from 'react';

interface Props {
  price: number;
}

const CountPrice: React.FC<Props> = (props) => {
  return (
    <div>
      <p>Total price: {props.price}</p>
    </div>
  );
};

export default CountPrice;