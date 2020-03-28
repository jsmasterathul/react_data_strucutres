import React, { useEffect } from "react";
import "./styles.css";
import Searching from "./chapter1/searching";
import SideMenu from "./SideMenu";

import { Grid } from "@material-ui/core";

import { Switch, Route, useHistory, useLocation } from "react-router-dom";

export default function App() {
  let history = useHistory();
  let location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      history.push("chapter1");
    }
    //
  }, [history, location]);
  return (
    <Grid container>
      <Grid item sm={2} md={4}>
        <SideMenu />
      </Grid>
      <Grid item md={6}>
        <Switch>
          <Route path="/chapter1">
            <Searching />
          </Route>
        </Switch>
      </Grid>
    </Grid>
  );
}
