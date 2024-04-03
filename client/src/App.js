import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DatabaseSelection from './pages/DataBaseSelection';

const App = () => {
  return (

    <Routes>
      <Route path="/" exact element={<LoginPage />} />
      <Route path="/database-selection" element={<DatabaseSelection/>} />
    </Routes>
  
  );
};

export default App;
