import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser/AddUser';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import UpdateUser from './components/UpdateUser/UpdateUser';
import Users from './components/Users/Users';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="addUser" element={<AddUser />} />
        <Route path="/users/update/:id" element={<UpdateUser />} />
      </Routes>
    </div>
  );
}

export default App;


// https://node-mongo-120.herokuapp.com/
