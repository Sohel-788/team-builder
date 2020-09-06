import React, { useState, useEffect } from 'react';
import './App.css';
import User from './Components/User/User';

function App() {
  const [users, setUsers] = useState([]);
  const [team, setTeam] = useState([]);
  const addMember = (name) => {
    setTeam([...team, name]);
  }
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=15")
      .then(res => res.json())
      .then(data => setUsers(data.results))
      .catch(error => console.log(error))
  }, [])
  return (
    <div className="App">
      <header className="header">
        <div className="heder-style">
          <h1>This is react header</h1>
          <h3>Below the added member........</h3>
        </div>
        <div className="user">
          <ul>
            {
              team.map((m, idx) => <li key={idx}>{m}</li>)
            }
          </ul>
          {

            users.map(user => <User user={user} addMember={addMember}></User>)
          }
        </div>

      </header>
    </div>
  );
}

export default App;
