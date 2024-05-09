import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Todolist } from "./routes/Todolist";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/todo" />} />
        <Route path="/todo" element={<Todolist />} />
      </Routes>
    </Router>
  );
}

export default App;
