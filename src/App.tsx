import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import { Todolist } from "./routes/Todolist";
import { Provider } from "react-redux";
import { store } from "./modules/redux/store";
import { Header } from "./components/common/header/header";
import Edit from "./routes/Edit";
import Details from "./routes/Details";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/todo" />} />
          <Route path="/todo" element={<Todolist />} />
          {/* <Route path="details/:id" element={<Details />} />
          </Route> */}
          <Route path="/todo/details/:id" element={<Details />} />
          <Route path="/todo/edit/:id" element={<Edit />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
