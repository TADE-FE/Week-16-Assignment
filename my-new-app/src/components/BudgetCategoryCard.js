import React from 'react';
import { Card } from 'react-bootstrap';

const BudgetCategoryCard = ({ category }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{category.name}</Card.Title>
        <Card.Text>Budget: ${category.budget}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BudgetCategoryCard;
