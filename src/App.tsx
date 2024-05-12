import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Todolist } from "./routes/List";
import { Provider } from "react-redux";
import { store } from "./modules/redux/store";
import { Header } from "./components/common/header/header";
import { Details } from "./routes/Details";
import { Edits } from "./routes/Edits";

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Todolist />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="edits/:id" element={<Edits />} />
        </Routes>
      </Router>
    </Provider>
  );
};
