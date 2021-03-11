import React, { useContext } from "react";
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom';

// import { Router } from "@reach/router";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Application from "./components/Application";
import UserProvider from "./provider/UserProvider";
import ProfilePage from "./components/ProfilePage";
import { UserContext } from "./provider/UserProvider";
function App() {
  
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}

export default App;