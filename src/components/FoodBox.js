// src/components/FoodBox.js

import React from 'react';
import { Card, Button } from 'antd';

function FoodBox({ food, deleteFood }) {
  return (
    <Card title={food.name} style={{ width: 300, margin: 10 }}>
      <img src={food.image} alt={food.name} width={100} />
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <p>
        <strong>Total Calories: {food.calories * food.servings} kcal</strong>
      </p>
      <Button type="danger" onClick={() => deleteFood(food.name)}>
        Delete
      </Button>
    </Card>
  );
}

export default FoodBox;
