import React from 'react';
import './FoodItem.css';

interface Props {
  name: string;
  price: number;
  onItemsClick: React.MouseEventHandler;
}

const FoodItem: React.FC<Props> = (props) => {
  return (
    <div className="food-item" onClick={props.onItemsClick}>
      <h4>{props.name}</h4>
      <p>Price: {props.price}</p>
    </div>
  );
};

export default FoodItem;