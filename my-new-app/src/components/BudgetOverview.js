import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const BudgetOverview = ({ budgetCategories, transactions }) => {
  const getTotalSpent = (categoryId) => {
    return transactions
      .filter(transaction => transaction.categoryId === categoryId)
      .reduce((total, transaction) => total + transaction.amount, 0);
  };

  return (
    <Row>
      {budgetCategories.map(category => (
        <Col key={category.id} sm={12} md={6} lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>{category.name}</Card.Title>
              <Card.Text>
                Budget: ${category.budget}
                <br />
                Spent: ${getTotalSpent(category.id)}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default BudgetOverview;
