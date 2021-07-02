import { useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";

const staticUsers = [
  {
    id: "1",
    username: "Qismet",
    age: 20,
  },
  {
    id: "2",
    username: "Jhon",
    age: 20,
  },
  {
    id: "3",
    username: "Kelwin",
    age: 20,
  },
  {
    id: "4",
    username: "Barak",
    age: 20,
  },
];

function App() {
  const [users, setUser] = useState(staticUsers);

  const addUser = (user) => {
    setUser((prevUser) => {
      return [...users,user];
    });
  };


  return (
    <div className="App">
      <AddUser onAddUser={addUser} />
      <UserList users={users}/>
    </div>
  );
}

export default App;
