import logo from './logo.svg';
import React from 'react';
import './App.css';
import Form from './components/Form.jsx';

const App = () => {
  return (
    <div className="App">
      <div className="App-content">
        <p>
        To-Do-List App
        </p>
        <Form/>
      </div>
    </div>
  );
}

export default App;
