import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  const updateUser = (id) => {
    const user = users.find((user) => user.id === id);

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(() => {
        alert("User updated successfully");
      });
  };

  const deleteUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
        alert("User deleted successfully");
      });
  };

  const onChangeHandler = (id, key, value) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, [key]: value } : user
      )
    );
  };

  return (
    <div className="App">
      <table className="bp4-html-table .modifier">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <input
                  value={user.email}
                  onChange={(e) =>
                    onChangeHandler(user.id, "email", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  value={user.website}
                  onChange={(e) =>
                    onChangeHandler(user.id, "website", e.target.value)
                  }
                />
              </td>
              <td>
                <button onClick={() => updateUser(user.id)}>Update</button>
                &nbsp;
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
