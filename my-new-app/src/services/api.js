
const API_URL = 'https://92f327cb-d276-466b-8a0c-ef47e4136147.mock.pstmn.io'

export const getTransactions = async () => {
  console.log('Fetching transactions from:', `${API_URL}/posts`); 
  const response = await fetch(`${API_URL}/posts`);
  if (!response.ok) {
    throw new Error('Failed to fetch transactions');
  }
  return response.json();
};

export const createTransaction = async (transaction) => {
  console.log('Creating transaction:', transaction); 
  const response = await fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(transaction),
  });
  if (!response.ok) {
    throw new Error('Failed to create transaction');
  }
  return response.json();
};

export const updateTransaction = async (id, transaction) => {
  console.log('Updating transaction:', id, transaction); 
  const response = await fetch(`${API_URL}/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(transaction),
  });
  if (!response.ok) {
    throw new Error('Failed to update transaction');
  }
  return response.json();
};

export const deleteTransaction = async (id) => {
  console.log('Deleting transaction:', id); 
  const response = await fetch(`${API_URL}/posts/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete transaction');
  }
  return response.json();
};
