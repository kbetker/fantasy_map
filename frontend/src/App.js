import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LogInForm from "./components/LogInForm";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Locations from "./components/Locations";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <>
    <Navigation isLoaded={isLoaded} />
    {isLoaded && (
      <Switch>
        <Route path="/login">
          <LogInForm />
        </Route>

        <Route path="/signup">
          <SignupFormPage />
        </Route>

        <Route path="/locations/:id">
          <Locations />
        </Route>

      </Switch>
    )}
  </>
  );
}

export default App;
