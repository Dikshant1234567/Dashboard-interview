import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/dashboard/Dashboard";
import {Route, Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={ <Login />}></Route>
        <Route path="/dashboard" element={ <Dashboard />}></Route>
      </Routes>
      
    </>
  );
}

export default App;
