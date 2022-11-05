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
          key={item.id}
          onItemsClick={() => props.onItemClick(item.name)}
          items={item}
        />
      ))}
    </div>
  );
};

export default FoodMenu;