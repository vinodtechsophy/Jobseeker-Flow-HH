import { Provider } from "react-redux";
import StoreService from "./services/StoreService";
import JobSeekerBase from "./pages/JobSeekerBase";
import "./App.css";
import React, { useEffect } from "react";
import KeycloakService from "./services/KeycloakService";

const store = StoreService;

function App() {

  const fetchToken = async () => {
    const token = await KeycloakService.fetchTokenDifferently();
    sessionStorage.setItem("react-token", token);
  };

  useEffect(() => {
    fetchToken()
 }, []) 

  return (
    <Provider store={store}>
      <JobSeekerBase />
    </Provider>
  );
}

export default App;
