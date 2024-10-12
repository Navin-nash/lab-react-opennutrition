// src/App.js

import React, { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { Input, Button } from 'antd';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [filteredFoodList, setFilteredFoodList] = useState(foods);
  const [isFormVisible, setIsFormVisible] = useState(true);

  const addFood = (newFood) => {
    setFoodList([...foodList, newFood]);
    setFilteredFoodList([...foodList, newFood]);
  };

  const deleteFood = (foodName) => {
    const updatedFoodList = foodList.filter((food) => food.name !== foodName);
    setFoodList(updatedFoodList);
    setFilteredFoodList(updatedFoodList);
  };

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    const filteredFoods = foodList.filter((food) =>
      food.name.toLowerCase().includes(searchValue)
    );
    setFilteredFoodList(filteredFoods);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="App">
      <Button type="primary" onClick={toggleFormVisibility} style={{ marginBottom: '20px' }}>
        {isFormVisible ? 'Hide Form' : 'Add New Food'}
      </Button>
      {isFormVisible && <AddFoodForm addFood={addFood} />}
      <Input
        placeholder="Search for food"
        onChange={handleSearch}
        style={{ marginBottom: '20px' }}
      />
      {filteredFoodList.length > 0 ? (
        filteredFoodList.map((food, index) => (
          <FoodBox key={index} food={food} deleteFood={deleteFood} />
        ))
      ) : (
        <p>No more food items to display. Please add more items!</p>
      )}
    </div>
  );
}

export default App;
