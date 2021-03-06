import React from "react";
import { Redirect, Route, Switch, Router } from "react-router-dom";
import history from '../history';
import AddSite from '../app/container/AddSite/AddSite'
import HomeRouter from "./HomeRouter"
import WIPRouter from "./WIPRouter"
import Sites from '../app/container/Sites/Sites'
import Index from '../app/pages/EmployeeMenu/Index'
import OrganisationMain from "../app/pages/OrganisationMenu/OrganisationMain";
import Account from "../app/container/Account/Account";
import Search from "../app/components/Search/Search"
import EmployeesPage from "../app/pages/OrganisationMenu/EmployeesPage";
import NewSite from '../app/pages/NewSite/NewSite'
import EmployeeBooking from "../app/pages/EmployeeBooking/EmployeeBooking";

export const Routes = () => {
  return (
    <Router history={history}>
    <Switch>
      {
        /* Redirect from root URL to /quick-start. */
        <Redirect exact from="/" to="/wip" />
      }
      <Route path="/home" component={HomeRouter} />
      <Route path="/organisation" component={AddSite} />
      <Route path="/account" component={OrganisationMain} />
      <Route path="/search" component={Search} />
      {/*<Route path="/organisation" component={AddSite} /> */ }
      <Route path="/organisation" component={EmployeesPage} />
      <Route path="/wip" component={WIPRouter} />
      <Route path="/newsite" component={NewSite}/>
      <Route path="/sites/:id" component={Sites}/>
      <Route exact path="/employee" component={Index} />
      <Route exact path="/employeebooking" component={EmployeeBooking} />
    </Switch>
    </Router>
  );
};
