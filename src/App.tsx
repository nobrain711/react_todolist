import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Todolist } from "./routes/List";
import { Provider } from "react-redux";
import { store } from "./modules/redux/store";
import { Header } from "./components/common/header/header";
import { Details } from "./routes/Details";
import { Edits } from "./routes/Edits";
import { FC } from "react";
import { AddData } from "./components/mock/firebase/AddData";
import { ReadData } from "./components/mock/firebase/ReadData";
import { UpdateData } from "./components/mock/firebase/UpdateData";
import { DeleteData } from "./components/mock/firebase/DeleteData";

export const App: FC = () => {
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
