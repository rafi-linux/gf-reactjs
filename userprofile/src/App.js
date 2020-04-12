import React from 'react';
import logo from './logo.svg';
import './App.css';
import Avatar from './avatar';
import UserName from './userName';
import Bio from './bio';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Avatar />
        <UserName />
        <Bio />
      </header>
    </div>
  );
}

export default App;
