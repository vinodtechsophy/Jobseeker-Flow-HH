import { Provider } from "react-redux";
import StoreService from "./services/StoreService";
import JobSeekerBase from "./pages/JobSeekerBase";
import "./App.css";
import React from "react";

const store = StoreService;

function App() {
  return (
    <Provider store={store}>
      <JobSeekerBase />
    </Provider>
  );
}

export default App;
