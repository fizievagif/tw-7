import React from 'react';
import {FoodItems} from "../../types";
import FoodItem from "../FoodItem/FoodItem";
import './FoodMenu.css';

interface Props {
  foodProduct: FoodItems[];
  onItemClick: (name: string) => void;
}

const FoodMenu: React.FC<Props> = (props) => {
  return (
    <div className="food-menu">
      {props.foodProduct.map(item => (
        <FoodItem
          onItemsClick={() => props.onItemClick(item.name)}
          key={item.id}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default FoodMenu;