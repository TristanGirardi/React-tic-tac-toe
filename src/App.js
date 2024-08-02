import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TicTacToe from './TicTacToe';
import LoginForm from './LoginForm';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/TicTacToe" element={<TicTacToe/>} />
        <Route path="*" element={<LoginForm/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

