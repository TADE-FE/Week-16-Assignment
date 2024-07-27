import React, { useState, useEffect } from 'react';
import { getTransactions, createTransaction, updateTransaction, deleteTransaction } from '../services/api';
import { Container, Row, Col, ListGroup, Alert, Button } from 'react-bootstrap';

const TransactionPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('TransactionPage component mounted or updated');

    const fetchTransactions = async () => {
      console.log('Fetching transactions');
      try {
        const data = await getTransactions();
        console.log('Transactions fetched:', data);
        setTransactions(data);
      } catch (err) {
        console.error('Error fetching transactions:', err);
        setError('Failed to fetch transactions. Please try again later.');
      }
    };

    fetchTransactions();
  }, []); 

  const handleCreate = async () => {
    try {
      const newTransaction = { title: 'New Transaction' };
      console.log('Creating new transaction:', newTransaction);
      const createdTransaction = await createTransaction(newTransaction);
      console.log('Transaction created:', createdTransaction);
      setTransactions(prevTransactions => [...prevTransactions, createdTransaction]);
    } catch (err) {
      console.error('Error creating transaction:', err);
      setError('Failed to create transaction. Please try again later.');
    }
  };

  const handleUpdate = async (id) => {
    try {
      const updatedTransaction = { title: 'Updated Transaction' };
      console.log('Updating transaction:', id, updatedTransaction);
      const result = await updateTransaction(id, updatedTransaction);
      console.log('Transaction updated:', result);
      setTransactions(prevTransactions => prevTransactions.map(t => (t.id === id ? result : t)));
    } catch (err) {
      console.error('Error updating transaction:', err);
      setError('Failed to update transaction. Please try again later.');
    }
  };

  const handleDelete = async (id) => {
    try {
      console.log('Deleting transaction:', id);
      await deleteTransaction(id);
      console.log('Transaction deleted:', id);
      setTransactions(prevTransactions => prevTransactions.filter(t => t.id !== id));
    } catch (err) {
      console.error('Error deleting transaction:', err);
      setError('Failed to delete transaction. Please try again later.');
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          {error && <Alert variant="danger">{error}</Alert>}
          <Button onClick={handleCreate}>Create Transaction</Button>
          <ListGroup>
            {transactions.map(transaction => (
              <ListGroup.Item key={transaction.id}>
                {transaction.title}
                <Button onClick={() => handleUpdate(transaction.id)}>Update</Button>
                <Button onClick={() => handleDelete(transaction.id)}>Delete</Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default TransactionPage;
