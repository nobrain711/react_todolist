import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Todolist } from "./routes/List";
import { Provider } from "react-redux";
import { store } from "./modules/redux/store";
import { Header } from "./components/common/header/header";
import Details from "./routes/Details";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Todolist />} />
          <Route path="details/:id" element={<Details />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
