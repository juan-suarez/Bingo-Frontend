// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import ProtectedRoute from './components/ProtectedRoute';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

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
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
