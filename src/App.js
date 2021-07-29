import logo from "./logo.svg";
import "./App.css";
import { MainRouter } from "./common/MainRouter";
import { useState } from "react";
import Login from "./views/Login";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="App">
      <MainRouter />
    </div>
  );
}

export default App;
