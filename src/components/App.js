// import './App.css';
import { useState, useEffect } from "react";
import DynamicContainer from "./DynamicContainer";

function App() {
  
  const [token, setToken] = useState("")

  useEffect(() => {
    fetch('http://localhost:9292/token')
    .then(r => r.json())
    .then(token => setToken(token["access_token"]))
  },[ /*add error fix later */])


  return (
    <DynamicContainer token={token} />
  );
}

export default App;
