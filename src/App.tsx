import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Todolist } from "./routes/Todolist";
import { Provider } from "react-redux";
import { store } from "./modules/redux/store";
import { Header } from "./components/common/header/header";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/todo" />} />
          <Route path="/todo" element={<Todolist />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
