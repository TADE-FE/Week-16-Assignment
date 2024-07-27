import React from 'react';
import { Table, Button } from 'react-bootstrap';
import TransactionCard from './TransactionCard';

const TransactionList = ({ transactions, onUpdateTransaction, onDeleteTransaction }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <TransactionCard 
            key={transaction.id} 
            transaction={transaction} 
            onUpdateTransaction={onUpdateTransaction} 
            onDeleteTransaction={onDeleteTransaction} 
          />
        ))}
      </tbody>
    </Table>
  );
};

export default TransactionList;
