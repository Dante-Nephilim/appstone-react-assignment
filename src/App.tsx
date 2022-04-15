import { useState } from "react";
import "./App.css";
import UserList from "./UserList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header"></header>
      <UserList />
    </div>
  );
}

export default App;
