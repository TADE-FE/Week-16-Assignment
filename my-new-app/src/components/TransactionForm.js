import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const TransactionForm = ({ transaction = {}, onSave, onCancel }) => {
  const [date, setDate] = useState(transaction.date || '');
  const [description, setDescription] = useState(transaction.description || '');
  const [amount, setAmount] = useState(transaction.amount || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ date, description, amount: parseFloat(amount) });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formDate">
        <Form.Label>Date</Form.Label>
        <Form.Control 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
        />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control 
          type="text" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
      </Form.Group>

      <Form.Group controlId="formAmount">
        <Form.Label>Amount</Form.Label>
        <Form.Control 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
        />
      </Form.Group>

      <Button variant="primary" type="submit">Save</Button>
      {onCancel && <Button variant="secondary" onClick={onCancel}>Cancel</Button>}
    </Form>
  );
};

export default TransactionForm;
