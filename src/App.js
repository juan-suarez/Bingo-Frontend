// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={"Home"} />
          <Route path="/login" element={<h1>login</h1>} />
          <Route path="/register" component={<h1>register</h1>} />
          <Route path="/bingo" component={<h1>bingo</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
