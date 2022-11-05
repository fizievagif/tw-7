import React from 'react';
import './FoodItem.css';
import {FoodItems} from "../../types";

interface Props {
  items: FoodItems;
  onItemsClick: React.MouseEventHandler;
}

const FoodItem: React.FC<Props> = (props) => {
  return (
    <div className="food-item" onClick={props.onItemsClick}>
      <img src={props.items.image} alt={props.items.name}/>
      <div>
        <h4>{props.items.name}</h4>
        <p>Price: {props.items.price}</p>
      </div>
    </div>
  );
};

export default FoodItem;