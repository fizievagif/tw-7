import React, {useState} from 'react';
import FoodMenu from "../../Components /FoodMenu/FoodMenu";
import CountPrice from "../../Components /CountPrice/CountPrice";
import drink from '../../assets/drink.png';
import meal from '../../assets/meal.png';
import './App.css';
import CountItem from "../../Components /CountItem/CountItem";

function App() {
  const [foodItems, setFoodItem] = useState([
    {id: 1, name: 'Hamburger', count: 0, price: 80, image: meal},
    {id: 2, name: 'Coffee', count: 0, price: 50, image: drink},
    {id: 3, name: 'Tea', count: 0, price: 50, image: drink},
    {id: 4, name: 'Cola', count: 0, price: 60, image: drink},
    {id: 5, name: 'Fries', count: 0, price: 45, image: meal},
    {id: 6, name: 'Cheeseburger', count: 0, price: 90, image: meal},
  ]);

  const addItem = (name: string) => {
    setFoodItem(state => state.map(item => {
      return item.name === name ? {
        ...item,
        count: item.count + 1,
      } : item;
    }));
  };

  const getTotalPrice = foodItems.reduce((acc, item) => {
    foodItems.forEach(totalPrice => {
      if (item.name === totalPrice.name) {
        return acc += (item.count * totalPrice.price);
      }
    });
    return acc;
  }, 0);

  const printFoodItems = () =>
    foodItems.map((item,index)=> {
      return item.count > 0 ? <CountItem
          key={Math.random()}
          name={item.name}
          amount={item.count}
          price={item.price}
          deleteItem={() => deleteIngredient(index)}/>
        : null
    })


  const deleteIngredient = (index: number) => {
    setFoodItem(prevState => prevState.map((item, indx) =>
      index === indx ? {...item, count: 0} : item))
  }

  const isCardEmpty = foodItems.every((item) => item.count === 0)

  return (
    <div className="container">
      <FoodMenu
        onItemClick={addItem}
        foodProduct={foodItems}
      />

      <div className="count-block">
        {isCardEmpty ? <span>Order list is empty</span> : printFoodItems()}

        <CountPrice
          price={getTotalPrice}
        />
      </div>
    </div>
  );
}

export default App;
