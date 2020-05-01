import React from 'react';
import logo from './logo.svg';
import './App.css';


const welcome = {
   greeting: 'Hey',
   title : "My Title",
   
}


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
       
        <h1>{welcome.greeting} {welcome.title}
        
          
          <p>Learn React Kushu, learn it!</p>
        </h1>
        <label htmlFor="search">Search: </label> 
        <input id="search" type="text" />
      </header>
    </div>
  );
}

export default App;
