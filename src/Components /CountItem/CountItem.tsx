import React from 'react';
import './CountItem.css'

interface Props {
  name: string;
  // amount: number;
  // price: number;
  // deleteItem: React.MouseEventHandler;
}

const CountItem: React.FC<Props> = (props) => {
  return (
    <div className="count-item">
      <p>{props.name}</p>
      {/*<span>{props.amount}</span>*/}
      {/*<span>{props.price}</span>*/}
      <button
        className="del-in"
        // onClick={props.deleteItem}
      >❌</button>
    </div>
  );
};

export default CountItem;