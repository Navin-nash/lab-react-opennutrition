// src/components/AddFoodForm.js

import React, { useState } from 'react';
import { Input, Button } from 'antd';

function AddFoodForm({ addFood }) {
  const [newFood, setNewFood] = useState({
    name: '',
    image: '',
    calories: '',
    servings: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFood({ ...newFood, [name]: value });
  };

  const handleSubmit = () => {
    if (newFood.name && newFood.image && newFood.calories && newFood.servings) {
      addFood(newFood);
      setNewFood({ name: '', image: '', calories: '', servings: '' });
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <Input
        placeholder="Food Name"
        name="name"
        value={newFood.name}
        onChange={handleInputChange}
        style={{ marginBottom: '10px' }}
      />
      <Input
        placeholder="Image URL"
        name="image"
        value={newFood.image}
        onChange={handleInputChange}
        style={{ marginBottom: '10px' }}
      />
      <Input
        placeholder="Calories"
        name="calories"
        value={newFood.calories}
        onChange={handleInputChange}
        type="number"
        style={{ marginBottom: '10px' }}
      />
      <Input
        placeholder="Servings"
        name="servings"
        value={newFood.servings}
        onChange={handleInputChange}
        type="number"
        style={{ marginBottom: '10px' }}
      />
      <Button type="primary" onClick={handleSubmit}>
        Add Food
      </Button>
    </div>
  );
}

export default AddFoodForm;
