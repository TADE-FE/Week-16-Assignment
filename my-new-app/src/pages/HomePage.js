import React, { useEffect, useState } from 'react';
import { getTransactions } from '../services/api';
import { Container, Row, Col, ListGroup, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await getTransactions();
        console.log('Data fetched:', data);
        setTransactions(data);
      } catch (err) {
        console.error('Error fetching transactions:', err);
        setError('Failed to fetch transactions. Please try again later.');
      }
    };
    fetchTransactions();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          {error && <Alert variant="danger">{error}</Alert>}
          <ListGroup>
            {transactions.map(transaction => (
              <ListGroup.Item key={transaction.id}>
                {transaction.title}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
