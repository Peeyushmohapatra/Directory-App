import "./App.css";
import User from "./Components/Newuser/User";
import { Routes, Route, Link } from "react-router-dom";
import Information from "./Components/Userinformation/Information";

function App() {
  return (
    <div className="App">
      <div className="buttonContainer">
      <Link className="link" to="/user"><button className="button">Add Users</button></Link>
      <Link className="link" to="/retrievedata"><button className="button">Retrieve Items</button></Link>
      </div>

      <Routes>
        <Route path="/" element={<User />}/>
        <Route path="/user" element={<User />}/>
        <Route path="/retrievedata" element={<Information/>} />
      </Routes>
    </div>
  );
}

export default App;
