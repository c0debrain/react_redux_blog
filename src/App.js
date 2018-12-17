import React, { Component } from 'react';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';

const App = () => ( 
  <div className="App" style={{ display: "flex", justifyContent: "space-around"}}>
    <BlogForm />
    <BlogList />
  </div>
);

export default App;
