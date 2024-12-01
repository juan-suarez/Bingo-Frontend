// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import ProtectedRoute from './components/ProtectedRoute';
import { Login } from './pages/Login';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              home
            </ProtectedRoute>
          } />
          <Route path="/bingo" element={
            <ProtectedRoute>
              <h1>bingo</h1>
            </ProtectedRoute>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<h1>register</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
