import React, { useContext } from "react";

import ProfilePage from "./ProfilePage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import UserProvider from "../provider/UserProvider";
import { UserContext } from "../provider/UserProvider";

function Application() {
    const user = useContext(UserContext);
    return (
          user ?
          <ProfilePage />
        :
          <Router>
          <Switch>
               <Route exact path='/signUp' component={SignUp}></Route>
              <Route exact path='/' component={SignIn}></Route>
          </Switch>
        
          </Router>
        
    );
  }
  
export default Application;