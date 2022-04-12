import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
const Patient = lazy(() => import("../pages/Patient"))
const Doctor = lazy(() => import("../pages/Doctor"))
const Admin = lazy(() => import("../pages/Admin"))
const Authenticate = lazy(() => import("../pages/Authenticate"))


export const PageRouters = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Authenticate />}  />
          <Route exact path="/doctor" render={() => <Doctor />}  />
          <Route exact path="/patient" render={() => <Patient />}  />
          <Route exact path="/admin" render={() => <Admin />}  />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default PageRouters