import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// Import other components if needed

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Add other routes here */}
    </Routes>
  </BrowserRouter>
);

export default App;
