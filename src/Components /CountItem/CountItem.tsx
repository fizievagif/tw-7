import React from 'react';
import './CountItem.css'

interface Props extends React.PropsWithChildren {
  name: string;
  amount: number;
  price: number;
  deleteItem: React.MouseEventHandler;
}

const CountItem: React.FC<Props> = (props) => {
  return (
    <div className="count-item">
      <p>{props.name}</p>
      <span>x{props.amount}</span>
      <span>{props.price} KGZ</span>
      <button
        className="del-in"
        onClick={props.deleteItem}
      >❌</button>

    </div>
  );
};

export default CountItem;