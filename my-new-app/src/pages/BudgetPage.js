import React, { useEffect, useState } from 'react';
import { getBudgetCategories, createBudgetCategory, updateBudgetCategory, deleteBudgetCategory } from '../services/api'; // Adjust the import path as necessary
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Row, Col, ListGroup, Button, Form, Alert } from 'react-bootstrap';

const BudgetPage = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [editingCategory, setEditingCategory] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getBudgetCategories();
        setCategories(data);
      } catch (error) {
        setError('Error fetching budget categories');
        console.error('Error fetching budget categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleAddCategory = async () => {
    if (!newCategory.trim()) return;

    try {
      const data = await createBudgetCategory({ name: newCategory });
      setCategories([...categories, data]);
      setNewCategory('');
    } catch (error) {
      setError('Error adding budget category');
      console.error('Error adding budget category:', error);
    }
  };

  const handleEditCategory = async (id) => {
    if (!editValue.trim()) return;

    try {
      const data = await updateBudgetCategory(id, { name: editValue });
      setCategories(categories.map(cat => (cat.id === id ? data : cat)));
      setEditingCategory(null);
      setEditValue('');
    } catch (error) {
      setError('Error updating budget category');
      console.error('Error updating budget category:', error);
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      await deleteBudgetCategory(id);
      setCategories(categories.filter(cat => cat.id !== id));
    } catch (error) {
      setError('Error deleting budget category');
      console.error('Error deleting budget category:', error);
    }
  };

  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col>
            <h1>Budget Page</h1>
            {loading && <p>Loading budget categories...</p>}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form>
              <Form.Group controlId="formNewCategory">
                <Form.Label>Add New Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter new category name"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" onClick={handleAddCategory}>
                Add Category
              </Button>
            </Form>
            <ListGroup className="mt-4">
              {categories.length > 0 ? (
                categories.map(category => (
                  <ListGroup.Item key={category.id}>
                    {editingCategory === category.id ? (
                      <Form inline>
                        <Form.Control
                          type="text"
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          placeholder="Edit category"
                        />
                        <Button variant="success" onClick={() => handleEditCategory(category.id)}>Save</Button>
                        <Button variant="secondary" onClick={() => { setEditingCategory(null); setEditValue(''); }}>Cancel</Button>
                      </Form>
                    ) : (
                      <>
                        {category.name}
                        <Button
                          variant="warning"
                          className="float-end"
                          onClick={() => {
                            setEditingCategory(category.id);
                            setEditValue(category.name);
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          className="float-end me-2"
                          onClick={() => handleDeleteCategory(category.id)}
                        >
                          Delete
                        </Button>
                      </>
                    )}
                  </ListGroup.Item>
                ))
              ) : (
                <ListGroup.Item>No categories found</ListGroup.Item>
              )}
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default BudgetPage;
