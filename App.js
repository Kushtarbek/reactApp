import React from 'react';
import './App.css';





 const App = () => {
   const stories = [
    {
      title: ' React ',
      url: 'https://reactjs.org/', 
      author: 'Jordan Walke ', 
      num_comments: 3, 
      points: 4, 
      objectID: 0, 
    },
       { title: ' Redux ',
        url: 'https://redux.js.org/', 
        author: 'Dan Abramov, Andrew Clark ', 
        num_comments: 2, 
        points: 5, 
        objectID: 1, },
    ];
  
  return (
       <div>
          <h1>My hacker stories</h1>

          <Search/> 

          <hr />
          <List list={stories}/>
       </div>
  );
};

/*Search Component is extracted to handle state & show state without revealing its content.*/
const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState(''); //array is destructured to pass as initial state
   

    /*Callback function introduced*/
    const handleChange = event => {

      /*used elsewhere, but 'calls back to where it was introduced*/
      setSearchTerm(event.target.value); 
      //console.log(event.target.value);
  };

  return (
    <div> 
      <label htmlFor="search">Search: </label> 
      <input id="search" type="text" onChange={handleChange} />
      <p> 
        Searching for <strong>{searchTerm}</strong>. 
      </p> 
    </div> 
  )
  };



const List = props =>
  props.list.map(item =>(
    
    <div key={item.objectID}>
      <span>
        <a href= {item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
      </div> 
    ));


export default App;
