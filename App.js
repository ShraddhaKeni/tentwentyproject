import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './src/pages/Home';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} exact></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;