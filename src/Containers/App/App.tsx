import React, {useState} from 'react';
import {FoodItems} from "../../types";
import './App.css';
import FoodMenu from "../../Components /FoodMenu/FoodMenu";
import CountPrice from "../../Components /CountPrice/CountPrice";
import CountItem from "../../Components /CountItem/CountItem";

const FOODITEMS: FoodItems[] = [
  {id: 1, name: 'Hamburger', price: 80, },
  {id: 2, name: 'Coffee', price: 50},
  {id: 3, name: 'Tea', price: 50},
  {id: 4, name: 'Cola', price: 60},
  {id: 5, name: 'Fries', price: 45},
  {id: 6, name: 'Cheeseburger', price: 90},
];

function App() {
  const [foodItem, setFoodItem] = useState([
    {name: 'Hamburger', count: 0},
    {name: 'Coffee', count: 0},
    {name: 'Tea', count: 0},
    {name: 'Cola', count: 0},
    {name: 'Fries', count: 0},
    {name: 'Cheeseburger', count: 0},
  ]);

  const addIngredient = (name: string) => {
    setFoodItem(state => state.map(item => {
      return item.name === name ? {
        ...item,
        count: item.count + 1,
      } : item;
    }));
  };

  const getTotalPrice = foodItem.reduce((acc, item) => {
    FOODITEMS.forEach(totalPrice => {
      if (item.name === totalPrice.name) {
        return acc += (item.count * totalPrice.price);
      }
    });
    return acc;
  }, 0);

  return (
    <div className="container">
      <FoodMenu
        onItemClick={addIngredient}
        foodProduct={FOODITEMS}
      />

      <div>
        <CountPrice
          price={getTotalPrice}
        />
      </div>
    </div>
  );
}

export default App;
