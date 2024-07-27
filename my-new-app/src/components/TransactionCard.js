import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import TransactionForm from './TransactionForm';

const TransactionCard = ({ transaction, onUpdateTransaction, onDeleteTransaction }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedTransaction) => {
    onUpdateTransaction(transaction.id, updatedTransaction);
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    onDeleteTransaction(transaction.id);
  };

  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>${transaction.amount}</td>
      <td>
        {isEditing ? (
          <TransactionForm 
            transaction={transaction} 
            onSave={handleSave} 
            onCancel={() => setIsEditing(false)} 
          />
        ) : (
          <div>
            <Button variant="warning" onClick={handleEditClick}>Edit</Button>
            <Button variant="danger" onClick={handleDeleteClick}>Delete</Button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default TransactionCard;
