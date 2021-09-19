import React from 'react';
import logo from './logo.svg';
import './App.css';
import Page1 from './page/page1';
import Page2 from './page/page2';

function App() {
  return (
    <div className="App">
      <div>
        <Page1 />
      </div>
      <div>
        <Page2 />
      </div>
    </div>
  );
}

export default App;
