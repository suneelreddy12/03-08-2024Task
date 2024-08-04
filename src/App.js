import React, { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the users!", error);
      });
  }, []);

  const addUser = (user) => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", user)
      .then((response) => {
        setUsers([...users, response.data]);
      })
      .catch((error) => {
        console.error("There was an error adding the user!", error);
      });
  };

  const updateUser = (id, updatedUser) => {
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${id}`, updatedUser)
      .then((response) => {
        setUsers(users.map((user) => (user.id === id ? response.data : user)));
      })
      .catch((error) => {
        console.error("There was an error updating the user!", error);
      });
  };

  const deleteUser = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.error("There was an error deleting the user!", error);
      });
  };

  return (
    <div className="App">
      <h1>User Management</h1>
      <UserForm addUser={addUser} />
      <UserList users={users} updateUser={updateUser} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
