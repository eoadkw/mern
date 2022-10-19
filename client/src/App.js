import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/getUsers').then((response) => {
      setListOfUsers(response.data);
    });
  }, []);
  return (
    <div className="App">
           {' '}
      <div>
               {' '}
        {listOfUsers.map((user) => {
          return (
            <div className="list">
                           {' '}
              <h3>
                                Name: {user.name}, Age: {user.age}, Username:{' '}
                {user.username}             {' '}
              </h3>
                         {' '}
            </div>
          );
        })}
             {' '}
      </div>
         {' '}
    </div>
  );
}
export default App;
