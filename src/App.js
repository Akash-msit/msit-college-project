import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Who from './components/Who.js'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Who" element={<Who/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>

    </Router>
  );
}

export default App;
