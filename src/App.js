import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const url = "https://api.github.com/users";

  const [users, setusers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    // console.log(users);
    setusers(users);
  };

  // UseEffect when users api call
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <h1>Fetching API's</h1>
      {/* getting all the users */}
      <ul>
        {users.map((user) => {
          const { id, html_url, login, avatar_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <section>
                <h3>{login}</h3>
                <a href={html_url}>Profile</a>
              </section>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
